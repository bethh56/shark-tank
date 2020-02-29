import utils from '../helpers/utils.js';
import personData from '../helpers/data/personData.js';

const buildGraveyard = () => {
    const persons = personData.getDeadPersons();
    let domString = "";
    domString += `<h1 class="text-center m-3">Grave Yard</h1>`;
    domString += `<div class="card w-75 mx-auto">`;
    domString += `<ul class="list-group list-group-flush">`;
    persons.forEach((person) => {
        domString += `<li class="list-group-item text-center">${person.name}</li>`;
        domString += `<button id=${person.id} class="btn btn-dark revive-btn">REVIVE</button>`;
    });
    domString += `</ul>`;
    domString += `</div>`; 

    utils.printToDom("graveyard", domString);
}


export default { buildGraveyard }