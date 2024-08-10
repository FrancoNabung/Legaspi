

// Toggle hamburger menu on or off (Mobile)
window.onload = function () {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const serviceBoxes = document.querySelectorAll('.service-box');
    serviceBoxes.forEach(function(serviceBox) {
        serviceBox.addEventListener('click', function() {
            serviceBox.classList.toggle('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const bankBoxes = document.querySelectorAll('.bank-box');
    bankBoxes.forEach(function(bank) {
        bank.addEventListener('click', function() {
            bank.classList.toggle('active');
        });
    });
});

let close_modal = document.getElementById("close");
let dark_overlay = document.getElementById("dark-modal-overlay");

let oralprophylaxis_modal = document.getElementById("oralprophylaxismodal");
let toothrestoration_modal = document.getElementById("toothrestorationmodal");
let toothextraction_modal = document.getElementById("toothextractionmodal");
let removabledenture_modal = document.getElementById("removabledenturemodal");
let orthodonticbraces_modal = document.getElementById("orthodonticbracesmodal");
let rootcanal_modal = document.getElementById("rootcanalmodal");
let flexibledenture_modal = document.getElementById("flexibledenturemodal");
let toothwhitening_modal = document.getElementById("toothwhiteningmodal");
let jacketcrown_modal = document.getElementById("jacketcrownmodal");
let toothveneer_modal = document.getElementById("toothveneermodal");

let select_oralprophylaxis = document.getElementById("selectoralprophylaxis");
let select_toothrestoration = document.getElementById("selecttoothrestoration");
let select_toothextraction = document.getElementById("selecttoothextraction");
let select_removabledenture = document.getElementById("selectremovabledenture");
let select_orthodonticbraces = document.getElementById("selectorthodonticbraces");
let select_rootcanal = document.getElementById("selectrootcanal");
let select_flexibledenture = document.getElementById("selectflexibledenture");
let select_toothwhitening = document.getElementById("selecttoothwhitening");
let select_jacketcrown = document.getElementById("selectjacketcrown");
let select_toothveneer = document.getElementById("selecttoothveneer");

let unselect_oralprophylaxis = document.getElementById("unselectoralprophylaxis");
let unselect_toothrestoration = document.getElementById("unselecttoothrestoration");
let unselect_toothextraction = document.getElementById("unselecttoothextraction");
let unselect_removabledenture = document.getElementById("unselectremovabledenture");
let unselect_orthodonticbraces = document.getElementById("unselectorthodonticbraces");
let unselect_rootcanal = document.getElementById("unselectrootcanal");
let unselect_flexibledenture = document.getElementById("unselectflexibledenture");
let unselect_toothwhitening = document.getElementById("unselecttoothwhitening");
let unselect_jacketcrown = document.getElementById("unselectjacketcrown");
let unselect_toothveneer = document.getElementById("unselecttoothveneer");

let oralprophylaxis_box = document.getElementById("oralprophylaxisbox");
let toothrestoration_box = document.getElementById("toothrestorationbox");
let toothextraction_box = document.getElementById("toothextractionbox");
let removabledenture_box = document.getElementById("removabledenturebox");
let orthodonticbraces_box = document.getElementById("orthodonticbracesbox");
let rootcanal_box = document.getElementById("rootcanalbox");
let flexibledenture_box = document.getElementById("flexibledenturebox");
let toothwhitening_box = document.getElementById("toothwhiteningbox");
let jacketcrown_box = document.getElementById("jacketcrownbox");
let toothveneer_box = document.getElementById("toothveneerbox");




function closeservicemodal() {
    oralprophylaxis_modal.style.display = "none";
    toothrestoration_modal.style.display = "none";
    toothextraction_modal.style.display = "none";
    removabledenture_modal.style.display = "none";
    orthodonticbraces_modal.style.display = "none";
    rootcanal_modal.style.display = "none";
    flexibledenture_modal.style.display = "none";
    toothwhitening_modal.style.display = "none";
    jacketcrown_modal.style.display = "none";
    toothveneer_modal.style.display = "none";
    dark_overlay.style.display='none';
}




function openoralprophylaxis() {
    oralprophylaxis_modal.style.display = "flex";
    dark_overlay.style.display='block';
}
function selectoralprophylaxis() {
    oralprophylaxis_modal.style.display = "none";
    dark_overlay.style.display='none';
    oralprophylaxis_box.style.backgroundColor="#5ca7e977";
    select_oralprophylaxis.style.display="none";
    unselect_oralprophylaxis.style.display='block';
}
function unselectoralprophylaxis() {
    oralprophylaxis_box.style.backgroundColor="white";
    oralprophylaxis_modal.style.display = "none";
    dark_overlay.style.display='none';
    select_oralprophylaxis.style.display="block"
    unselect_oralprophylaxis.style.display="none"
}





function opentoothrestoration() {
    toothrestoration_modal.style.display = "flex";
    dark_overlay.style.display='block';
}
function selecttoothrestoration() {
    toothrestoration_modal.style.display = "none";
    dark_overlay.style.display='none';
    toothrestoration_box.style.backgroundColor="#5ca7e977";
    select_toothrestoration.style.display="none";
    unselect_toothrestoration.style.display='block';
}
function unselecttoothrestoration() {
    toothrestoration_box.style.backgroundColor="white";
    toothrestoration_modal.style.display = "none";
    dark_overlay.style.display='none';
    select_toothrestoration.style.display="block"
    unselect_toothrestoration.style.display="none"
}




function opentoothextraction() {
    toothextraction_modal.style.display = "flex";
    dark_overlay.style.display='block';
}
function selecttoothextraction() {
    toothextraction_modal.style.display = "none";
    dark_overlay.style.display='none';
    toothextraction_box.style.backgroundColor="#5ca7e977";
    select_toothextraction.style.display="none";
    unselect_toothextraction.style.display='block';
}
function unselecttoothextraction() {
    toothextraction_box.style.backgroundColor="white";
    toothextraction_modal.style.display = "none";
    dark_overlay.style.display='none';
    select_toothextraction.style.display="block"
    unselect_toothextraction.style.display="none"
}




function openremovabledenture() {
    removabledenture_modal.style.display = "flex";
    dark_overlay.style.display='block';
}
function selectremovabledenture() {
    removabledenture_modal.style.display = "none";
    dark_overlay.style.display='none';
    removabledenture_box.style.backgroundColor="#5ca7e977";
    select_removabledenture.style.display="none";
    unselect_removabledenture.style.display='block';
}
function unselectremovabledenture() {
    removabledenture_box.style.backgroundColor="white";
    removabledenture_modal.style.display = "none";
    dark_overlay.style.display='none';
    select_removabledenture.style.display="block"
    unselect_removabledenture.style.display="none"
}





function openorthodonticbraces() {
    orthodonticbraces_modal.style.display = "flex";
    dark_overlay.style.display='block';
}
function selectorthodonticbraces() {
    orthodonticbraces_modal.style.display = "none";
    dark_overlay.style.display='none';
    orthodonticbraces_box.style.backgroundColor="#5ca7e977";
    select_orthodonticbraces.style.display="none";
    unselect_orthodonticbraces.style.display='block';
}
function unselectorthodonticbraces() {
    orthodonticbraces_box.style.backgroundColor="white";
    orthodonticbraces_modal.style.display = "none";
    dark_overlay.style.display='none';
    select_orthodonticbraces.style.display="block"
    unselect_orthodonticbraces.style.display="none"
}




function openrootcanal() {
    rootcanal_modal.style.display = "flex";
    dark_overlay.style.display='block';
}
function selectrootcanal() {
    rootcanal_modal.style.display = "none";
    dark_overlay.style.display='none';
    rootcanal_box.style.backgroundColor="#5ca7e977";
    select_rootcanal.style.display="none";
    unselect_rootcanal.style.display='block';
}
function unselectrootcanal() {
    rootcanal_box.style.backgroundColor="white";
    rootcanal_modal.style.display = "none";
    dark_overlay.style.display='none';
    select_rootcanal.style.display="block"
    unselect_rootcanal.style.display="none"
}



function openflexibledenture() {
    flexibledenture_modal.style.display = "flex";
    dark_overlay.style.display='block';
}
function selectflexibledenture() {
    flexibledenture_modal.style.display = "none";
    dark_overlay.style.display='none';
    flexibledenture_box.style.backgroundColor="#5ca7e977";
    select_flexibledenture.style.display="none";
    unselect_flexibledenture.style.display='block';
}
function unselectflexibledenture() {
    flexibledenture_box.style.backgroundColor="white";
    flexibledenture_modal.style.display = "none";
    dark_overlay.style.display='none';
    select_flexibledenture.style.display="block"
    unselect_flexibledenture.style.display="none"
}



function opentoothwhitening() {
    toothwhitening_modal.style.display = "flex";
    dark_overlay.style.display='block';
}
function selecttoothwhitening() {
    toothwhitening_modal.style.display = "none";
    dark_overlay.style.display='none';
    toothwhitening_box.style.backgroundColor="#5ca7e977";
    select_toothwhitening.style.display="none";
    unselect_toothwhitening.style.display='block';
}
function unselecttoothwhitening() {
    toothwhitening_box.style.backgroundColor="white";
    toothwhitening_modal.style.display = "none";
    dark_overlay.style.display='none';
    select_toothwhitening.style.display="block"
    unselect_toothwhitening.style.display="none"
}






function openjacketcrown() {
    jacketcrown_modal.style.display = "flex";
    dark_overlay.style.display='block';
}
function selectjacketcrown() {
    jacketcrown_modal.style.display = "none";
    dark_overlay.style.display='none';
    jacketcrown_box.style.backgroundColor="#5ca7e977";
    select_jacketcrown.style.display="none";
    unselect_jacketcrown.style.display='block';
}
function unselectjacketcrown() {
    jacketcrown_box.style.backgroundColor="white";
    jacketcrown_modal.style.display = "none";
    dark_overlay.style.display='none';
    select_jacketcrown.style.display="block"
    unselect_jacketcrown.style.display="none"
}





function opentoothveneer() {
    toothveneer_modal.style.display = "flex";
    dark_overlay.style.display='block';
}
function selecttoothveneer() {
    toothveneer_modal.style.display = "none";
    dark_overlay.style.display='none';
    toothveneer_box.style.backgroundColor="#5ca7e977";
    select_toothveneer.style.display="none";
    unselect_toothveneer.style.display='block';
}
function unselecttoothveneer() {
    toothveneer_box.style.backgroundColor="white";
    toothveneer_modal.style.display = "none";
    dark_overlay.style.display='none';
    select_toothveneer.style.display="block";
    unselect_toothveneer.style.display="none";
}


 
