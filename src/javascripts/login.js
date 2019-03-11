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
    //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
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