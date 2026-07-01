// Project Database for Dynamic Modal Content
const PROJECTS = {
    "1": {
        title: "How can students find jobs faster?",
        year: "2026",
        iconClass: "box-gold",
        iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>`,
        problem: "Traditional job hunting is slow, frustrating, and filled with 'ghost' postings. College students spend hundreds of hours manually filling identical application forms across disjointed career portals, facing a response rate of less than 5% and minimal feedback.",
        solution: "Built a platform that directly connects students with verified, active opportunities. Utilizing semantic matching based on coursework, project portfolios, and GitHub repositories, the system screens candidates instantly and opens a direct, real-time chat between students and recruiters. This bypasses the traditional HR screen and accelerates hiring timelines by up to 4x.",
        tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "TailwindCSS", "Socket.io"],
        link: "https://github.com/shahithkumar/job-finder"
    },
    "2": {
        title: "How can travelers discover hidden places?",
        year: "2025",
        iconClass: "box-purple",
        iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
        </svg>`,
        problem: "Standard travel guides and algorithms consistently recommend the same crowded tourist traps. Adventurous travelers searching for authentic local culture, unique food spots, and quiet nature trails lack a curated, personalized discovery mechanism.",
        solution: "Built an AI-powered travel planner that generates custom itineraries based on a user's unique psychological profile and real-world preferences. Instead of static inputs, the system queries conversational interests and integrates live local recommendation datasets. The tool generates interactive maps detailing off-the-beaten-path destinations, curated restaurant stops, and transportation logistics.",
        tech: ["React", "Python", "FastAPI", "OpenAI API", "Mapbox SDK", "MongoDB"],
        link: "https://github.com/shahithkumar/travel-planner"
    },
    "3": {
        title: "How can local shops go online instantly?",
        year: "2025",
        iconClass: "box-green",
        iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>`,
        problem: "Small brick-and-mortar storefronts want to take online orders but struggle with the setup complexity, monthly subscriptions, and technical configurations of platforms like Shopify, Magento, or WooCommerce.",
        solution: "Built a mobile-first, zero-friction no-code commerce platform. Store owners download a Progressive Web App, snap photos of their inventory, input pricing, and receive a secure, shareable web link in under 60 seconds. Customers can order and pay instantly via Apple Pay, Google Pay, or card, with store owners receiving WhatsApp notifications for order tracking.",
        tech: ["Vue.js", "PWA", "Firebase Cloud Functions", "Stripe API", "WhatsApp Business API"],
        link: "https://github.com/shahithkumar/instant-shop"
    },
    "4": {
        title: "How can mental health support be accessible?",
        year: "2024",
        iconClass: "box-pink",
        iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>`,
        problem: "Professional therapy is financially out of reach for many, and the stigma around mental health prevents people from discussing issues with friends and family. There is a lack of safe, anonymous spaces for daily emotional decompression.",
        solution: "Created an anonymous peer-to-peer emotional support platform. Users are matched in secure, encrypted 1-on-1 text channels with trained active listeners or participate in small, themed group discussions. The platform uses AI to screen for toxic behavior, triggering immediate moderator reviews and safety check-ins.",
        tech: ["React Native", "Express.js", "Socket.io", "MongoDB", "WebRTC", "HuggingFace Hub"],
        link: "https://github.com/shahithkumar/support-network"
    },
    "5": {
        title: "How can we practice speaking daily?",
        year: "2024",
        iconClass: "box-blue",
        iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>`,
        problem: "Achieving fluency in a new language requires daily active speech, yet language-learning apps focus heavily on vocab translation and grammar cards. Students often struggle to find safe, judgment-free environments to practice real-world dialogue.",
        solution: "Built an interactive AI conversational companion. Users speak naturally with diverse, themed virtual AI characters (e.g., a barista, a job interviewer, or a travel guide). Using low-latency voice-to-text, the agent responds in real-time, displaying structural translations and providing tips to improve pronunciation, vocabulary choice, and syntax.",
        tech: ["SvelteKit", "WebRTC", "Whisper API", "ElevenLabs AI", "FastAPI", "Redis"],
        link: "https://github.com/shahithkumar/speakeasy-ai"
    },
    "6": {
        title: "How can notes be smarter?",
        year: "2024",
        iconClass: "box-orange",
        iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
        </svg>`,
        problem: "People take pages of notes, bookmarks, and lists across work, study, and life, but retrieving specific facts later requires perfect memory of where it was saved or tedious keywords searching.",
        solution: "Developed a minimalist, local-first note-taking application powered by semantic search. By indexing documents into a local vector database, the application allows users to ask natural language questions (e.g., 'What was that book my coworker suggested last month?') and instantly retrieves relevant note paragraphs, generating a synthesized answer with citations.",
        tech: ["React", "Electron", "SQLite", "Ollama (Llama 3)", "Transformers.js", "Vector DB"],
        link: "https://github.com/shahithkumar/smart-notes"
    },
    "7": {
        title: "How do I stop wasting time on YouTube?",
        year: "2026",
        iconClass: "box-red",
        iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
        </svg>`,
        problem: "YouTube's recommendation algorithms and autoplaying features are designed to maximize watch time. Users frequently get distracted by clickbait videos and endless scroll, losing hours of productive time daily.",
        solution: "Built a Chrome Extension that intercepts visits to YouTube, hiding default recommendation feeds and autoplaying video sidebars. It replaces them with a goal-setting dialog prompting the user to declare what they need to watch. It then limits access to search queries strictly matching that goal, helping users watch what they came for and return to work.",
        tech: ["Chrome Extension API", "React", "CSS Grid", "HTML5", "Chrome Storage Sync"],
        link: "https://github.com/shahithkumar/Intent_Tube"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // Typewriter Animation
    const typewriterText = document.getElementById("typewriter-text");
    if (typewriterText) {
        const phrases = [
            "Welcome, I'm Shahith Kumar",
            "I build one real-world solution every 7 days",
            "No permission needed, just relentless builds",
            "Consistent execution, shipping live"
        ];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let delay = 100;

        function type() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                typewriterText.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                delay = 35; // Deleting speed
            } else {
                typewriterText.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                delay = 85; // Typing speed
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                delay = 2200; // Pause at full phrase
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                delay = 400; // Pause before next phrase
            }

            setTimeout(type, delay);
        }

        // Start typewriter
        setTimeout(type, 800);
    }

    // Newsletter Submit Event
    const newsletterForm = document.getElementById("newsletter-form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector(".newsletter-input") || newsletterForm.querySelector(".newsletter-input-inline");
            const submitBtn = newsletterForm.querySelector(".newsletter-btn") || newsletterForm.querySelector(".newsletter-btn-inline");
            const originalText = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = "Subscribing...";
            
            setTimeout(() => {
                emailInput.value = "";
                submitBtn.innerHTML = "Subscribed! 🎉";
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                }, 2000);
            }, 1000);
        });
    }


    // Scroll CTA handler
    const scrollCta = document.getElementById("follow-journey-cta");
    if (scrollCta) {
        scrollCta.addEventListener("click", (e) => {
            e.preventDefault();
            const newsletterSection = document.getElementById("newsletter-section");
            if (newsletterSection) {
                newsletterSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    // Theme Switcher Elements
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const sunIcon = themeToggleBtn.querySelector(".sun-icon");
    const moonIcon = themeToggleBtn.querySelector(".moon-icon");
    const htmlElement = document.documentElement;

    // Load initial theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    htmlElement.setAttribute("data-theme", savedTheme);
    updateThemeIcons(savedTheme);

    // Toggle Theme Click Event
    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = htmlElement.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        
        htmlElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateThemeIcons(newTheme);
    });

    function updateThemeIcons(theme) {
        if (theme === "dark") {
            sunIcon.style.display = "none";
            moonIcon.style.display = "block";
        } else {
            sunIcon.style.display = "block";
            moonIcon.style.display = "none";
        }
    }

    // Navigation Active Link Toggling & Scrolling
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            if (targetId === "#home") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else if (targetId === "#problems") {
                document.getElementById("problems").scrollIntoView({ behavior: "smooth" });
            } else if (targetId === "#about") {
                // Focus profile card / smooth scroll to it
                document.getElementById("home").scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Project Details Modal Interaction
    const projectCards = document.querySelectorAll(".problem-card");
    const projectModal = document.getElementById("project-modal");
    const modalCloseBtn = document.getElementById("modal-close-btn");
    
    // Modal Dynamic Elements
    const mIconBox = document.getElementById("modal-project-icon");
    const mYear = document.getElementById("modal-project-year");
    const mTitle = document.getElementById("modal-project-title");
    const mProblem = document.getElementById("modal-project-problem");
    const mSolution = document.getElementById("modal-project-solution");
    const mTech = document.getElementById("modal-project-tech");
    const mLink = document.getElementById("modal-project-link");


    modalCloseBtn.addEventListener("click", () => closeModal(projectModal));

    // Contact Modal Interaction
    const contactModal = document.getElementById("contact-modal");
    const contactCloseBtn = document.getElementById("contact-close-btn");
    const contactBtns = [
        document.getElementById("contact-me-btn"),
        document.getElementById("lets-connect-btn")
    ];
    const contactForm = document.getElementById("contact-form");
    const contactSuccessMsg = document.getElementById("contact-success-msg");

    contactBtns.forEach(btn => {
        if (btn) {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                openModal(contactModal);
            });
        }
    });

    contactCloseBtn.addEventListener("click", () => {
        closeModal(contactModal);
        // Reset state after transition finishes
        setTimeout(resetContactForm, 300);
    });

    // Form Submission Handling
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector(".btn-submit");
        const originalBtnText = submitBtn.innerHTML;

        // Visual loading feedback
        submitBtn.disabled = true;
        submitBtn.innerHTML = `Sending... <span class="spinner"></span>`;

        // Mock API endpoint delay
        setTimeout(() => {
            contactForm.style.display = "none";
            contactSuccessMsg.style.display = "flex";
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }, 1500);
    });

    // Helper functions to manage modal states
    function openModal(modalEl) {
        modalEl.classList.add("active");
        modalEl.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    function closeModal(modalEl) {
        modalEl.classList.remove("active");
        modalEl.setAttribute("aria-hidden", "true");
        document.body.style.overflow = ""; // Re-enable background scroll
    }

    function resetContactForm() {
        contactForm.reset();
        contactForm.style.display = "flex";
        contactSuccessMsg.style.display = "none";
    }

    // Global click outside modal content closes active modal
    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal-backdrop")) {
            const activeModal = document.querySelector(".modal.active");
            if (activeModal) {
                closeModal(activeModal);
                if (activeModal.id === "contact-modal") {
                    setTimeout(resetContactForm, 300);
                }
            }
        }
    });

    // Escape Key closes active modal
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            const activeModal = document.querySelector(".modal.active");
            if (activeModal) {
                closeModal(activeModal);
                if (activeModal.id === "contact-modal") {
                    setTimeout(resetContactForm, 300);
                }
            }
        }
    });

    // 3D Tilt Hover Effect for Problem Cards
    const cards = document.querySelectorAll(".problem-card");
    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const cardRect = card.getBoundingClientRect();
            const cardWidth = cardRect.width;
            const cardHeight = cardRect.height;
            
            // Cursor position relative to card boundaries
            const x = e.clientX - cardRect.left;
            const y = e.clientY - cardRect.top;
            
            // Convert to percentage values (-50% to 50%)
            const percentX = (x / cardWidth) - 0.5;
            const percentY = (y / cardHeight) - 0.5;
            
            // Set custom properties for CSS spotlight glow
            card.style.setProperty("--mouse-x", `${(x / cardWidth) * 100}%`);
            card.style.setProperty("--mouse-y", `${(y / cardHeight) * 100}%`);
            
            // Rotate card: max 12 degrees tilt
            const tiltX = percentY * -12; // Invert tilt on X axis
            const tiltY = percentX * 12;
            
            // Apply 3D rotation and scale
            card.style.transform = `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
            card.style.transition = "transform 0.05s ease, box-shadow 0.3s ease";
        });
        
        card.addEventListener("mouseleave", () => {
            // Smoothly snap card back to default position
            card.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            card.style.transition = "transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease";
        });
    });
});
