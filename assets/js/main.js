
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
    title: "Generator Sales",
    text: "We supply high-quality fairly used UK Perkins diesel generators that are carefully inspected, tested, and certified to deliver reliable power performance for residential, commercial, and industrial applications.",
    icon: "bi-cart4"
  },
  {
    title: "Repairs",
    text: "Our skilled technicians diagnose and repair diesel generators efficiently, resolving mechanical and electrical faults to restore optimal performance and minimize operational downtime.",
    icon: "bi-wrench-adjustable"
  },
  {
    title: "Generator Rentals",
    text: "We offer flexible diesel generator rental solutions for short-term and long-term needs, providing dependable power support for events, construction projects, and emergency backup situations.",
    icon: "bi-truck"
  },
  {
    title: "Servicing & Maintenance",
    text: "Routine servicing and preventive maintenance ensure your generator operates efficiently, reduces fuel consumption, and extends equipment lifespan through scheduled inspections and professional care.",
    icon: "bi-gear"
  },
  {
    title: "Genuine Spare Parts",
    text: "We supply genuine Perkins spare parts to guarantee compatibility, durability, and optimal performance, helping clients maintain generator reliability and avoid costly breakdowns.",
    icon: "bi-box-seam"
  }
];

if (servicesGrid) {

   const isHomePage =
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/" ||
    window.location.pathname.includes("Todays-Generators");

  const servicesToShow = isHomePage
    ? services.slice(0, 3) //  only 3 on homepage
    : services;            // all on services page

  servicesToShow.forEach(service => {
    servicesGrid.innerHTML += `
      <div class="col-lg-4 col-md-6">
        <div class="card h-100 text-center service-card">
          <div class="card-body">
            <i class="bi ${service.icon} display-4 mb-3 icon"></i>
            <h5 class="card-title title-with-underline">${service.title}</h5>
            <p class="card-text text-muted">${service.text}</p>
          </div>
        </div>
      </div>
    `;
  });
}



const generators = [
  {
    name: "250kVA Caterpillar",
    image: "assets/img/16.jpeg",
    description: "Powerful diesel generator designed for heavy-duty and continuous operations."
  },
  {
    name: "200kVA Perkins",
    image: "assets/img/a7.jpeg",
    description: "Reliable Perkins diesel generator built for performance and durability."
  },
  {
    name: "150kVA FG Wilson",
    image: "assets/img/17.jpeg",
    description: "High-performance generator suitable for large facilities and estates."
  },
  {
    name: "300kVA Cummins",
    image: "assets/img/2.jpeg",
    description: "Industrial-grade generator delivering stable power under heavy loads."
  },
  {
    name: "400kVA Perkins",
    image: "assets/img/13.jpeg",
    description: "Heavy-duty Perkins generator for industrial and large commercial use."
  },
  {
    name: "500kVA Caterpillar",
    image: "assets/img/25.jpeg",
    description: "High-capacity diesel generator engineered for critical power demands."
  }
];


const generatorsGrid = document.getElementById("generatorsGrid");

if (generatorsGrid) {
  const isHomePage =
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/" ||
    window.location.pathname.includes("Todays-Generators");

  const generatorsToShow = isHomePage
    ? generators.slice(0, 3) // 👈 only 3 on homepage
    : generators;            // 👈 all on products page

  generatorsToShow.forEach(gen => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "col-lg-4 col-md-6";

    cardDiv.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${gen.image}" class="card-img-top" alt="${gen.name} Generator">
        <div class="card-body text-center">
          <h5 class="card-title">${gen.name}</h5>
          <p class="card-text text-muted">${gen.description}</p>
        </div>
        <div class="card-footer bg-transparent border-0">
          <a href="products.html" class="btn btn-outline-emerald w-100">
            View Details
          </a>
        </div>
      </div>
    `;

    generatorsGrid.appendChild(cardDiv);
  });
}

// Hide loader
window.addEventListener("load", tryHideLoader);




