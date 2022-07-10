// class Test {
//     constructor(name) {
//         this.name = name
//     }
//     sayName(){}
// }
// //
// // Test.prototype.sayName = function(){}
// // console.log(Test.prototype)
// // //
// // const obj = new Test('Yo')
// // console.log(obj.__proto__)
// //console.log(obj.__proto__===Test.prototype)
// // console.log(obj)
// // Test.prototype.sayName = function(){}
// // console.log(Test.prototype)
// //
// // const obj = new Test('Yo')
// // console.log(obj.__proto__)
// // console.log(obj)
//
// class Test2 extends Test{
//     constructor(name){
//         super(name)
//     }
//     sayBye(){}
// }
//
// let obj = new Test2('Hello')
// console.log(obj)
// let person = {
//     name: 'Max',
//     age: 24,
//     greet() {
//         console.log('Greet')
//     }
// }
// person.__proto__.asdasd=function(){};
// console.log(person)
//Object.prototype.sayGood = function(){}
//
// class User {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//
//     greet() {
//         console.log('Greet')
//     }
// }
//
// let person = new User('Max', 23)
// User.prototype.sayHell0000000 = function () {
//     console.log('First')
// }
// //console.log(person)
//
// let user = {
//     a: 1,
//     age: 2,
//     c() {
//         console.log(this.age)
//     }
// }
// //user.c.apply(person)
//
// const adrian = Object.create(person)
// console.log(adrian.name='adrian')
// console.log(adrian)
// let string = new String( 'one')
// console.log(string)
// //string.say.sayHell0000000()