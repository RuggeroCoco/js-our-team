// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

const ourTeam = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    img: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    img: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    img: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    img: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    img: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    img: "barbara-ramos-graphic-designer.jpg",
  },
];

// BONUS 1

const teamList = document.querySelector("ul");

for (let i = 0; i < ourTeam.length; i++) {
  const member = ourTeam[i];
  teamList.innerHTML += `
    <li>
        <h2>${member.name}</h2>
        <p>${member.role}</p>
        <img src="assets/${member.img}" alt="${member.name}">
    </li>
    `;
}
