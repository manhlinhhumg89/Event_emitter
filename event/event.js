// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter{}

// const myEmitter = new MyEmitter();
// myEmitter.on('event', (a,b) =>{
//     setImmediate(() =>{
//         console.log('This is happen async')
//     })
// })

// myEmitter.emit('event','a','b')
// var EventEmitter = require("events");

// var crazy = new EventEmitter();

// crazy.on('event1', function () {
//     console.log('event1 fired!');
//     crazy.emit('event2');
// });

// crazy.on('event2', function () {
//     console.log('event2 fired!');
//     crazy.emit('event3');

// });

// crazy.on('event3', function () {
//     console.log('event3 fired!');
//     crazy.emit('event1');
// });

// crazy.emit('event1');

var EventEmitter = require('events');

var crazy = new EventEmitter();

crazy.on('event1', function () {
    console.log('event1 fired!');
    process.nextTick(function () {
        crazy.emit('event2');
    });
});

crazy.on('event2', function () {
    console.log('event2 fired!');
    process.nextTick(function () {
        crazy.emit('event3');
    });

});

crazy.on('event3', function () {
    console.log('event3 fired!');
    process.nextTick(function () {
        crazy.emit('event1');
    });
});

crazy.emit('event1');