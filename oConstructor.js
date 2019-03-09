'use strict'
let hours = ['','10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p']
let schools = []
let School = function(name, min, max, spelllsPerStudent){
    this.name = name
    this.min = min
    this.max = max
    this.spelllsPerStudent = spelllsPerStudent
}
School.prototype.spelllsPerHour = function(){
    let ramdomNumber = Math.ceil(Math.random()*(this.max - this.min)+ this.min)
    return ramdomNumber * this.spelllsPerStudent
}
let UMUC = new School('UMUC', 2, 12, 3)
let Georgetown = new School('Georgetown', 3, 15, 2)
let Harvard = new School('Harvard', 5, 8, 3)

schools.push(UMUC, Georgetown, Harvard)
console.log(schools);

let docBody = document.getElementById('docbody')
let tbl = document.createElement('table')
//let tblRow = document.createElement('tr')
let tblHeader = document.createElement('tr')
let tblHeaderCell = document.createElement('th')
docBody.appendChild(tbl)
tbl.appendChild(tblHeader)

for (let i=0; i < hours.length; i++){
    let tblHeaderCell = document.createElement('th')
    tblHeader.appendChild(tblHeaderCell)
    tblHeaderCell.innerText = hours[i]
}

for(let j = 0; j<schools.length; j++){
    let tblRow = document.createElement('tr')
    tbl.appendChild(tblRow)
    let tblHeaderCell =document.createElement('th')
    tblRow.appendChild(tblHeaderCell)
    tblHeaderCell.innerText = schools[j].name
    for(let i=0; i<hours.length-1; i++){
        let tblTd = document.createElement('td')
        tblRow.appendChild(tblTd)
        tblTd.innerText = schools[j].spelllsPerHour()
    }
}

let schoolNames = document.createElement('ul')
for (let k=0; k<schools.length; k++){
    let schoolName = document.createElement('li')
    schoolNames.appendChild(schoolName)
    schoolName.innerText = schools[k].name
}
docBody.appendChild(schoolNames)