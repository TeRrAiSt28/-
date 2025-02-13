let name = document.querySelector('#name');

let login = document.querySelector('#login');

let password = document.querySelector('#password');

let sumbit = document.querySelector('#sumbit');

let users = {};

function User(name, login, password){
  this.name = name;
  this.login = login;
  this.password = password;
};

function createId(users){
  return Object.keys(users).length;
}

sumbit.addEventListener('click', () => {
  const nameUser = name.value;
  const loginUser = login.value;
  const passwordUser = password.value;
  
  const user = new User(nameUser, loginUser, passwordUser);
  
  const userId = 'User' + createId(users);
  
  users[userId] = user;
  
  console.table(users);
});
