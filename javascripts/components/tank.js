import utils from "../helpers/utils.js"
import personData from "../helpers/data/personData.js"

const tankBuilder = () => {
    const persons = personData.getAlivePersons();
    let domString = "";
    domString += `<div class="card w-75 mx-auto">`;
    domString += `<div class="card-header">Featured</div>`;
    domString += `<ul class="list-group list-group-flush">`;

    persons.forEach((person) => {
        domString += `<li class="list-group-item">${person.name}</li>`;
    });
  
    domString += `</ul>`;
    domString += `</div>`; 

    utils.printToDom("tank", domString);
}

export default { tankBuilder }