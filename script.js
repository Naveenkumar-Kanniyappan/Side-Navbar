let body = document.body;

let hamburger = document.createElement('div');
hamburger.id = 'hamburger';
hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>'; 

let sideNavbar = document.createElement('div');
sideNavbar.id = 'sideNavbar';

let closeBtn = document.createElement('div');
closeBtn.id = 'closeBtn';
closeBtn.innerHTML = '<i class="fa-solid fa-x"></i>';

let navbarHeading = document.createElement('h2');
navbarHeading.innerHTML = 'Coding <span style="color:#79afdb">Addict</span>';
navbarHeading.className = 'navbar-heading';

body.appendChild(hamburger);
body.appendChild(sideNavbar);
sideNavbar.appendChild(closeBtn);
sideNavbar.appendChild(navbarHeading);

let ul = document.createElement('ul');

let home = document.createElement('li');
home.className = 'menu-item';
home.innerHTML = '<a href="#">Home</a>';

let about = document.createElement('li');
about.className = 'menu-item';
about.innerHTML = '<a href="#">About</a>';

let projects = document.createElement('li');
projects.className = 'menu-item';
projects.innerHTML = '<a href="#">Projects</a>';

let contact = document.createElement('li');
contact.className = 'menu-item';
contact.innerHTML = '<a href="#">Contact</a>';

ul.appendChild(home);
ul.appendChild(about);
ul.appendChild(projects);
ul.appendChild(contact);

sideNavbar.appendChild(ul);

let iconItems = document.createElement('div');
iconItems.className = 'icone-items';
iconItems.classList.add('ul');

let facebook = document.createElement('li');
facebook.innerHTML = '<a href="#"><i class="fa-brands fa-facebook"></i></a>';
facebook.className = 'icon';

let twitter = document.createElement('li');
twitter.innerHTML = '<a href="#"><i class="fa-brands fa-twitter"></i></a>';
twitter.className = 'icon';

let be = document.createElement('li');
be.innerHTML = '<a href="#"><i class="fa-brands fa-behance"></i></a>';
be.className = 'icon';

let linkedin = document.createElement('li');
linkedin.innerHTML = '<a href="#"><i class="fa-brands fa-linkedin"></i></a>';
linkedin.className = 'icon';

let gem = document.createElement('li');
gem.innerHTML = '<a href="#"><i class="fa-solid fa-gem"></i></a>';
gem.className = 'icon';

iconItems.appendChild(facebook);
iconItems.appendChild(twitter);
iconItems.appendChild(be);
iconItems.appendChild(linkedin);
iconItems.appendChild(gem);

sideNavbar.appendChild(iconItems);

hamburger.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent body click from firing
  sideNavbar.classList.add('open');
  sideNavbar.style.display = 'block';
});

closeBtn.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent body click from firing
  sideNavbar.classList.remove('open');
  sideNavbar.style.display = 'none';
});

body.addEventListener('click', (event) => {
  if (!sideNavbar.contains(event.target) && !hamburger.contains(event.target)) {
    sideNavbar.classList.remove('open');
    sideNavbar.style.display = 'none';
  }
});
