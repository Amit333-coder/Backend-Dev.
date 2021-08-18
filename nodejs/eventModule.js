var events=require("events")
var util = require("util")

var Person = function(name){
    this.name=name;
};

util.inherits(Person,events.EventEmitter)

var amit = new Person("Amit")
var suraj = new Person("Suraj")
var sharmaji = new Person("Sharmaji")

var people = [amit,suraj,sharmaji]

people.forEach(function(person){
    person.on("speak",function(mssg){
        console.log(person.name+" said: "+mssg);
    })
})

amit.emit('speak',"the farmer is the king")
suraj.emit('speak',"dhoni is the greatest of all time")