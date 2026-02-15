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

function updateSEO(title, description) {
  if (title) {
    document.title = `${title} | Today's Generators - Nigeria`;
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    const twTitle = document.querySelector('meta[property="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", title);
  }
  if (description) {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);
    const twDesc = document.querySelector('meta[property="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", description);
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
    id: "15kva-fg-wilson",
    name: "15kVA FG Wilson Sound Proof Diesel Generator",
    price: "₦4,500,000",
    availability: "In Stock",
    image: "assets/img/15kva-fg-wilson-1.jpeg",
    images: [
      "assets/img/15kva-fg-wilson-1.jpeg",
      "assets/img/15kva-fg-wilson-2.jpeg",
      "assets/img/15kva-fg-wilson-3.jpeg",
      "assets/img/15kva-fg-wilson-4.jpeg",
    ],
    description:
      "Efficient and quiet 15kVA diesel generator, perfect for residential use.",
    details:
      "This FG Wilson 15kVA soundproof diesel generator is designed to provide reliable backup power with minimal noise. Features a robust engine, fuel-efficient operation, and a weatherproof enclosure. Ideal for homes and small offices.",
  },
  {
    id: "20kva-fg-wilson",
    name: "20kVA FG Wilson Sound Proof Diesel Generator",
    price: "₦5,200,000",
    availability: "In Stock",
    image: "assets/img/20kva-fg-Wilson-sound-proof-diesel-generator-5.jpeg",
    images: [
      "assets/img/20kva-fg-Wilson-sound-proof-diesel-generator-5.jpeg",
      "assets/img/20kva-fg-Wilson-sound-proof-diesel-generator-6.jpeg",
      "assets/img/20kva-fg-Wilson-sound-proof-diesel-generator-7.jpeg",
      "assets/img/20kva-fg-Wilson-sound-proof-diesel-generator-8.jpeg",
      "assets/img/20kva-fg-Wilson-sound-proof-diesel-generator-9.jpeg",
      "assets/img/20kva-fg-Wilson-sound-proof-diesel-generator-10.jpeg",
    ],
    description:
      "Reliable 20kVA power solution for medium-sized homes and businesses.",
    details:
      "The 20kVA FG Wilson generator offers a balance of power and efficiency. Its sound-attenuated enclosure ensures quiet performance, while the advanced control system provides easy monitoring and protection. Suitable for clinics, shops, and residential estates.",
  },
  {
    id: "20kva-mantrac-cat",
    name: "20kVA Mantrac CAT Sound Proof Diesel Generator",
    price: "₦5,800,000",
    availability: "In Stock",
    image: "assets/img/20kva-mantrac-cat-sound-proof-diesel-generator-11.jpeg",
    images: [
      "assets/img/20kva-mantrac-cat-sound-proof-diesel-generator-11.jpeg",
      "assets/img/20kva-mantrac-cat-sound-proof-diesel-generator-12.jpeg",
      "assets/img/20kva-mantrac-cat-sound-proof-diesel-generator-13.jpeg",
      "assets/img/20kva-mantrac-cat-sound-proof-diesel-generator-14.jpeg",
      "assets/img/20kva-mantrac-cat-sound-proof-diesel-generator-15.jpeg",
    ],
    description:
      "Premium Caterpillar engineering in a 20kVA package for demanding applications.",
    details:
      "Engineered by Caterpillar and supplied by Mantrac, this 20kVA generator is built for durability and high performance. It features a world-class engine known for its longevity and low maintenance costs. Perfect for mission-critical residential or commercial use.",
  },
  {
    id: "30kva-mantrac-cat",
    name: "30kVA Mantrac CAT Sound Proof Diesel Generator",
    price: "₦7,500,000",
    availability: "Limited Stock",
    image: "assets/img/30-KVA-mantrac-cat-sound-proof-diesel-generator-16.jpeg",
    images: [
      "assets/img/30-KVA-mantrac-cat-sound-proof-diesel-generator-16.jpeg",
      "assets/img/30-KVA-mantrac-cat-sound-proof-diesel-generator-17.jpeg",
      "assets/img/30-KVA-mantrac-cat-sound-proof-diesel-generator-18.jpeg",
      "assets/img/30-KVA-mantrac-cat-sound-proof-diesel-generator-19.jpeg",
    ],
    description:
      "Heavy-duty 30kVA CAT generator for large residences and industrial facilities.",
    details:
      "This 30kVA Mantrac Caterpillar generator delivers exceptional power density and reliability. Designed to handle heavy startup loads, it is an excellent choice for large homes with multiple air conditioners or small industrial plants. Features superior soundproofing and fuel management.",
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
    updateSEO(product.name, product.details);
    loadPageHero(product.name, product.description, product.image);

    const thumbnailsHtml = product.images
      .map(
        (img, index) => `
      <div class="col-3 mb-2">
        <img src="${img}" class="img-fluid rounded cursor-pointer thumbnail-img ${index === 0 ? "border-emerald" : ""}" 
             onclick="changeMainImage('${img}', this)" alt="${product.name} view ${index + 1}">
      </div>
    `,
      )
      .join("");

    productDetailsContainer.innerHTML = `
      <div class="col-lg-6">
        <div class="main-image-container mb-3">
          <img id="mainProductImage" src="${product.image}" class="img-fluid rounded shadow-sm" alt="${product.name}">
        </div>
        <div class="row gx-2">
          ${thumbnailsHtml}
        </div>
      </div>

      <div class="col-lg-6">
        <h2 class="fw-bold">${product.name}</h2>
        <div class="badge bg-emerald mb-3">${product.availability}</div>

        <p class="text-muted mt-3">${product.details}</p>

        <div class="card bg-light border-0 mt-4">
          <div class="card-body">
            <h4 class="fw-bold text-emerald mb-0">${product.price}</h4>
            <p class="text-muted small mb-0">Inclusive of installation support</p>
          </div>
        </div>

        <button
          class="btn btn-emerald btn-lg w-100 mt-4"
          data-bs-toggle="modal"
          data-bs-target="#quoteModal"
        >
          Request Quote & Availability
        </button>

        <div class="mt-4 pt-3 border-top">
          <h5>Key Specifications:</h5>
          <ul class="list-unstyled">
            <li><i class="bi bi-check-circle-fill text-emerald me-2"></i> Soundproof Enclosure</li>
            <li><i class="bi bi-check-circle-fill text-emerald me-2"></i> Low Fuel Consumption</li>
            <li><i class="bi bi-check-circle-fill text-emerald me-2"></i> 100% Copper Armature</li>
            <li><i class="bi bi-check-circle-fill text-emerald me-2"></i> Digital Control Panel</li>
          </ul>
        </div>
      </div>
    `;
  }
}

function changeMainImage(src, thumbElement) {
  document.getElementById("mainProductImage").src = src;
  document.querySelectorAll(".thumbnail-img").forEach((img) => {
    img.classList.remove("border-emerald");
  });
  thumbElement.classList.add("border-emerald");
}





// Hide loader
window.addEventListener("load", tryHideLoader);





