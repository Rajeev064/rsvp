var firebaseConfig = {
  apiKey: "AIzaSyC4PI_7hMDA-ek0LWabI6JOKECrMoEpf1Y",
  authDomain: "company-274007.firebaseapp.com",
  databaseURL: "https://company-274007.firebaseio.com",
  projectId: "company-274007",
  storageBucket: "company-274007.appspot.com",
  messagingSenderId: "194228086996",
  appId: "1:194228086996:web:d0bd687b24273a06e7b341",
  measurementId: "G-16DXEPQ7N0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();

function signUp(){
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  
  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  
  alert("Signed Up");
}



function signIn(){
  
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  
  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  
  
  
  
}


function signOut(){
  
  auth.signOut();
  alert("Signed Out");
  
}



auth.onAuthStateChanged(function(user){
  
  if(user){
    
    var email = user.email;
    alert("Active User " + email);
    //Take user to a different or home page

    //is signed in
    
  }else{
    
    alert("No Active User");
    //no user is signed in
  }
  
  
  
});

var messagesRef = firebase.database().ref('messages');
  
// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var Username = getInputVal('Username');
  var email = getInputVal('email');
  var password = getInputVal('password');

  // Save message
  saveMessage(Username, email, password);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  // Save message to firebase
  function saveMessage(Username, email, password){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      Username: Username,
      email:email,
      password:password,
    });
  }