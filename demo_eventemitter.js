var events = require('events');
var eventEmitter = new events.EventEmitter();

// Create an event handler:

var myEventHandler = function(){
    console.log('I heard a scream!');
}

// Assign the eventhandler to an event:
eventEmitter.on('scream',myEventHandler);

// Fire the 'scream' to event:
eventEmitter.emit('scream');
