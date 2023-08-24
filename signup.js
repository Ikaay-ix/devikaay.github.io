const togggleButton = document.querySelector("#toggglebutton");
const navBarLinks = document.querySelector(".navlinks");
const authLinks = document.querySelector(".authlinks");
const allNavLink = document.querySelectorAll(".navlinks li");

togggleButton.addEventListener("click", () => {
    navBarLinks.classList.toggle("open")
    togggleButton.classList.toggle("open");
    authLinks.classList.toggle("open");
});

allNavLink.forEach(link => {
    link.addEventListener("click", () => {
    navBarLinks.classList.remove("open");
    togggleButton.classList.remove("open");
    authLinks.classList.remove("open");
    });
});



function validateForm() {
    // Get form input values
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const username = document.getElementById('username').value;
    const dob = new Date(document.getElementById('dob').value);
    const country = document.getElementById('country').value;
    const formattedCountry = country.replace(/\s/g, "").toUpperCase();
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const signupCaptcha = document.getElementById('signupCaptcha');
  
    // Regular expressions for validation
    const nameRegex = /^[a-zA-Z ]{3,}$/;
    const usernameRegex = /^[a-zA-Z]{3,}\.$/;
    const currentYear = new Date().getFullYear();
    const minAge = currentYear - 100;
    const maxAge = currentYear - 3;
    const validCountries = [
      "AFGHANISTAN", "ALBANIA", "ALGERIA", "ANDORRA", "ANGOLA", "ANTIGUAANDBARBUDA", "ARGENTINA",
      "ARMENIA", "AUSTRALIA", "AUSTRIA", "AZERBAIJAN", "BAHAMAS", "BAHRAIN", "BANGLADESH", "BARBADOS",
      "BELARUS", "BELGIUM", "BELIZE", "BENIN", "BHUTAN", "BOLIVIA", "BOSNIAANDHERZEGOVINA", "BOTSWANA",
      "BRAZIL", "BRUNEI", "BULGARIA", "BURKINAFASO", "BURUNDI", "CABOVERDE", "CAMBODIA", "CAMEROON",
      "CANADA", "CENTRALAFRICANREPUBLIC", "CHAD", "CHILE", "CHINA", "COLOMBIA", "COMOROS", "CONGO",
      "COSTARICA", "CROATIA", "CUBA", "CYPRUS", "CZECHREPUBLIC", "DEMOCRATICREPUBLICOFTHECONGO",
      "DENMARK", "DJIBOUTI", "DOMINICA", "DOMINICANREPUBLIC", "EASTTIMOR", "ECUADOR", "EGYPT",
      "ELSALVADOR", "EQUATORIALGUINEA", "ERITREA", "ESTONIA", "ESWATINI(FMR.SWAZILAND)", "ETHIOPIA",
      "FIJI", "FINLAND", "FRANCE", "GABON", "GAMBIA", "GEORGIA", "GERMANY", "GHANA", "GREECE", "GRENADA",
      "GUATEMALA", "GUINEA", "GUINEABISSAU", "GUYANA", "HAITI", "HONDURAS", "HUNGARY", "ICELAND", "INDIA",
      "INDONESIA", "IRAN", "IRAQ", "IRELAND", "ISRAEL", "ITALY", "IVORYCOAST", "JAMAICA", "JAPAN", "JORDAN",
      "KAZAKHSTAN", "KENYA", "KIRIBATI", "KUWAIT", "KYRGYZSTAN", "LAOS", "LATVIA", "LEBANON", "LESOTHO",
      "LIBERIA", "LIBYA", "LIECHTENSTEIN", "LITHUANIA", "LUXEMBOURG", "MADAGASCAR", "MALAWI", "MALAYSIA",
      "MALDIVES", "MALI", "MALTA", "MARSHALLISLANDS", "MAURITANIA", "MAURITIUS", "MEXICO", "MICRONESIA",
      "MOLDOVA", "MONACO", "MONGOLIA", "MONTENEGRO", "MOROCCO", "MOZAMBIQUE", "MYANMAR(BURMA)", "NAMIBIA",
      "NAURU", "NEPAL", "NETHERLANDS", "NEWZEALAND", "NICARAGUA", "NIGER", "NIGERIA", "NORTHKOREA",
      "NORTHMACEDONIA", "NORWAY", "OMAN", "PAKISTAN", "PALAU", "PANAMA", "PAPUANEWGUINEA", "PARAGUAY",
      "PERU", "PHILIPPINES", "POLAND", "PORTUGAL", "QATAR", "ROMANIA", "RUSSIA", "RWANDA",
      "SAINTKITTSANDNEVIS", "SAINTLUCIA", "SAINTVINCENTANDTHEGRENADINES", "SAMOA", "SANMARINO",
      "SAOTOMEANDPRINCIPE", "SAUDIARABIA", "SENEGAL", "SERBIA", "SEYCHELLES", "SIERRALEONE", "SINGAPORE",
      "SLOVAKIA", "SLOVENIA", "SOLOMONISLANDS", "SOMALIA", "SOUTHAFRICA", "SOUTHKOREA", "SOUTHSUDAN", "SPAIN",
      "SRILANKA", "SUDAN", "SURINAME", "SWEDEN", "SWITZERLAND", "SYRIA", "TAIWAN", "TAJIKISTAN", "TANZANIA",
      "THAILAND", "TOGO", "TONGA", "TRINIDADANDTOBAGO", "TUNISIA", "TURKEY", "TURKMENISTAN", "TUVALU",
      "UGANDA", "UKRAINE", "UNITEDARABEMIRATES", "UNITEDKINGDOM", "UNITEDSTATES", "URUGUAY", "UZBEKISTAN",
      "VANUATU", "VATICANCITY", "VENEZUELA", "VIETNAM", "YEMEN", "ZAMBIA", "ZIMBABWE"
    ];
    const phoneRegex = /^[0-9\-+\s()]{6,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\-=/\\|]{5,}$/;

  
  // Perform validation and display error messages in specified spans
  if (!nameRegex.test(firstName)) {
    document.getElementById('firstNameError').textContent = "Name must contain at least 3 characters.";
    return false;
  } else {
    document.getElementById('firstNameError').textContent = "";
  }

  if (!nameRegex.test(lastName)) {
    document.getElementById('lastNameError').textContent = "Name must contain at least 3 characters.";
    return false;
  } else {
    document.getElementById('lastNameError').textContent = "";
  }

  if (!usernameRegex.test(username)) {
    document.getElementById('usernameError').textContent = "Username must contain at least 3 characters consisting of only letters and a fullstop '.' at the end.";
    return false;
  } else {
    document.getElementById('usernameError').textContent = "";
  }

  if (dob.getFullYear() < minAge || dob.getFullYear() > maxAge) {
    document.getElementById('dobError').textContent = "Date of birth year must start from 3 years of age and must not be older than 100 years of age.";
    return false;
  } else {
    document.getElementById('dobError').textContent = "";
  }

  if (!validCountries.includes(formattedCountry)) {
    document.getElementById('countryError').textContent = "Invalid country selection.";
    return false;
  } else {
    document.getElementById('countryError').textContent = "";
  }

  if (phone && !phoneRegex.test(phone)) {
    document.getElementById('phoneError').textContent = "Invalid phone number.";
    return false;
  } else {
    document.getElementById('phoneError').textContent = "";
  }

  if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = "Invalid email address.";
    return false;
  } else {
    document.getElementById('emailError').textContent = "";
  }

  if (!passwordRegex.test(password)) {
    document.getElementById('passwordError').textContent = "Password must be at least 5 characters and contain at least one uppercase letter, one number, and one special character.";
    return false;
  } else {
    document.getElementById('passwordError').textContent = "";
  }

  if (password !== confirmPassword) {
    document.getElementById('confirmPasswordError').textContent = "Passwords do not match.";
    return false;
  } else {
    document.getElementById('confirmPasswordError').textContent = "";
  }

  signupCaptcha.addEventListener('verified', (e) => {
    console.log('verified event', {token: e.token});
});
signupCaptcha.addEventListener('error', (e) => {
    console.log('error event', {error: e.error});
});
  
    return true; // All validations passed
  }


// // Define a variable to store the database
// const database = [];

// // Function to add a user record to the database
// function addUserRecord(userData) {
//     database.push(userData);
// }

// function validateForm() {
//     // Get form input values
//     const firstName = document.getElementById('first_name').value;
//     const lastName = document.getElementById('last_name').value;
//     const username = document.getElementById('username').value;
//     const dob = new Date(document.getElementById('dob').value);
//     const country = document.getElementById('country').value;
//     const formattedCountry = country.replace(/\s/g, "").toUpperCase();
//     const phone = document.getElementById('phone').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const confirmPassword = document.getElementById('confirm_password').value;

//     // Regular expressions for validation
//     const nameRegex = /^[a-zA-Z ]{3,}$/;
//     const usernameRegex = /^[a-zA-Z]{3,}\.$/;
//     const currentYear = new Date().getFullYear();
//     const minAge = currentYear - 100;
//     const maxAge = currentYear - 3;
//     const validCountries = [
//       "AFGHANISTAN", "ALBANIA", "ALGERIA", "ANDORRA", "ANGOLA", "ANTIGUAANDBARBUDA", "ARGENTINA",
//       "ARMENIA", "AUSTRALIA", "AUSTRIA", "AZERBAIJAN", "BAHAMAS", "BAHRAIN", "BANGLADESH", "BARBADOS",
//       "BELARUS", "BELGIUM", "BELIZE", "BENIN", "BHUTAN", "BOLIVIA", "BOSNIAANDHERZEGOVINA", "BOTSWANA",
//       "BRAZIL", "BRUNEI", "BULGARIA", "BURKINAFASO", "BURUNDI", "CABOVERDE", "CAMBODIA", "CAMEROON",
//       "CANADA", "CENTRALAFRICANREPUBLIC", "CHAD", "CHILE", "CHINA", "COLOMBIA", "COMOROS", "CONGO",
//       "COSTARICA", "CROATIA", "CUBA", "CYPRUS", "CZECHREPUBLIC", "DEMOCRATICREPUBLICOFTHECONGO",
//       "DENMARK", "DJIBOUTI", "DOMINICA", "DOMINICANREPUBLIC", "EASTTIMOR", "ECUADOR", "EGYPT",
//       "ELSALVADOR", "EQUATORIALGUINEA", "ERITREA", "ESTONIA", "ESWATINI(FMR.SWAZILAND)", "ETHIOPIA",
//       "FIJI", "FINLAND", "FRANCE", "GABON", "GAMBIA", "GEORGIA", "GERMANY", "GHANA", "GREECE", "GRENADA",
//       "GUATEMALA", "GUINEA", "GUINEABISSAU", "GUYANA", "HAITI", "HONDURAS", "HUNGARY", "ICELAND", "INDIA",
//       "INDONESIA", "IRAN", "IRAQ", "IRELAND", "ISRAEL", "ITALY", "IVORYCOAST", "JAMAICA", "JAPAN", "JORDAN",
//       "KAZAKHSTAN", "KENYA", "KIRIBATI", "KUWAIT", "KYRGYZSTAN", "LAOS", "LATVIA", "LEBANON", "LESOTHO",
//       "LIBERIA", "LIBYA", "LIECHTENSTEIN", "LITHUANIA", "LUXEMBOURG", "MADAGASCAR", "MALAWI", "MALAYSIA",
//       "MALDIVES", "MALI", "MALTA", "MARSHALLISLANDS", "MAURITANIA", "MAURITIUS", "MEXICO", "MICRONESIA",
//       "MOLDOVA", "MONACO", "MONGOLIA", "MONTENEGRO", "MOROCCO", "MOZAMBIQUE", "MYANMAR(BURMA)", "NAMIBIA",
//       "NAURU", "NEPAL", "NETHERLANDS", "NEWZEALAND", "NICARAGUA", "NIGER", "NIGERIA", "NORTHKOREA",
//       "NORTHMACEDONIA", "NORWAY", "OMAN", "PAKISTAN", "PALAU", "PANAMA", "PAPUANEWGUINEA", "PARAGUAY",
//       "PERU", "PHILIPPINES", "POLAND", "PORTUGAL", "QATAR", "ROMANIA", "RUSSIA", "RWANDA",
//       "SAINTKITTSANDNEVIS", "SAINTLUCIA", "SAINTVINCENTANDTHEGRENADINES", "SAMOA", "SANMARINO",
//       "SAOTOMEANDPRINCIPE", "SAUDIARABIA", "SENEGAL", "SERBIA", "SEYCHELLES", "SIERRALEONE", "SINGAPORE",
//       "SLOVAKIA", "SLOVENIA", "SOLOMONISLANDS", "SOMALIA", "SOUTHAFRICA", "SOUTHKOREA", "SOUTHSUDAN", "SPAIN",
//       "SRILANKA", "SUDAN", "SURINAME", "SWEDEN", "SWITZERLAND", "SYRIA", "TAIWAN", "TAJIKISTAN", "TANZANIA",
//       "THAILAND", "TOGO", "TONGA", "TRINIDADANDTOBAGO", "TUNISIA", "TURKEY", "TURKMENISTAN", "TUVALU",
//       "UGANDA", "UKRAINE", "UNITEDARABEMIRATES", "UNITEDKINGDOM", "UNITEDSTATES", "URUGUAY", "UZBEKISTAN",
//       "VANUATU", "VATICANCITY", "VENEZUELA", "VIETNAM", "YEMEN", "ZAMBIA", "ZIMBABWE"
//     ];
//     const phoneRegex = /^[0-9\-+\s()]{6,}$/;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\-=/\\|]{5,}$/;

  
//   // Perform validation and display error messages in specified spans
//   if (!nameRegex.test(firstName)) {
//     document.getElementById('firstNameError').textContent = "Name must contain at least 3 characters.";
//     return false;
//   } else {
//     document.getElementById('firstNameError').textContent = "";
//   }

//   if (!nameRegex.test(lastName)) {
//     document.getElementById('lastNameError').textContent = "Name must contain at least 3 characters.";
//     return false;
//   } else {
//     document.getElementById('lastNameError').textContent = "";
//   }

//   if (!usernameRegex.test(username)) {
//     document.getElementById('usernameError').textContent = "Username must contain at least 3 characters consisting of only letters and a fullstop '.' at the end.";
//     return false;
//   } else {
//     document.getElementById('usernameError').textContent = "";
//   }

//   if (dob.getFullYear() < minAge || dob.getFullYear() > maxAge) {
//     document.getElementById('dobError').textContent = "Date of birth year must start from 3 years of age and must not be older than 100 years of age.";
//     return false;
//   } else {
//     document.getElementById('dobError').textContent = "";
//   }

//   if (!validCountries.includes(formattedCountry)) {
//     document.getElementById('countryError').textContent = "Invalid country selection.";
//     return false;
//   } else {
//     document.getElementById('countryError').textContent = "";
//   }

//   if (phone && !phoneRegex.test(phone)) {
//     document.getElementById('phoneError').textContent = "Invalid phone number.";
//     return false;
//   } else {
//     document.getElementById('phoneError').textContent = "";
//   }

//   if (!emailRegex.test(email)) {
//     document.getElementById('emailError').textContent = "Invalid email address.";
//     return false;
//   } else {
//     document.getElementById('emailError').textContent = "";
//   }

//   if (!passwordRegex.test(password)) {
//     document.getElementById('passwordError').textContent = "Password must be at least 5 characters and contain at least one uppercase letter, one number, and one special character.";
//     return false;
//   } else {
//     document.getElementById('passwordError').textContent = "";
//   }

//   if (password !== confirmPassword) {
//     document.getElementById('confirmPasswordError').textContent = "Passwords do not match.";
//     return false;
//   } else {
//     document.getElementById('confirmPasswordError').textContent = "";
//   }

//   signupCaptcha.addEventListener('verified', (e) => {
//     console.log('verified event', {token: e.token});
// });
// signupCaptcha.addEventListener('error', (e) => {
//     console.log('error event', {error: e.error});
// });
  

//     if (
//         /* Add your validation checks here */
//         nameRegex.test(firstName) &&
//         nameRegex.test(lastName) &&
//         usernameRegex.test(username) &&
//         dob.getFullYear() >= minAge && dob.getFullYear() <= maxAge &&
//         validCountries.includes(formattedCountry) &&
//         (!phone || phoneRegex.test(phone)) && // Phone validation is optional
//         emailRegex.test(email) &&
//         passwordRegex.test(password) &&
//         password === confirmPassword
//     ) {
//         const userData = {
//             first_name: firstName,
//             last_name: lastName,
//             username: username,
//             dob: dob,
//             country: formattedCountry,
//             phone: phone,
//             email: email,
//             password: password,
//             plan: document.getElementById("plan").value,
//         };

//         // Store the user data in the database
//         addUserRecord(userData);

//         // Reset the form fields (optional)
//         document.getElementById("first_name").value = "";
//         document.getElementById("last_name").value = "";
//         document.getElementById("username").value = "";
//         document.getElementById("dob").value = "";
//         document.getElementById("country").value = "";
//         document.getElementById("phone").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("password").value = "";
//         document.getElementById("confirm_password").value = "";
//         document.getElementById("plan").value = "secure_starters";

//         alert("User registered successfully!");
//         return true;
//     } else {
//         // Prevent form submission if validation fails
//         return false;
//     }
// }
  