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
// la constante de fnCreat vale path, body , callback, esto ejecuta la funcion de :
  const fnCreate = (path, body, callBack) => {
    // si mi ruta o mi cuerpo es verdadero retorna true
    if(!path || !body) return;
    // appFireBase entra a la dataBase ()entra a la ruta entra al conjunto del body, callback.
    appFireBase.database().ref(path).set(body, callBack);
  }
  appFireBase.databaseApi = {
    create: fnCreate,
    // read: fnRead,
    // update: fnUpdate,
    // delete: fnDelete,
  }
 }) ()

