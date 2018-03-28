document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
function getText() {
  fetch('data_files/textdata.txt')
  .then(res => res.text())
  .then(data => {
    document.getElementById('output').innerHTML = data;
  })
  .catch(err => console.log(err));
}

// Get local JSON data
function getJson() {
  fetch('data_files/posts.json')
  .then(res => res.json())
  .then(data => {
    //console.log(data);
    let output = '';
    data.forEach(post => {
      output += `<li>${post.title}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(err => console.log(err));
}

// Get external API data
function getExternal() {
  fetch('https://api.github.com/users')
  .then(res => res.json())
  .then(data => {
    //console.log(data);
    let output = '';
    data.forEach(user => {
      output += `<li>${user.login}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(err => console.log(err));
}

// Simple arrow functions
// const sayHello = function() {
//   console.log('Hello');
// }

// sayHello();
// One line function does not neet braces
// const sayHello = () => console.log('Hello again');
// sayHello();

// One line returns
// const sayGoodbye = () => 'Goodbye';
// console.log(sayGoodbye());

// Return object literal, wrap in parens
// const sayGoodbye = () => ({ msg: 'Goodbye'});
// console.log(sayGoodbye());

// Single parameter doesn't require parens
// const sayHello = name => console.log(`Hello, ${ name }`);

// Multiple parameters require parens
// const sayHello = (firstName, lastName) => console.log(`Hello, ${ firstName } ${ lastName }`);

// sayHello('John', 'Doe');

// const users = ['Bill', 'Joe', 'William'];
// // const nameLengths = users.map(function(name) {
// //   return name.length;
// // });

// // Shorter
// // const nameLengths = users.map((name) => {
// //   return name.length;
// // });

// // Shortest
// const nameLengths = users.map(name => name.length);

// console.log(nameLengths);