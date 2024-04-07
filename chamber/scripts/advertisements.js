const url = "https://estoquin.github.io/wdd230/chamber/data/members.json";
const container = document.querySelector("#advertisement-container");

async function getMembers(url) {
    const response = await fetch(url);
    const data = await response.json();

    // Filtrar los miembros que sean Gold o Silver
    const memberAdvertisement = data.members.filter(member =>
        member.membership_level === "Silver" || member.membership_level === "Gold");

    // Mezclar el array de miembros
    const shuffledArray = shuffleArray(memberAdvertisement);

    // Mostrar los primeros 3 miembros
    displayMembers(shuffledArray.slice(0, 3));
}

getMembers(url);

const displayMembers = (members) => {
    members.forEach((member) => {
        let memberSection = document.createElement('section');
        memberSection.setAttribute('class', 'advertisement-card');

        let logo = document.createElement('img');
        logo.setAttribute('src', `https://estoquin.github.io/wdd230/chamber/images/${member.image}`);
        logo.setAttribute('alt', `logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');
        logo.setAttribute('height', '100');

        let title = document.createElement('h2');
        title.textContent = member.name;

        let address = document.createElement('p');
        address.textContent = member.address;

        let phone = document.createElement('p');
        phone.textContent = member.phone;

        let webSite = document.createElement('a');
        webSite.textContent = member.website;
        webSite.href = member.website;
        webSite.target = '_blank'; // Abre el enlace en una nueva pestaña

        let membershipLevel = document.createElement('p');
        membershipLevel.textContent = `Membership Level: ${member.membership_level}`;

        // Agregar la clase correspondiente al nivel de membresía
        if (member.membership_level === "Gold") {
            membershipLevel.classList.add('membergold');
        } else if (member.membership_level === "Silver") {
            membershipLevel.classList.add('membersilver');
        }

        memberSection.appendChild(logo);
        memberSection.appendChild(title);
        memberSection.appendChild(membershipLevel);
        memberSection.appendChild(address);
        memberSection.appendChild(phone);
        memberSection.appendChild(webSite);
        container.appendChild(memberSection);
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
