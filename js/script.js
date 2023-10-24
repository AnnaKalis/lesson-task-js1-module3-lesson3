// Question 1

const greet = (name) => `Hello ${name}!`;
const add = (a, b) => a + b;

// Question 2

fetch("https://api.noroff.dev/api/v1/cat-facts")
  .then(function (response) {
    return response.json();
  })
  .then(function (results) {
    console.log(results.length);
  })
  .catch(function (error) {
    console.log(error);
  });
