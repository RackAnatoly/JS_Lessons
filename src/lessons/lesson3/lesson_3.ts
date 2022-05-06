// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661


// just a plug

export default () => {
};

// const promise = new Promise((resolve, reject) => {
//     setTimeout((response) => {
//         const {httpStatus, data} = response
//         if (httpStatus >= 200 && httpStatus < 300) {
//             resolve(data)
//         }
//
//     }, 3000, {httpStatus: 200, data: {name: 'Anatoli', age: 32, city: 'Gdansk', id: '1'}})
// })
//
// promise
//     .then((data) => {
//         console.log(data)
// return 10
//     })
//     .then((data2) => {
//         console.log(data2)
//     })
//====================================================

// const promise = new Promise((resolve, reject) => {
//     setTimeout((response) => {
//         const {httpStatus, data} = response
//         if (httpStatus >= 200 && httpStatus < 300) {
//             resolve(data)
//         }
//
//     }, 3000, {httpStatus: 200, data: {name: 'Anatoli', age: 32, city: 'Gdansk', id: '1'}})
// })
//
// promise
//     .then((res) => {
//         console.log(res)
//         return new Promise((resolve, reject) => {
//             setTimeout((response) => {
//                 const {httpStatus, data} = response
//                 if (httpStatus >= 200 && httpStatus < 300) {
//                     resolve(data)
//                 }
//
//             }, 5000, {httpStatus: 200, data: {name: 'Andian', age: 32, city: 'Gdansk', id: '1'}})
//         })
//     })
//     .then((data2) => {
//         console.log(data2)
//     })


const promise = new Promise((resolve, reject) => {
    setTimeout((response) => {
        const {httpStatus, data, error} = response
        if (httpStatus >= 200 && httpStatus < 400) {
            resolve(data)
        } else {
            reject(error)
        }

    }, 1000, {
        httpStatus: 404,
        data: {name: 'Anatoli', age: 32, city: 'Gdansk', id: '1'},
        error: {message: 'Not found'}
    })
})
promise
    .then((data)=>{
    console.log(data)
})
    .catch((error)=>{
    console.log(error)
    return 10
})
    .then(r=>console.log(r))

