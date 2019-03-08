'use strict'

let schools = []
let School = function(name, min, max, spellPerStudent){
    this.name = name
    this.min = min
    this.max = max
    this.spellPerStudent = spellPerStudent
}
School.prototype.spellsCastPerHour = function(){
    let ramdomNumber = Math.ceil(Math.ramdom()*(this.max - this.min)+ this.min)
    return ramdomNumber * this.spellPerStudent
}
let UMUC = new School('UMUC', 2, 12, 3)
let Georgetown = new School('Georgetown', 3, 15, 2)
let Harvard = new School('Harvard', 5, 8, 3)

schools.push(UMUC, Georgetown, Harvard)
console.log(schools);
