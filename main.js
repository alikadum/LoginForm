
function login() {


    let email = document.getElementById("email").value;
    let password = document.getElementById("passowrd").value;



    

   
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      



      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.message);
    });

}
