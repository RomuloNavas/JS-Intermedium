const delay = (ms) => {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
};

//https://jsonplaceholder.typicode.com/

// /const url = "https://jsonplaceholder.typicode.com/todos/1";
// /function fetchTodos() {
// /  console.log(`Fetch todo started...`);
// /  return delay(2000)
// /    .then(() => {
// /      return fetch(url);
// /    })
// /    .then((response) => response.json());
// /}
// /
// /fetchTodos()
// /  .then((data) => {
// /    console.log(`Data`, data);
// /  })
// /.catch((e) => console.error(e));


//--------------------------Using Async and Await (Cleaner code)
const url = "https://jsonplaceholder.typicode.com/todos/1";
//The function that internally use the operator Await, should be asynchronous. async makes a the function asynchronous and we are able to use await.
async function fetchAsyncTodos() {
    console.log(`Fetch todo started...`);
    await delay(2000); //Adding the operator await, it will be equivalent to that we are processing promises 
    const response = await fetch(url);
    const data = await response.json();
    console.log(`Data`,data);
}
fetchAsyncTodos();
