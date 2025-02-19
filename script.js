let isMenuOpen = false;

const toggleMenu = () => {
    const navLinks = document.getElementById("nav-links");
    const menuIcon = document.getElementById("menu-icon");
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        navLinks.classList.add("open");
        menuIcon.textContent = "close";
    } else {
        navLinks.classList.remove("open");
        menuIcon.textContent = "menu";
    }
};

const setActiveLink = (id) => {
    document.querySelectorAll(".nav-items").forEach((link) => {
        link.classList.remove("active");
    });
    const activeLink = document.querySelector(`#link-${id}`);
    if (activeLink) {
        activeLink.classList.add("active");
    }
};

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveLink(entry.target.id);
            }
        });
    }, { threshold: 0.6 }
);

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    const projectsTab = document.getElementById("projectsTab");
    const certificatesTab = document.getElementById("certificatesTab");
    const techStackTab = document.getElementById("techStackTab");
    const contentContainer = document.getElementById("contentContainer");

    if (!projectsTab || !certificatesTab || !techStackTab || !contentContainer) {
        console.error("One or more tab elements or content container is missing.");
        return;
    }

    // Project data
    const projects = [{
            image: "./assets/project1.png",
            title: "DASHBOARD KELAS.ID",
            description: "Analyzes the learning activities of Kelas.id users, and offline user recommendations based on English specialization.",
        },
        {
            image: "./assets/project2.png",
            title: "DASHBOARD E-COMMERCE",
            description: "Analyzes e-commerce revenue. It shows total sales, monthly revenue trends, top 5 products with the highest revenue, and best-selling product categories.",
        },
        {
            image: "./assets/project3.png",
            title: "PROTOTYPE WEBSITE",
            description: "Design of the official e-commerce, which provides exclusive merchandise and albums for global fans.",
        },
        {
            image: "./assets/porto.png",
            title: "MY WEBSITE PORTFOLIO",
            description: "Showcasing the various projects I have worked on, including data analysis, visualization, and interactive dashboard development. Each project reflects my ability to process data to produce valuable insights, with a focus on accuracy, efficiency, and ease of interpretation.",
        },
    ];

    // Certificates data
    const certificates = [
        "./assets/msib.jpg",
        "./assets/karier.mu.jpg",
        "./assets/karier.mu1.jpg",
        "./assets/magang.jpg",
        "./assets/himti.jpg",
    ];

    // Tech stack data
    const techStack = [
        { name: "Tableau", logo: "./assets/tableau.jpg" },
        { name: "Python", logo: "./assets/python.jpg" },
        { name: "SQL", logo: "./assets/sql.jpg" },
        { name: "HTML", logo: "./assets/html.jpg" },
        { name: "Matlab", logo: "./assets/matlab.jpg" },
        { name: "C++", logo: "./assets/c++.jpg" },
    ];

    // Render content based on tab
    const renderContent = (tab) => {
        contentContainer.innerHTML = "";
        switch (tab) {
            case "Projects":
                renderProjects();
                break;
            case "Certificates":
                renderCertificates();
                break;
            case "Tech Stack":
                renderTechStack();
                break;
            default:
                contentContainer.innerHTML = "<p>No content available</p>";
                break;
        }
    };

    const renderProjects = () => {
        projects.forEach((project) => {
            const projectCard = document.createElement("div");
            projectCard.classList.add("project");
            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="card-image">
                <h2 class="project-title">${project.title}</h2>
                <p class="project-description">${project.description}</p>
                
            `;
            contentContainer.appendChild(projectCard);
        });
    };

    const renderCertificates = () => {
        certificates.forEach((cert) => {
            const certificateCard = document.createElement("div");
            certificateCard.classList.add("certificate-card");
            certificateCard.innerHTML = `
                <img src="${cert}" alt="Certificate" class="certificate-image">
            `;
            contentContainer.appendChild(certificateCard);
        });
    };



    const renderTechStack = () => {
        techStack.forEach((tech) => {
            const techCard = document.createElement("div");
            techCard.classList.add("flip-container");
            techCard.innerHTML = `
                <div class="flip-content">
                    <div class="flip-front">
                        <img src="${tech.logo}" alt="${tech.name}" class="tech-logo">
                    </div>
                    <div class="flip-back">
                        <p class="tech-name">${tech.name}</p>
                    </div>
                </div>
            `;
            contentContainer.appendChild(techCard);
        });
    };

    // Tab click events
    projectsTab.addEventListener("click", () => {
        setActiveTab("Projects");
        renderContent("Projects");
    });

    certificatesTab.addEventListener("click", () => {
        setActiveTab("Certificates");
        renderContent("Certificates");
    });

    techStackTab.addEventListener("click", () => {
        setActiveTab("Tech Stack");
        renderContent("Tech Stack");
    });

    const setActiveTab = (tab) => {
        document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
        if (tab === "Projects") projectsTab.classList.add("active");
        if (tab === "Certificates") certificatesTab.classList.add("active");
        if (tab === "Tech Stack") techStackTab.classList.add("active");
    };

    // Initial render
    renderContent("Projects");
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        // Display the form data (for demonstration)
        console.log(formData);

        // Show alert on form submission
        alert("Form Submitted!");
    });
});
