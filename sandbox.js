


//The navbar element 'company' that has a drop down list

let company = document.querySelector('.company');

//The drop down of the company

let companyDropDownList = document.querySelector('.company-drop-list');

companyDropDownList.style.display = ' none';



//Once the user clicks on compnay, the drop down shows 
//and the arrow icon rotates 180 deg

company.addEventListener('click', showDropDownMenu);

function showDropDownMenu() {
    if(companyDropDownList.dataset.drop == 'false') {
        companyDropDownList.dataset.drop = 'true';
        companyDropDownList.style.display = '';
        document.getElementById('company-icon').classList.add('fa-rotate-180');
    } else {
        companyDropDownList.dataset.drop = 'false';
        companyDropDownList.style.display = 'none';
        document.getElementById('company-icon').classList.remove('fa-rotate-180');
    }
}


//The mobile hamburger menu 

let mobileHamburgerMenu = document.querySelector('.mobile-menu');

//Changing the media query through JS

// 1. Create a condition that targets viewports at least 768px wide

const mediaQuery = window.matchMedia('(max-width: 45rem)')

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Show the hamburger menu
    mobileHamburgerMenu.style.display = '';
  } else //Hide the hamburger menu {
    mobileHamburgerMenu.style.display = 'none';
  }


// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);


//The mobile hamburger drop-down menu

let mobileHamburgerDropDown = document.querySelector('.mobile-drop-dwon-menu');

mobileHamburgerDropDown.style.display = 'none';

//fas fa-times


mobileHamburgerMenu.addEventListener('click', showMobileDropDownMenu);

//When user clicks on the hamburger menu, a drop-down menu will show 

function showMobileDropDownMenu() {
    if(mobileHamburgerMenu.dataset.mobileDrop == 'false') {
        mobileHamburgerMenu.dataset.mobileDrop = 'true';
        mobileHamburgerDropDown.style.display = '';
        document.getElementById('mobile-menu').classList.remove('fa-bars');
        document.getElementById('mobile-menu').classList.add('fa-times');
        document.body.style.overflow = 'hidden';
    } else {
        mobileHamburgerMenu.dataset.mobileDrop = 'false';
        mobileHamburgerDropDown.style.display = 'none';
        document.getElementById('mobile-menu').classList.add('fa-bars');
        document.getElementById('mobile-menu').classList.remove('fa-times');
        document.body.style.overflow = '';
    }
    

}


//The warning message that shows when the user enters the website

let warningMessage = document.querySelector('.warning');

//The close button of the warning message

let warningMessageCloseBtn = document.querySelector('.fa-times');

warningMessageCloseBtn.addEventListener('click', closeTheWarningMessage);

function closeTheWarningMessage() {
    warningMessage.remove();
}



//The drive, eat and ride taps

let drive = document.querySelector('.drive');

let eat = document.querySelector('.eat');

let ride = document.querySelector('.ride');

//When clicked on each section, it will have a black bottom border under it's tap


drive.addEventListener('click', highlightDrive);

function highlightDrive() {
    drive.style.borderBottom = '5px solid black';
    eat.style.borderBottom = '0';
    ride.style.borderBottom = '0';
}

eat.addEventListener('click', highlightEat);

function highlightEat() {
    drive.style.borderBottom = '0';
    eat.style.borderBottom = '5px solid black';
    ride.style.borderBottom = '0';
}

ride.addEventListener('click', highlightRide);

function highlightRide() {
    drive.style.borderBottom = '0';
    eat.style.borderBottom = '0';
    ride.style.borderBottom = '5px solid black';
}