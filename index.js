// Get the theme button element
//let themeButton = document.getElementById("theme-button");

// Toggle dark mode function
//const toggleDarkMode = () => {
// Toggle the "dark-mode" class on the body element
// document.body.classList.toggle("dark-mode");

// Define a Person object constructor
function Person(name, hometown, email) {
  this.name = name;
  this.hometown = hometown;
  this.email = email;
}

let count = 3;

// Function to add a signature to the petition
const addSignature = (person) => {
  // Create a new paragraph element to display the signature
  let signature = document.createElement("p");
  signature.textContent = "🖊️ " + person.name + " from " + person.hometown + " supports this.";

  // Append the signature to the signatures section
  let signaturesSection = document.querySelector(".signatures");
  signaturesSection.appendChild(signature);

  // Update the count of signatures
  count = count + 1;
  document.getElementById("counter").textContent = `${count} people have signed this petition and support this`;
}

// Function to clear form fields
const clearFormFields = () => {
  document.getElementById("name").value = "";
  document.getElementById("hometown").value = "";
  document.getElementById("email").value = "";
}

// Function to validate the form before submission
const validateForm = () => {
  let containsErrors = false;
  let name = document.getElementById("name").value;
  let hometown = document.getElementById("hometown").value;
  let email = document.getElementById("email").value;

  // Create a new Person object
  let person = new Person(name, hometown, email);

  // Check for errors
  if (name.length < 2 || hometown.length < 2 || (!email.endsWith('.com') && !email.endsWith('.edu'))) {
    containsErrors = true;
  }

  // Handle errors
  if (containsErrors) {
    // Display error messages or styles
    // For example, you can add error classes to form inputs
    document.getElementById("name").classList.add('error');
    document.getElementById("hometown").classList.add('error');
    document.getElementById("email").classList.add('error');
  } else {
    // Clear error styles
    document.getElementById("name").classList.remove('error');
    document.getElementById("hometown").classList.remove('error');
    document.getElementById("email").classList.remove('error');

    // Add the signature
    addSignature(person);
    // Clear form fields
    clearFormFields();

    // Show the modal and set a timeout to hide it after a few seconds
    toggleModal(person);
    setTimeout(() => {
      modal.style.display = "none";
    }, 4000); // 4000 milliseconds (4 seconds) delay
  }
}

// Function to toggle dark mode
const toggleDarkMode = () => {
  // Toggle the "dark-mode" class on the body element
  document.body.classList.toggle("dark-mode");
}

// Define the animation object
let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
};

// Function to reveal elements
const reveal = () => {
  // Get all elements with the class 'revealable'
  let revealableContainers = document.querySelectorAll('.revealable');

  // Get the height of the window
  let windowHeight = window.innerHeight;

  // Loop through each revealable container
  for (let i = 0; i < revealableContainers.length; i++) {
    // Get the top position of the current revealable container
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    // Check if the top of the revealable container is within the viewport
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      // Add the 'active' class to the revealable container
      revealableContainers[i].classList.add('active');
    } else {
      // Remove the 'active' class from the revealable container
      revealableContainers[i].classList.remove('active');
    }
  }
}

const signBtn = document.getElementById('sign-now-button');

// Call the reveal function initially to reveal elements on page load
reveal();

// Attach the reveal function to the 'scroll' event of the window
window.addEventListener('scroll', reveal);
signBtn.addEventListener('click', validateForm);

// Add click event listener to the theme button
let themeButton = document.getElementById("theme-button");
themeButton.addEventListener("click", toggleDarkMode);


// Function to toggle the modal
const toggleModal = (person) => {

  // Select the modal and modal content elements
  let modal = document.getElementById("thanks-modal");
  let modalContent = document.getElementById("thanks-modal-content");

  // Set the display style property of the entire modal to flex
  modal.style.display = "flex";
  // Set the text content of the modal to a personalized thank you message
  modalContent.textContent = `Thank you ${person.name}!`;

  // Hide the modal after a few seconds
  setTimeout(() => {
    modal.style.display = "none";
  }, 4000); // 4000 milliseconds (4 seconds) delay
}

//creates a variable called scaleFactor which we set = to 1
let scaleFactor = 1; 

//creates a variable callled ModalImage that will select the image in the modal using the querySelector
const modalImage = document.querySelector('#thanks-modal img');

//A function called 'scaleImage' is created
//function does not take any arguments
function scaleImage(){
  //checks if scaleFactor is = 1
  if(scaleFactor === 1){
//if scalefactor is = 1 then set it = to 0.8
    scaleFactor = 0.8; 
  }else{
    //if not = to 1, set it back to 1
    scaleFactor = 1; 
  }

  // Apply the scaleFactor to the modal image
  modalImage.style.transform = `scale(${scaleFactor})`;
}

//creates a new variable called 'intervalid' & sets it equal to a call to setInterval that calls scaleImage every half a second
let intervalid = setInterval(scaleImage, 500);

setTimeout(() => {
  clearInterval(intervalid); //stop the animation by calling clearInterval with the intervalid variable inside ();
});

  // Select the close button
const closeModalBtn = document.getElementById('close modal');

//function to close modal
const closeModal = () => {

//select modal
const modal = document.getElementById('thanks-modal');

modal.style.display = "none"; 

}

//Add click eventlistener to the close button

closeModalBtn.addEventListener('click', closeModal);   
