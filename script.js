// ===================================== toggle icon navbar =========================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ==================================== scroll section active link =====================
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top= window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                // document.querySelector('header nav a[href*="${id}"]').classList.add('active');
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');

            });
        };
    });
// =============================== sticky navbar ========================================    
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

// =============================== remove toggle icon navbar  when click navbar link ====

   menuIcon.classList.remove('bx-x');
   navbar.classList.remove('active');
};

// ==================================scroll reveal=======-----------------================
ScrollReveal({
     reset: true,
     distance :'80px',
     duration:2000,
     delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin:
'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', {origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', {origin:'right' });


// ======================================typed js==========================================
const typed = new Typed('.multiple-text', {
    strings:['Backend Developer','Python Developer','Athletic'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true,
});

// ====================================== GitHub Projects ==========================================
const githubUsername = "kaushalahirwar21";

async function loadGitHubProjects() {
  try {
    const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated`);
    const repos = await response.json();

    const container = document.getElementById("portfolio-container");
    container.innerHTML = ""; // clear old content

    repos.slice(0, 6).forEach(repo => { // sirf 6 latest projects dikhayenge
      const box = document.createElement("div");
      box.classList.add("portfolio-box");

      box.innerHTML = `
        <div class="portfolio-layer">
          <h4>${repo.name}</h4>
          <p>${repo.description || "No description available"}</p>
          <a href="${repo.html_url}" target="_blank"><i class='bx bx-link'></i></a>
        </div>
      `;

      container.appendChild(box);
    });
  } catch (error) {
    console.error("Error loading GitHub repos:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadGitHubProjects);


// =========================================whatsapp====================================================
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e){
    e.preventDefault(); // form submit nahi hoga page reload ke saath

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if(firstName === "" || lastName === "" || phone === "" || message === ""){
        alert("Please fill all fields!");
        return;
    }

    const fullName = firstName + " " + lastName;
    const whatsappNumber = "+919977949032"; // apna number yaha daal
    const text = `Hello Kaushal! My name is ${fullName}. My phone number is ${phone}. ${message}`;
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
});


