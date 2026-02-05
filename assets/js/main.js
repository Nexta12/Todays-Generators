let pendingPartials = 0;

function loadPartial(id, file, callback) {
  pendingPartials++;

  fetch(file)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback();
    })
    .catch((err) => console.error(err))
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
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback();
    })
    .catch((err) => console.error(err));
}

// Active Nav Link setter
function setActiveNavLink() {
  const currentPath = window.location.pathname;

  document.querySelectorAll(".navbar .nav-link").forEach((link) => {
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

// Load quote modal
loadPartial("quote-modal", "partials/quote-modal.html", () => {
  // Form submission handler
  const quoteForm = document.getElementById("quoteForm");
  if (quoteForm) {
    quoteForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = {
        name: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        service: document.getElementById("serviceType").value,
        message: document.getElementById("message").value,
        timestamp: new Date().toISOString(),
      };

      // Here you can send the data to your backend
      console.log("Quote request:", formData);

      // Show success message
      alert(
        "Thank you! Your quote request has been submitted. We'll contact you within 24 hours.",
      );

      // Hide modal
      const modal = bootstrap.Modal.getInstance(
        document.getElementById("quoteModal"),
      );
      if (modal) modal.hide();

      // Reset form
      quoteForm.reset();
    });
  }
});

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
    icon: "bi-cart4",
  },
  {
    title: "Repairs",
    text: "Our skilled technicians diagnose and repair diesel generators efficiently, resolving mechanical and electrical faults to restore optimal performance and minimize operational downtime.",
    icon: "bi-wrench-adjustable",
  },
  {
    title: "Generator Rentals",
    text: "We offer flexible diesel generator rental solutions for short-term and long-term needs, providing dependable power support for events, construction projects, and emergency backup situations.",
    icon: "bi-truck",
  },
  {
    title: "Servicing & Maintenance",
    text: "Routine servicing and preventive maintenance ensure your generator operates efficiently, reduces fuel consumption, and extends equipment lifespan through scheduled inspections and professional care.",
    icon: "bi-gear",
  },
  {
    title: "Genuine Spare Parts",
    text: "We supply genuine Perkins spare parts to guarantee compatibility, durability, and optimal performance, helping clients maintain generator reliability and avoid costly breakdowns.",
    icon: "bi-box-seam",
  },
];

if (servicesGrid) {
  const isHomePage =
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/" ||
    window.location.pathname.includes("Todays-Generators");

  const servicesToShow = isHomePage
    ? services.slice(0, 3) //  only 3 on homepage
    : services; // all on services page

  servicesToShow.forEach((service) => {
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
    id: "250kva-caterpillar",
    name: "250kVA Caterpillar",
    price: "₦18,500,000",
    availability: "In Stock",
    image: "assets/img/16.jpeg",
    description:
      "Powerful diesel generator designed for heavy-duty and continuous operations.",
    details:
      "This 250kVA Caterpillar diesel generator is ideal for factories, estates, hospitals, and industrial facilities requiring consistent and reliable power. Built with fuel efficiency and durability in mind.",
  },
  {
    id: "200kva-perkins",
    name: "200kVA Perkins",
    price: "₦14,800,000",
    availability: "In Stock",
    image: "assets/img/a7.jpeg",
    description:
      "Reliable Perkins diesel generator built for performance and durability.",
    details:
      "The 200kVA Perkins generator delivers dependable power for commercial and industrial use, offering excellent load handling, easy maintenance, and long service life.",
  },
  {
    id: "150kva-fg-wilson",
    name: "150kVA FG Wilson",
    price: "₦11,900,000",
    availability: "Limited Stock",
    image: "assets/img/17.jpeg",
    description:
      "High-performance generator suitable for large facilities and estates.",
    details:
      "Designed for continuous operation, this FG Wilson generator combines advanced engineering with fuel efficiency, making it suitable for residential estates and medium-scale industries.",
  },
  {
    id: "300kva-cummins",
    name: "300kVA Cummins",
    price: "₦22,000,000",
    availability: "In Stock",
    image: "assets/img/2.jpeg",
    description:
      "Industrial-grade generator delivering stable power under heavy loads.",
    details:
      "This Cummins generator is engineered for high-demand environments, providing stable output, rugged construction, and superior performance under continuous load conditions.",
  },
  {
    id: "400kva-perkins",
    name: "400kVA Perkins",
    price: "₦28,500,000",
    availability: "On Request",
    image: "assets/img/13.jpeg",
    description:
      "Heavy-duty Perkins generator for industrial and large commercial use.",
    details:
      "A premium solution for large-scale power needs, offering advanced control systems, fuel efficiency, and long-term operational reliability.",
  },
  {
    id: "500kva-caterpillar",
    name: "500kVA Caterpillar",
    price: "₦35,000,000",
    availability: "In Stock",
    image: "assets/img/25.jpeg",
    description:
      "High-capacity diesel generator engineered for critical power demands.",
    details:
      "Built for mission-critical operations such as hospitals and data centers, this generator ensures uninterrupted power with exceptional durability.",
  },
];
const generatorsGrid = document.getElementById("generatorsGrid");

if (generatorsGrid) {
  const isHomePage =
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/" ||
    window.location.pathname.includes("Todays-Generators");

  const generatorsToShow = isHomePage
    ? generators.slice(0, 3) // 👈 only 3 on homepage
    : generators; // 👈 all on products page

  generatorsToShow.forEach((gen) => {
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
         <a href="product.html?id=${gen.id}" class="btn btn-outline-emerald w-100">
  View Details
</a>

        </div>
      </div>
    `;

    generatorsGrid.appendChild(cardDiv);
  });
};



const productDetailsContainer = document.getElementById("productDetails");

if (productDetailsContainer) {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  const product = generators.find(p => p.id === productId);

  if (!product) {
    productDetailsContainer.innerHTML = `
      <div class="text-center">
        <h3>Product not found</h3>
        <p>Please return to the products page.</p>
      </div>
    `;
  } else {
    loadPageHero(product.name, product.description, product.image);

    productDetailsContainer.innerHTML = `
      <div class="col-lg-6">
        <img src="${product.image}" class="img-fluid rounded shadow-sm" alt="${product.name}">
      </div>

      <div class="col-lg-6">
        <h2 class="fw-bold">${product.name}</h2>

        <p class="text-muted mt-3">${product.details}</p>

        <ul class="list-unstyled mt-4">
          <li><strong>Price:</strong> ${product.price}</li>
          <li><strong>Availability:</strong> ${product.availability}</li>
        </ul>

        <button
          class="btn btn-emerald mt-4"
          data-bs-toggle="modal"
          data-bs-target="#quoteModal"
        >
          Get a Quote
        </button>
      </div>
    `;
  }
}








// Hide loader
window.addEventListener("load", tryHideLoader);





