
// console.log("Hello World!");

// setTimeout(function(){
//     console.log("hi");
// }, 3000)
// var k =0;
// setInterval(function(){
//     console.log(k++);
// }, 3000)
// function gourav(){
//     console.log("helo ji");
// }
// console.log(__dirname)
// console.log(__filename)
// gourav();
// var go = function(){
//     console.log("gd");
// }
// go();

// function call(fun){
//     fun();
// }
// call(go);
// //
// const count = require("./second");
// var second= require("./second");
// console.log(second.count("Hello"));
// console.log(second.adder(5,2));


// var events = require('events');
// var myEmitter = new events.EventEmitter();
// myEmitter.on('click1', function(msg){
//     console.log(msg);
// })
// myEmitter.on('click2', function(msg){
//     console.log(msg);
// })
// myEmitter.emit("click1", "Hello 1");
// myEmitter.emit("click2", "Hello 2");

var fs = require('fs');

// fs.mkdir('stuff', function(){
//     fs.readFile('readMe.txt', 'utf8', function(err,data){
//         fs.writeFileSync('./stuff/new.txt', data);
//     });
// });

fs.unlink('./stuff/new.txt', function(){
    fs.rmdirSync('stuff');
})
// console.log(read);

// fs.writeFileSync("write.txt", read);