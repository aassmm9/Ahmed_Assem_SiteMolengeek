import data from "./../jsons/molengeek.json" assert {type:"json"}

let seancesInfo = data.formations.seancesInfos
let newEvent = seancesInfo.splice(0,3);

let sec3 = document.querySelector(".sect3");


newEvent.forEach(element => {
    let myDiv = document.createElement('div');
    myDiv.classList.add('event');
    sec3.appendChild(myDiv)
    let firstP = document.createElement('p')
    firstP.innerText = element.nom
    myDiv.appendChild(firstP)
    let secondP = document.createElement('p')
    secondP.innerText = element.date
    myDiv.appendChild(secondP)

});
