fname = "";
lname = "";
pass = "";
confirmpass = "";
country = "";
postalcode = "";
phoneno = "";
email = "";
var prefcampus = "progress";
function checkPass(pass, confirmpass){
  if(pass !== confirmpass){
    alert("Confirm passowrd is not same as password");
    return false;
  }
  return true;
}


function checkUpper(name){
  var arr = name.split('');
  if(arr[0].toUpperCase() != arr[0]){
    alert("First letter is not upper case. Please change it to upper case.");
    return false;
  }
  return true;
}

function checkLength(name){
  if(name.length > 15){
    alert("Name should be less than 15 characters");
    return false;
  }
  return true;
}

function checkPhone(phoneno){
  phoneno = parseInt(phoneno);
  if(/^\d{10}$/.test(phoneno) == false){
    alert("Phone No should of 10 digits");
    return false;
  }
  return true;
}

function checkPostal(postalcode, country){
  if(country == "canada"){
    if(!(/^(.?[A-Z]{1})(.?[0-9]{1})(.?[A-Z]{1})( )(.?[0-9]{1})(.?[A-Z]{1})(.?[0-9]{1})/).test(postalcode)){
      alert("Please enter the postal code in A9A 9A9 format");
      return false;
    }
  }
  else{
    if(!(/^(.?[0-9]{5})/.test(postalcode))){
      alert("Please enter the postal code in 99999 format");
      return false;
    }
  }
  return true;
}

function checkEmail(email){
  if(!(/(.*)(@)(.*)(\.com)/.test(email))){
    alert('Please enter a valid email');
    return false;
  }
  return true;
}

function checkPassValue(pass){
  if(pass.length < 8 || pass.length > 12){
    alert("Password field length must be 8 to 12 characters and must include numbers, dot (.) and back slash (\\).");
    return false;
  }
  else{
    var arr = pass.split('');
    var count = 0;
    var count2 = 0;
    arr.map(value =>{
      if(value.charCodeAt(0) == 46){
        count = 1;
      }
      else if(value.charCodeAt(0) == 92){
        count2 = 1;
      }
    });
    if(count == 0 || count2 == 0){
      alert("Password field length must be 8 to 12 characters and must include numbers, dot (.) and back slash (\\).");
      return false;
    }
  }
  return true;
}

window.addEventListener("load", function(){
  document.getElementById("fname").addEventListener("change",function(event){
    fname = event.target.value.trim();
    checkUpper(fname);
    checkLength(fname);
  });
  document.getElementById("lname").addEventListener("change",function(event){
    lname = event.target.value.trim();
    checkUpper(lname);
    checkLength(lname);
  });
  document.getElementById("pass").addEventListener("change",function(event){
    pass = event.target.value;
    checkPassValue(window.pass)
  });
  document.getElementById("confirmpass").addEventListener("change", function(event){
    confirmpass = event.target.value;
    checkPass(window.pass, window.confirmpass);
  });
  document.getElementById("prefcampus").addEventListener("change", function(event){
    prefcampus = event.target.value;
    if(prefcampus == "story"){
      document.getElementById("poi").innerHTML = `
        <option value="genedu">General Education</option>
        <option value="graphic">Graphic Designing</option>
      `;
    }
    else if(prefcampus == "progress"){
      document.getElementById("poi").innerHTML = `
        <option value="genedu">General Education</option>
        <option value="swe">Software Engineering</option>
        <option value="mkt">Marketing</option>
        <option value="meche">Mechanical Engineering</option>
        <option value="ash">Ashtonbee</option>
        <option value="automech">Auto Mechanics </option>
        <option value="childedu">Early Childhood Education</option>
      `;
    }
    else{
      document.getElementById("poi").innerHTML = `
        <option value="genedu">General Education</option>
        <option value="aviation">Aviation</option>
      `;
    }
  });

  document.getElementById("phoneno").addEventListener("change", function(event){
    phoneno = event.target.value;
    checkPhone(phoneno);
  });

  document.getElementById("postalcode").addEventListener("change", function(event){
    postalcode = event.target.value;
    country = document.getElementById("country").value;
    checkPostal(postalcode, country);
  });

  document.getElementById("email").addEventListener("change", function(event){
    email = event.target.value;
    checkEmail(email);
  });
  document.getElementById("btn").addEventListener("click",function(){
    if(checkUpper(document.getElementById("fname").value) && checkUpper(document.getElementById("lname").value) && checkLength(document.getElementById("fname").value) && checkLength(document.getElementById("lname").value) && checkPass(document.getElementById("pass").value, document.getElementById("confirmpass").value) && checkPassValue(document.getElementById("pass").value) && checkPhone(document.getElementById("phoneno").value) && checkPostal(document.getElementById("postalcode").value, document.getElementById("country").value) && checkEmail(document.getElementById("email").value)){
      alert("Record has been saved");
    }
  });
});
