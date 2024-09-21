// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;
  // TODO: Loop through all inputs


  // TODO: Validate the value of each input



  // TODO: Call addSignature() and clear fields if no errors

}

signNowButton.addEventListener('click', validateForm);

const email = document.getElementById('email');
if (!email.value.includes('.com')) {
  containsErrors = true;

}

