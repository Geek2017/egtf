



function save(){
  var val0=document.getElementById('email').value;
if(val0!==""){
  let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    console.log(req.responseText);
  }
};

  var mail = document.getElementById(email);

var data={ 
            'email':mail
}

req.open("POST", "https://api.jsonbin.io/b", true);
req.setRequestHeader("Content-type", "application/json");
req.setRequestHeader("secret-key", "$2a$10$gYeCqX3PQ6bA2QMN8S4v.OwOQ8p8SXKh8kEt/OhfLsBAuVBYScyy.");
req.send(JSON.stringify(data));

console.log(val0);
}else{
  
  alert('Email Null')
  console.log(val0);
}

}


