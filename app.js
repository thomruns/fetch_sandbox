document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
function getText() {
  fetch('data_files/textdata.txt')
  .then(function(res) {
    return res.text();  //RETURNS A PROMISE
  })
  .then(function(data) {
    document.getElementById('output').innerHTML = data;
  })
  .catch(function(err) {
    console.log(err);
  });
}

// Get local JSON data
function getJson() {
  fetch('data_files/posts.json')
  .then(function(res) {
    return res.json();  //RETURNS A PROMISE
  })
  .then(function(data) {
    console.log(data);
    let output = '';
    data.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err) {
    console.log(err);
  });
}

// Get external API data
function getExternal() {
  fetch('https://api.github.com/users')
  .then(function(res) {
    return res.json();  //RETURNS A PROMISE
  })
  .then(function(data) {
    console.log(data);
    let output = '';
    data.forEach(function(user) {
      output += `<li>${user.login}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err) {
    console.log(err);
  });
}