// mobile menu

const mobileMenu = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const openMenu = document.querySelector('#menu-open');
const closeMenu = document.querySelector('#menu-close');

openMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu');
  document.body.style.position = 'fixed';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu');
  document.body.style.position = '';
});

navLinks.forEach((element) => {
  element.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu');
    document.body.style.position = '';
  });
});

// dynamic section

const artists = [
  {
    image: './assets/images/kanye-west.jpeg',
    name: 'Kanye West',
    category: 'Rapper',
    biography: 'Kanye West, legal name Ye, (born June 8, 1977, Atlanta, Georgia, U.S.), American producer, rapper, and fashion designer who parlayed his production success in the late 1990s and early 2000s.',
  },
  {
    image: './assets/images/nicki-mahnaj.jpeg',
    name: 'Nicki Minaj',
    category: 'Hip Hop',
    biography: 'Nicki Minaj was born Onika Tanya Maraj on December 8, 1982 in St. James, Port of Spain, Trinidad & Tobago and raised in Queens, New York City, New York.',
  },
  {
    image: './assets/images/taurus-riley.jpeg',
    name: 'Tarrus Riley',
    category: 'Reggae',
    biography: 'Riley was born in Bronx, New York, and raised in Jamaica. His father Jimmy Riley was a veteran reggae singer. Tarrus made his recording debut as a teenager.',
  },
  {
    image: './assets/images/valiant.jpg',
    name: 'Valiant',
    category: 'Dancehall',
    biography: 'Valiant (born Raheem Bowes) is a graduate of Oberlin High School who savours the benefits of a sound education. A recording artiste since 2012, ...',
  },
  {
    image: './assets/images/kabakapyramid.jpg',
    name: 'Kabaka Pyramod',
    category: 'Reggae',
    biography: 'Keron Salmon, known by his fans as Kabaka Pyramid, is an ever-evolving artist that has numerous ways of expressing his creativity.',
  },
  {
    image: './assets/images/Beres18.jpg',
    name: 'Beres Hammond',
    category: 'Reggae',
    biography: "Born the ninth of ten children, Hammond grew up listening to his father's collection of American soul and jazz music including Sam Cooke and Otis Redding.",
  },
];

const featureCards = document.getElementById('featured-artist');

for (let i = 0; i < artists.length; i += 1) {
  const artist = artists[i];
  const card = document.createElement('div');
  card.classList.add('featured-card');

  const artistImage = document.createElement('img');
  artistImage.classList.add('featured-image');
  artistImage.setAttribute('src', artist.image);

  const textContainer = document.createElement('div');
  textContainer.classList.add('featured-text-info');

  const artistName = document.createElement('h3');
  artistName.classList.add('featured__card-title');
  artistName.innerHTML = artist.name;

  const musicCategory = document.createElement('p');
  musicCategory.classList.add('feature-card__category');
  musicCategory.innerHTML = artist.category;

  const horizontalLine = document.createElement('hr');
  horizontalLine.classList.add('card-hr');

  const artistBio = document.createElement('p');
  artistBio.classList.add('featured-description');
  artistBio.innerHTML = artist.biography;

  textContainer.append(artistName, musicCategory, horizontalLine, artistBio);
  card.append(artistImage, textContainer);
  featureCards.appendChild(card);
}

const showMore = document.getElementById('show-more');
const cards = featureCards.querySelectorAll('.featured-card');

const mediaQuery = window.matchMedia('(max-width: 768px)');

if (mediaQuery.matches) {
  for (let i = 2; i < cards.length; i += 1) {
    cards[i].classList.add('hidden');
  }
}

showMore.addEventListener('click', () => {
  for (let i = 2; i < cards.length; i += 1) {
    cards[i].classList.toggle('hidden');
  }
  showMore.classList.add('hidden');
});
