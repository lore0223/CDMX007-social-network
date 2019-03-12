 let appFireBase = {};
 // Inicia Firebase
( () => {
 const config = {
    apiKey: "AIzaSyDricH8xG2qh-uO35M9_Q5F4SvssT6MiUg",
    authDomain: "tejiendo-en-azul.firebaseapp.com",
    databaseURL: "https://tejiendo-en-azul.firebaseio.com",
    projectId: "tejiendo-en-azul",
    storageBucket: "tejiendo-en-azul.appspot.com",
    messagingSenderId: "171386471320"
  }
  firebase.initializeApp(config);
  appFireBase= firebase;

  const fnCreate = (path, body, callBack) => {
    if(!path || !body) return;
    appFireBase.database().ref(path).set(body, callBack);
  }

  appFireBase.databaseApi = {
    create: fnCreate,
    // read: fnRead,
    // update: fnUpdate,
    // delete: fnDelete,
  }
 }) ()

  const firebaseContainer= document.getElementById('firebaseui-auth-container');
  firebaseContainer.addEventListener('click', ()=>{

    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider)
    .catch(e => console.log(e.message))
    firebase.auth().getRedirectResult().then(function(result) {
        });

    const providerFacebook = new firebase.auth.FacebookAuthProvider();
    providerFacebook.addScope('public_profile') 
    firebase.auth().signInWithRedirect(providerFacebook).then(function(result) { 
      if (result.credential) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
  
    });
      })



