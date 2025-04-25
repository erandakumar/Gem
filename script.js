document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Create modal element if it doesn't exist
    if (!document.getElementById('gemModal')) {
        const modalHTML = `
        <div class="modal fade" id="gemModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title"></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body"></div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    // Gemstone data with local images
    const gemstones = [
        {
            name: "Ruby",
            image: "images/Ruby.jpeg",
            color: "Red",
            hardness: "9",
            origin: "Myanmar, Thailand, Madagascar",
            description: "Ruby is a pink to blood-red colored gemstone, a variety of the mineral corundum. The red color is caused mainly by the presence of chromium. Rubies have been highly prized since ancient times and are one of the most valuable gemstones today.",
            properties: "Chromium gives ruby its red color and fluorescence. The finest rubies have a pure, vibrant red to slightly purplish red color.",
            uses: "Jewelry (rings, necklaces, earrings), watches, decorative items",
            birthstone: "July",
            category: "Precious"
        },
        {
            name: "Sapphire",
            image: "images/Sapphire.jpeg",
            color: "Blue (various colors available)",
            hardness: "9",
            origin: "Sri Lanka, Madagascar, Australia",
            description: "Sapphire is a precious gemstone, a variety of the mineral corundum. While blue is the most traditional color, sapphires come in all colors except red (which are rubies). The most valuable sapphires are cornflower blue.",
            properties: "Trace amounts of iron and titanium give sapphire its blue color. Sapphires can exhibit asterism (star effect) when cut en cabochon.",
            uses: "Jewelry, watch crystals, high-durability windows, scientific instruments",
            birthstone: "September",
            category: "Precious"
        },
        {
            name: "Emerald",
            image: "images/Emerald.jpeg",
            color: "Green",
            hardness: "7.5-8",
            origin: "Colombia, Zambia, Brazil",
            description: "Emerald is a gemstone and a variety of the mineral beryl colored green by trace amounts of chromium and sometimes vanadium. The most valuable emeralds are a pure grassy green with high transparency.",
            properties: "Emeralds typically have inclusions called 'jardin' (French for garden) which are accepted as part of the stone's character.",
            uses: "Jewelry, decorative arts, historical carvings",
            birthstone: "May",
            category: "Precious"
        },
        {
            name: "Diamond",
            image: "images/Diamond.jpeg",
            color: "Colorless (various colors available)",
            hardness: "10",
            origin: "Russia, Botswana, Canada",
            description: "Diamond is a solid form of carbon with its atoms arranged in a crystal structure called diamond cubic. It has the highest hardness and thermal conductivity of any natural material.",
            properties: "Diamonds can be colorless, yellow, brown, blue, pink, and other colors. Their brilliance comes from their high refractive index and dispersion.",
            uses: "Jewelry, industrial cutting and grinding tools, scientific applications",
            birthstone: "April",
            category: "Precious"
        },
        {
            name: "Amethyst",
            image: "images/Amethyst.jpeg",
            color: "Purple",
            hardness: "7",
            origin: "Brazil, Uruguay, Zambia",
            description: "Amethyst is a violet variety of quartz often used in jewelry. The name comes from the ancient Greek meaning 'not intoxicated', a reference to the belief that the stone protected its owner from drunkenness.",
            properties: "Amethyst's purple color comes from iron impurities and natural irradiation. It can fade in prolonged sunlight.",
            uses: "Jewelry, decorative items, spiritual objects",
            birthstone: "February",
            category: "Semi-precious"
        },
        {
            name: "Topaz",
            image: "images/Topaz.jpeg",
            color: "Yellow, Blue (various colors available)",
            hardness: "8",
            origin: "Brazil, Russia, USA",
            description: "Topaz is a silicate mineral of aluminium and fluorine. Pure topaz is colorless and transparent but is usually tinted by impurities; typical topaz is wine, yellow, pale gray, or reddish-orange.",
            properties: "Blue topaz is often created by irradiating and heating colorless topaz. Imperial topaz is the most valuable variety with a golden orange to pink color.",
            uses: "Jewelry, ornamental carvings",
            birthstone: "November",
            category: "Semi-precious"
        },
        {
            name: "Opal",
            image: "images/Opal.jpeg",
            color: "Multi-color (play-of-color)",
            hardness: "5.5-6.5",
            origin: "Australia, Ethiopia, Mexico",
            description: "Opal is a hydrated amorphous form of silica; its water content may range from 3 to 21% by weight. It is known for its unique play of colors caused by light diffraction from its internal structure.",
            properties: "Precious opal displays play-of-color, while common opal does not. Black opal is the rarest and most valuable variety.",
            uses: "Jewelry, decorative items",
            birthstone: "October",
            category: "Semi-precious"
        },
        {
            name: "Aquamarine",
            image: "images/Aquamarine.jpeg",
            color: "Blue-green",
            hardness: "7.5-8",
            origin: "Brazil, Pakistan, Nigeria",
            description: "Aquamarine is a blue or cyan variety of beryl. The name comes from Latin for 'seawater', referring to its typical color. The most prized color is a deep blue with greenish tones.",
            properties: "Aquamarine's color comes from iron impurities. It can be heat-treated to reduce green tones and enhance blue color.",
            uses: "Jewelry, decorative carvings",
            birthstone: "March",
            category: "Semi-precious"
        }
    ];

    // Display gemstones
    const gemsContainer = document.querySelector('#gems .row');
    
    if (gemsContainer) {
        gemstones.forEach((gem, index) => {
            const gemClass = gem.name.toLowerCase();
            const gemCard = `
                <div class="col-md-6 col-lg-4 col-xl-3">
                    <div class="card mb-4 fade-in" style="animation-delay: ${index * 0.1}s">
                        <div class="card-img-top ${gemClass}" style="background-image: url('${gem.image}'); background-size: cover; background-position: center;"></div>
                        <div class="card-body">
                            <h5 class="card-title">${gem.name}</h5>
                            <span class="badge ${gem.category === 'Precious' ? 'bg-primary' : 'bg-secondary'} mb-2">${gem.category}</span>
                            <p class="card-text"><strong>Color:</strong> ${gem.color}</p>
                            <p class="card-text"><strong>Hardness:</strong> ${gem.hardness}/10</p>
                            <button class="btn btn-sm btn-outline-primary view-details" data-bs-toggle="modal" data-bs-target="#gemModal" data-gem='${JSON.stringify(gem).replace(/'/g, "\\'")}'>View Details</button>
                        </div>
                    </div>
                </div>
            `;
            gemsContainer.innerHTML += gemCard;
        });
    }

    // Modal for gem details
    const gemModal = document.getElementById('gemModal') ? new bootstrap.Modal(document.getElementById('gemModal')) : null;
    const modalTitle = document.querySelector('.modal-title');
    const modalBody = document.querySelector('.modal-body');
    
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('view-details')) {
            const gemData = JSON.parse(e.target.getAttribute('data-gem'));
            showGemDetails(gemData);
        }
    });

    function showGemDetails(gem) {
        if (!modalTitle || !modalBody) return;
        
        modalTitle.textContent = gem.name;
        
        modalBody.innerHTML = `
            <div class="row">
                <div class="col-md-6 mb-3">
                    <div class="${gem.name.toLowerCase()}" style="height: 300px; background-image: url('${gem.image}'); background-size: cover; background-position: center; border-radius: 10px;"></div>
                </div>
                <div class="col-md-6">
                    <p><strong>Color:</strong> ${gem.color}</p>
                    <p><strong>Hardness:</strong> ${gem.hardness}/10 (Mohs scale)</p>
                    <p><strong>Primary Sources:</strong> ${gem.origin}</p>
                    <p><strong>Category:</strong> <span class="badge ${gem.category === 'Precious' ? 'bg-primary' : 'bg-secondary'}">${gem.category}</span></p>
                    <p><strong>Birthstone:</strong> ${gem.birthstone}</p>
                    <hr>
                    <h5>Description</h5>
                    <p>${gem.description}</p>
                    <h5 class="mt-3">Properties</h5>
                    <p>${gem.properties}</p>
                    <h5 class="mt-3">Common Uses</h5>
                    <p>${gem.uses}</p>
                </div>
            </div>
        `;
        
        if (gemModal) {
            gemModal.show();
        }
    }

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            // For this example, we'll just show a success message
            alert(`Thank you, ${firstName} ${lastName}! Your message about "${subject}" has been received. We'll contact you at ${email} soon.`);
            
            // Reset form
            contactForm.reset();
        });
    }

    // Learn more button functionality
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            alert('Gemstones are mineral crystals that have been cut and polished for use in jewelry and decoration. They are valued for their beauty, rarity, and durability. The study of gemstones is called gemology, which examines their physical and optical properties, origins, and grading systems.');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});
