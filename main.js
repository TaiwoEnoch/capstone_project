const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.ul-list');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

const speakersData = [
  {
    featuredImage: './images/speaker_01.png',
    name: 'Yochai Benkler',
    Profession: 'Berkman Professor of Entrepreneurial Legal Studies Harvard Law School',
    description:
    'Benkler study common base peer production, and publish his seminar book The Wealth of Network in 2006.',

  },
  {
    featuredImage: './images/speaker_02.png',
    name: 'Sohyeong Noh',
    Profession: 'Director of Art Center Nabi and a board member of CC korea ',
    description:
    'As the main venue of new media Art production in korea Nabi promote cross disciplinary collaboration and  understanding among science technology, humanities and the art.',
  },
  {
    featuredImage: './images/speaker_03.png',
    name: 'Lila Tretikov',
    Profession: 'Executive Director of the Wikimedia Foundation',
    description:
    'ELila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization and operate Wikimedia. Wikimedia is available in 290 languages and use by nearly a billion of people around the world every month.xecutive Director of the Wikimedia Foundation',
  },
  {
    featuredImage: './images/speaker_04.png',
    name: 'Kilnam Chon',
    Profession: 'Advocate for the open web and digital commons in 2012',
    description:
    'Kilnam Chon helps bring the internet to Asia and is an outspoken advocate for the open web and digital commons in 2012, he was inducted to the inaugural class of the internet society (ISOC) Internet Hall of Fame. ',
  },
  {
    featuredImage: './images/speaker_05.png',
    name: 'Julia Leda',
    Profession: 'President of Young Pirates of Europe',
    description:
    'European ingetration political democracy and participation of Youth through online as her major concern, Leda report outlining potential changes to EU copyright law was approved by the parliament in july.',
  },
  {
    featuredImage: './images/speaker_06.png',
    name: 'Ryan Merkley',
    Profession: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    description:
    'Ryan has been leading open-source project at the Mozilla Foundation such as the open-source movement.',
  },
];

function generateSpeakersData(speakersData) {
  let data = '';

  for (let i = 0; i < speakersData.length; i += 1) {
    data += `
    <article class="d-flex-2 my-speakers">
    <img
      src="${speakersData[i].featuredImage}"
      alt=""
      class="speaker-image"
    />
    <div class=" my-speakers">
      <h4 class="speakers-font">${speakersData[i].name}</h4>
      <p class="span-2-title span-2">${speakersData[i].Profession}</p>
      <p class="speaker-details">
      ${speakersData[i].description}
      </p>
    </div>
  </article>
`;
  }
  return data;
}
document.querySelector('.speakers').innerHTML = generateSpeakersData(speakersData);