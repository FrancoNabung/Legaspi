const express = require('express');
const SerialPort = require('serialport');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = new SerialPort('COM3', { baudRate: 9600 });



const Readline = SerialPort.parsers.Readline;
const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

parser.on('data', function(data) {
  console.log('Received from GSM Module:', data);
});

app.post('/send-sms', (req, res) => {
  const { phone, message } = req.body;
  port.write(`AT+CMGS="${phone}"\r`, (err) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    setTimeout(() => {
      port.write(`${message}\x1A`, (err) => {
        if (err) {
          return res.status(500).send(err.message);
        }
        res.send('Message sent');
      });
    }, 1000);
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
