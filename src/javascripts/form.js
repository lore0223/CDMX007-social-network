


// Aquí deberíamos hacer las funciones del DOM, y pasar todo lo anterior al main.js
//fetch data firebase
let usersData = {};
fetch('https://tejiendo-en-azul.firebaseio.com/users.json').then(
  response => {
    return response.json();
  }).then(data => {
  usersData = data;
  return usersData;
}).then((usersData)=> {
  firebase.auth().onAuthStateChanged((user) => {
    console.log(usersData[user.uid].nickName);
    console.log(user.uid);

  })


})
//evento click en el modal:
const postButton = document.getElementById('post-btn');
const postCard = document.getElementById('post-card');
postButton.addEventListener('click', () => {
  //agrarrar el valor del textarea del modal para ponerlo en la tarjeta de la publicación :D
  const messageText = document.getElementById('message-text');
  console.log(usersData);
  messageText.innerHTML = '';
  firebase.auth().onAuthStateChanged((user) => {
  console.log(usersData[user.uid].nickName);
  for(let id in usersData){
    if(uid === id){
      console.log(uid);
      console.log(id);
      const posting = document.getElementById('posting');
      posting.insertAdjacentHTML('beforeend', `<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
      <div class="card-header">${usersData[user.uid].nickName}</div>
      <div class="card-body">
        <p id="post-card" class="card-text">${messageText.value}</p>
      </div>
    </div>`)
      
    }
    }
  })
  
})
