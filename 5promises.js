//JavaScript. Promise. Что это, как работает (+ пример)
//https://www.youtube.com/watch?v=1idOY3C1gYU&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=5&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD

//=This is an example using Callback, but promises allow to make this more easy and correctly

// console.log(`Request data...`);
// window.setTimeout(() => {
//     console.log(`Preparing data...`);

//     const backendData = {
//         server: `aws`,
//         port: 4000,
//         state: `working`
//     }

//     setTimeout(() => {
//         backendData.modified = true;
//         console.log(`Data received`, backendData);
//     }, 2000);

// }, 2000);
// -----------------------------Using Promises:
//=We have some asynchronous code that was wrapped in a promise.
console.log(`Requesting data...`);
const p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    const backendData = {
      server: `aws`,
      status: `working`,
    }; //? 1) How to get access to the properties inside the object?
    resolve(backendData); //we tell our Promise that it has finished its work.
    reject(`Error requesting data`);
  }, 2000);
});
//= 1) For this there are resolve and reject functions:
//=resolve is called when the asynchronous operation has finished successfully
//=reject is called when the asynchronous operation has finished unsuccessfully
p
  .then((data) => {
    console.log(`Preparing Data...`);
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        data.modified = true;
        resolve(data);
      }, 2000);
    }).then((clientData) => {
      console.log(`Promise resolved.`, clientData);
    })
      .catch((err) => console.error(`Error:`, err)) //.catch  => In case of error,we access to the method catch (Write it at after .then)
      .finally(() => console.log(`To get more data, press the blue button`));
  });

// -----------------------------Real life Example:

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};
sleep(7000).then(() => console.log(`After 7 seconds`));

Promise.all([sleep(200), sleep(10000)]) //.all The Promise which is returned in the method, will be fulfilled only when all promises in this array are completed.
  .then(() => console.log(`All promises are ready`));

Promise.race([sleep(200), sleep(10000)]) //.rate  Is returned the first completed promises of this array.
  .then(() => console.log(`All promises are ready`));
