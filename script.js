// Initialize AOS
AOS.init({
    duration: 1000,
    once: false,
    mirror: true
});

// Skills Data
const skillsData = {
    "Cloud & DevOps": [
        { name: "AWS Cloud", level: 95, icon: "fab fa-aws" },
        { name: "AWS ECS", level: 90, icon: "fas fa-container-storage" },
        { name: "AWS CloudFormation", level: 88, icon: "fas fa-layer-group" },
        { name: "Docker", level: 85, icon: "fab fa-docker" },
        { name: "Kubernetes", level: 85, icon: "fas fa-dharmachakra" },
        { name: "CI/CD", level: 85, icon: "fas fa-code-branch" },
        { name: "Linux", level: 90, icon: "fab fa-linux" }
    ],
    "Web Development": [
        { name: "WordPress", level: 92, icon: "fab fa-wordpress" },
        { name: "Shopify", level: 85, icon: "fab fa-shopify" },
        { name: "WooCommerce", level: 88, icon: "fab fa-woocommerce" },
        { name: "CSS", level: 85, icon: "fab fa-css3-alt" },
        { name: "Elementor", level: 90, icon: "fas fa-paint-brush" },
        { name: "Webflow", level: 82, icon: "fas fa-code" },
        { name: "Wix", level: 80, icon: "fas fa-window-maximize" }
    ],
    "Geographic Information Systems": [
        { name: "ArcGIS", level: 90, icon: "fas fa-globe" },
        { name: "ArcGIS Pro", level: 88, icon: "fas fa-map" },
        { name: "Remote Sensing", level: 85, icon: "fas fa-satellite" },
        { name: "GIS Analysis", level: 90, icon: "fas fa-map-marked-alt" }
    ],
    "IT & System Administration": [
        { name: "IT Support", level: 95, icon: "fas fa-headset" },
        { name: "Network Configuration", level: 88, icon: "fas fa-network-wired" },
        { name: "Remote Desktop", level: 92, icon: "fas fa-desktop" },
        { name: "System Maintenance", level: 90, icon: "fas fa-tools" }
    ],
    "Microsoft Office & Automation": [
        { name: "MS Excel", level: 95, icon: "fas fa-file-excel" },
        { name: "MS Access", level: 90, icon: "fas fa-database" },
        { name: "VBA Programming", level: 88, icon: "fas fa-code" },
        { name: "Office Automation", level: 92, icon: "fas fa-robot" }
    ],
    "Project Management": [
        { name: "Technical Leadership", level: 90, icon: "fas fa-users-cog" },
        { name: "Project Planning", level: 88, icon: "fas fa-tasks" },
        { name: "Risk Assessment", level: 85, icon: "fas fa-shield-alt" },
        { name: "Business Development", level: 88, icon: "fas fa-chart-line" }
    ]
};

function createSkillsHTML() {
    const skillsContainer = document.querySelector('.skills-container');
    skillsContainer.innerHTML = ''; // Clear existing content

    for (const [category, skills] of Object.entries(skillsData)) {
        const categoryHTML = `
            <div class="skill-category" data-aos="fade-up">
                <h3 class="category-title"><i class="fas fa-chevron-right"></i> ${category}</h3>
                <div class="skills-grid">
                    ${skills.map(skill => `
                        <div class="skill-item" data-aos="fade-up">
                            <div class="skill-icon">
                                <i class="${skill.icon}"></i>
                            </div>
                            <div class="skill-info">
                                <span class="skill-name">${skill.name}</span>
                                <span class="skill-percentage">${skill.level}%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-level" style="width: 0%" data-level="${skill.level}"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        skillsContainer.innerHTML += categoryHTML;
    }
}

// Animate skill bars when in view
function animateSkills() {
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(level => {
        const targetLevel = level.getAttribute('data-level');
        level.style.width = `${targetLevel}%`;
    });
}

// Initialize skills section
document.addEventListener('DOMContentLoaded', () => {
    createSkillsHTML();
    
    // Intersection Observer for skill bars
    const skillsSection = document.querySelector('#skills');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(skillsSection);
});

// Projects Data
const projectsData = [
    {
        title: "AWS Cloud Infrastructure Migration",
        description: "Led the migration of enterprise applications to AWS cloud infrastructure, implementing high-availability and scalability solutions.",
        stack: ["AWS", "Docker", "Kubernetes", "CloudFormation"],
        icons: {
            aws: "fab fa-aws",
            docker: "fab fa-docker",
            kubernetes: "fas fa-dharmachakra",
            cloud: "fas fa-cloud"
        },
        achievements: [
            "Reduced infrastructure costs by 40%",
            "Improved system uptime to 99.9%",
            "Implemented automated scaling"
        ]
    },
    {
        title: "E-commerce Platform Development",
        description: "Developed and maintained multiple e-commerce platforms using WordPress and Shopify, integrating payment gateways and custom features.",
        stack: ["WordPress", "Shopify", "WooCommerce", "PHP"],
        icons: {
            wordpress: "fab fa-wordpress",
            shopify: "fab fa-shopify",
            php: "fab fa-php",
            ecommerce: "fas fa-shopping-cart"
        },
        achievements: [
            "Increased sales conversion by 25%",
            "Optimized site performance",
            "Implemented secure payment systems"
        ]
    },
    {
        title: "GIS Mapping for Community Development",
        description: "Utilized GIS technology for community development projects, creating interactive maps and spatial analysis tools.",
        stack: ["ArcGIS", "Remote Sensing", "Python", "Spatial Analysis"],
        icons: {
            map: "fas fa-map-marked-alt",
            analysis: "fas fa-chart-bar",
            python: "fab fa-python",
            database: "fas fa-database"
        },
        achievements: [
            "Mapped 100+ community resources",
            "Improved decision-making process",
            "Enhanced resource allocation"
        ]
    },
    {
        title: "DevOps Pipeline Implementation",
        description: "Designed and implemented CI/CD pipelines for multiple clients, improving deployment efficiency and code quality.",
        stack: ["Jenkins", "GitLab", "Docker", "AWS"],
        icons: {
            jenkins: "fab fa-jenkins",
            gitlab: "fab fa-gitlab",
            docker: "fab fa-docker",
            aws: "fab fa-aws"
        },
        achievements: [
            "Reduced deployment time by 70%",
            "Automated testing processes",
            "Improved code quality"
        ]
    },
    {
        title: "Enterprise CMS Development",
        description: "Developed and maintained enterprise-level content management systems with custom plugins and features.",
        stack: ["WordPress", "PHP", "MySQL", "JavaScript"],
        icons: {
            wordpress: "fab fa-wordpress",
            php: "fab fa-php",
            database: "fas fa-database",
            js: "fab fa-js"
        },
        achievements: [
            "Served 1M+ monthly users",
            "Custom plugin development",
            "Performance optimization"
        ]
    },
    {
        title: "Cloud Security Implementation",
        description: "Implemented comprehensive cloud security solutions for enterprise clients using AWS security services.",
        stack: ["AWS", "Security", "CloudWatch", "IAM"],
        icons: {
            aws: "fab fa-aws",
            security: "fas fa-shield-alt",
            monitoring: "fas fa-eye",
            users: "fas fa-users-cog"
        },
        achievements: [
            "Enhanced security protocols",
            "Implemented monitoring",
            "Achieved compliance standards"
        ]
    }
];

function createProjectsHTML() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = projectsData.map(project => `
        <div class="project-item" data-aos="fade-up">
            <div class="project-icons">
                ${Object.values(project.icons).map(icon => `
                    <i class="${icon}"></i>
                `).join('')}
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-stack">
                    ${project.stack.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <div class="project-achievements">
                    ${project.achievements.map(achievement => `
                        <div class="achievement">
                            <i class="fas fa-check"></i>
                            <span>${achievement}</span>
                        </div>
                    `).join('')}
                </div>
                <a href="#" class="project-link">
                    View Details <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `).join('');
}

// Initialize projects section
document.addEventListener('DOMContentLoaded', () => {
    createProjectsHTML();
    // ... rest of your initialization code ...
});

// Experience Data Structure
const experienceData = [
    {
        category: "Cloud & DevOps",
        icon: "fas fa-cloud",
        company: "Arbob Tech Team",
        duration: "2020 - Present",
        location: "Remote",
        position: "Lead Cloud Engineer",
        keySkills: ["AWS", "Docker", "Kubernetes", "CI/CD", "CloudFormation"],
        highlights: [
            "Leading cloud infrastructure projects for enterprise clients",
            "Implementing DevOps practices and automation",
            "Managing containerized applications at scale"
        ]
    },
    {
        category: "GIS Development",
        icon: "fas fa-globe",
        company: "Spatial Analytics",
        duration: "2018 - 2020",
        location: "Pakistan",
        position: "GIS Developer",
        keySkills: ["ArcGIS", "Remote Sensing", "Spatial Analysis", "Python"],
        highlights: [
            "Developing GIS applications for environmental monitoring",
            "Processing and analyzing satellite imagery",
            "Creating spatial databases and analytics solutions"
        ]
    },
    {
        category: "Web Development",
        icon: "fas fa-code",
        company: "Digital Solutions",
        duration: "2016 - 2018",
        location: "Remote",
        position: "Full Stack Developer",
        keySkills: ["WordPress", "Shopify", "WooCommerce", "PHP", "JavaScript"],
        highlights: [
            "Building custom WordPress themes and plugins",
            "Developing e-commerce solutions",
            "Implementing CMS customizations"
        ]
    },
    {
        category: "Project Management",
        icon: "fas fa-tasks",
        company: "Tech Innovators",
        duration: "2015 - 2016",
        location: "Islamabad",
        position: "Technical Project Manager",
        keySkills: ["Agile", "Scrum", "Team Leadership", "Risk Management"],
        highlights: [
            "Managing technical teams and project deliverables",
            "Implementing Agile methodologies",
            "Ensuring successful project completion"
        ]
    }
];

// Function to create experience section HTML
function createExperienceHTML() {
    const container = document.querySelector('.experience-container');
    
    const experienceHTML = experienceData.map(exp => `
        <div class="experience-card" data-aos="fade-up">
            <div class="experience-icon">
                <i class="${exp.icon}"></i>
            </div>
            
            <div class="experience-header">
                <div class="category-title">
                    <h3>${exp.category}</h3>
                    <span class="company-name">${exp.company}</span>
                </div>
                <div class="meta-details">
                    <span class="duration">
                        <i class="far fa-calendar-alt"></i>
                        ${exp.duration}
                    </span>
                    <span class="location">
                        <i class="fas fa-map-marker-alt"></i>
                        ${exp.location}
                    </span>
                </div>
            </div>

            <div class="position-title">
                <span>${exp.position}</span>
            </div>

            <div class="skills-container">
                ${exp.keySkills.map(skill => `
                    <span class="skill-tag">${skill}</span>
                `).join('')}
            </div>

            <div class="highlights-list">
                ${exp.highlights.map(highlight => `
                    <div class="highlight-item">
                        <i class="fas fa-check-circle"></i>
                        <span>${highlight}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');

    container.innerHTML = experienceHTML;
}

// Initialize when document is ready
document.addEventListener('DOMContentLoaded', () => {
    createExperienceHTML();
});

// Initialize typed.js
const typed = new Typed('.typed', {
    strings: [
        'AWS Cloud Engineer',
        'DevOps Specialist',
        'GIS Developer',
        'IT Professional'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
});

// Initialize all sections
document.addEventListener('DOMContentLoaded', () => {
    createSkillsHTML();
    createExperienceHTML();
    createProjectsHTML();
});

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

window.addEventListener('load', () => {
    initBackground();
    animateBackground();
}); 