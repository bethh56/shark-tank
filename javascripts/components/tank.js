import utils from "../helpers/utils.js"
import personData from "../helpers/data/personData.js"

const tankBuilder = () => {
    const persons = personData.getAlivePersons();
    let domString = "";
    domString += `<h1 class="text-center m-3">Shark Tank</h1>`;
    domString += `<div class="card w-75 mx-auto">`;
    domString += `<ul class="list-group list-group-flush text-center">`;
    persons.forEach((person) => {
        domString += `<li class="list-group-item">${person.name}</li>`;
    });
    domString += `</ul>`;
    domString += `</div>`; 

    utils.printToDom("tank", domString);
}

export default { tankBuilder }