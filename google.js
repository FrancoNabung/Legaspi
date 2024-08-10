const { google } = require('googleapis');
const calendar = google.calendar('v3');

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: 'legaspi-dental-clinic@legaspi-dental-clinic-fa831.iam.gserviceaccount.com',
    private_key: `-----BEGIN PRIVATE KEY-----\n${process.env.PRIVATE_KEY}\n-----END PRIVATE KEY-----\n`,
  },
  scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
});

async function listEvents() {
  try {
    const authClient = await auth.getClient();
    google.options({ auth: authClient });

    const response = await calendar.events.list({
      calendarId: 'primary',
      timeMin: (new Date()).toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });

    const events = response.data.items;
    if (events.length) {
      console.log('Upcoming events:');
      events.map((event, i) => {
        const start = event.start.dateTime || event.start.date;
        console.log(`${start} - ${event.summary}`);
      });
    } else {
      console.log('No upcoming events found.');
    }
  } catch (error) {
    console.error('Error fetching events:', error);
  }
}

listEvents();
