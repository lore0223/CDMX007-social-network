(() => {
  // Inicia el widget de FirebaseUI usando Firebase.
const ui = new firebaseui.auth.AuthUI(firebase.auth());
const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // el usuario se registró exitosamente
      // Return determina si continúa a la redirección automática
      // o si deja que el desarrollador lo maneje
      document.getElementById('login').style.display='none'
      document.getElementById('user-information').style.display='block'
      return true;
    },
    uiShown: function() {
      // El widget está renderizado.
      // Esconde el loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // se usa popup para el ingreso del flujo de los provedores de IDP en lugar del predeterminado, redirecciona.
  signInFlow: 'popup',
  signInSuccessUrl: '#',
  signInOptions: [
    // Solo dejamos las líneas de las formas de registro que vamos a utilizar.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    //firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Términos del servicio de url.
  // tosUrl: '../html/user-information.html',
  // Url de la política de privacidad.
  //privacyPolicyUrl: '<your-privacy-policy-url>'
}
// El método de inicio va a comenzar hasta que el dominio se cargue.
ui.start('#firebaseui-auth-container', uiConfig);
})();

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
        const token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      const user = result.user;
    }).catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
  
    });
      })




