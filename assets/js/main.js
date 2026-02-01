
let pendingPartials = 0;

function loadPartial(id, file, callback) {
  pendingPartials++;

  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback();
    })
    .catch(err => console.error(err))
    .finally(() => {
      pendingPartials--;
      tryHideLoader();
    });
}

function tryHideLoader() {
  if (pendingPartials === 0 && document.readyState === "complete") {
    const loader = document.getElementById("page-loader");
    if (loader) loader.classList.add("hidden");
  }
}





function loadPartial(id, file, callback) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback();
    })
    .catch(err => console.error(err));
}

// Active Nav Link setter
function setActiveNavLink() {
  const currentPath = window.location.pathname;

  document.querySelectorAll(".navbar .nav-link").forEach(link => {
    const linkPath = new URL(link.href).pathname;

    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
}


// Other Pages Hero Section

function loadPageHero(title, subtitle, imageUrl) {
  loadPartial("page-hero", "partials/page-hero.html", () => {
    document.getElementById("pageHeroTitle").textContent = title;
    document.getElementById("pageHeroSubtitle").textContent = subtitle;

    if (imageUrl) {
      document.querySelector(".page-hero").style.backgroundImage =
        `url(${imageUrl})`;
    }
  });
}



// Load shared components
loadPartial("site-head", "partials/header.html");
loadPartial("navbar", "partials/navbar.html", setActiveNavLink);
loadPartial("footer", "partials/footer.html");
loadPartial("cta", "partials/cta.html");




const servicesGrid = document.getElementById("servicesGrid");

const services = [
  {
    title: "Sales",
    text: "Sales of fairly used UK Perkins diesel generators.",
    icon: "bi-cart4"         // Bootstrap Icons class for a cart
  },
  {
    title: "Repairs & Servicing",
    text: "Expert repair and servicing of Perkins generators.",
    icon: "bi-tools"         // wrench & screwdriver icon
  },
  {
    title: "Rentals",
    text: "Flexible generator rental solutions.",
    icon: "bi-truck"         // truck icon
  }
];


if (servicesGrid) {
  services.forEach(service => {
    servicesGrid.innerHTML += `
      <div class="col-md-4">
        <div class="card h-100 text-center service-card">
          <div class="card-body">
            <i class="bi ${service.icon} display-4 mb-3 text-secondary icon"></i>
            <h5 class="card-title title-with-underline">${service.title}</h5>
            <p class="card-text">${service.text}</p>
          </div>
        </div>
      </div>
    `;
  });
}





const generators = [
  {
    name: "250kVA Caterpillar",
    image: "/assets/img/16.jpeg",
    description: "Powerful diesel generator designed for heavy-duty and continuous operations."
  },
  {
    name: "200kVA Perkins",
    image: "/assets/img/a7.jpeg",
    description: "Reliable Perkins diesel generator built for performance and durability."
  },
  {
    name: "150kVA FG Wilson",
    image: "/assets/img/17.jpeg",
    description: "High-performance generator suitable for large facilities and estates."
  },
  {
    name: "300kVA Cummins",
    image: "/assets/img/2.jpeg",
    description: "Industrial-grade generator delivering stable power under heavy loads."
  },
  {
    name: "400kVA Perkins",
    image: "/assets/img/13.jpeg",
    description: "Heavy-duty Perkins generator for industrial and large commercial use."
  },
  {
    name: "500kVA Caterpillar",
    image: "/assets/img/25.jpeg",
    description: "High-capacity diesel generator engineered for critical power demands."
  }
];


const generatorsGrid = document.getElementById("generatorsGrid");

if (generatorsGrid) {
  generators.forEach(gen => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "col-lg-4 col-md-6";

    cardDiv.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${gen.image}" class="card-img-top" alt="${gen.name} Generator">
        <div class="card-body">
          <h5 class="card-title">${gen.name}</h5>
          <p class="card-text">${gen.description}</p>
        </div>
        <div class="card-footer bg-transparent border-0">
          <a href="generators.html" class="btn btn-outline-emerald w-100">View More</a>
        </div>
      </div>
    `;

    generatorsGrid.appendChild(cardDiv);
  });
}

// Hide loader
window.addEventListener("load", tryHideLoader);




