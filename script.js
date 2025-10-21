// =====================================
// ZAIN BAGS - INTERACTIVE FEATURES
// Smooth Animations & User Experience
// =====================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== BAG DETAILS DATA =====
    const bagDetails = {
        'Velvet Charm Tote': {
            description: 'A luxurious velvet tote that combines sophistication with everyday functionality. Handcrafted with premium materials and attention to detail, this bag elevates any outfit.',
            usages: ['Party', 'Evening Events', 'Dinner Dates', 'Special Occasions']
        },
        'Aurora Clutch': {
            description: 'An elegant evening clutch that captures the magic of twilight. Perfect for those moments when you want to make a statement with minimal yet stunning accessories.',
            usages: ['Weddings', 'Formal Events', 'Cocktail Parties', 'Gala Nights']
        },
        'Moonlight Satchel': {
            description: 'A versatile satchel designed for the modern woman on the go. Features multiple compartments and a timeless design that transitions seamlessly from day to night.',
            usages: ['Daily Use', 'Office', 'Shopping', 'Travel']
        },
        'Urban Diva Sling': {
            description: 'Compact and chic, this sling bag is perfect for the urban lifestyle. Hands-free convenience meets contemporary style in this must-have accessory.',
            usages: ['Casual Outings', 'Weekend Trips', 'Shopping', 'Brunch Dates']
        },
        'Rose Garden Handbag': {
            description: 'Inspired by blooming elegance, this handbag features delicate details and a romantic aesthetic. A perfect companion for graceful occasions.',
            usages: ['Tea Parties', 'Garden Events', 'Daytime Gatherings', 'Casual Elegance']
        },
        'Luxe Noir Shoulder Bag': {
            description: 'Classic black sophistication in a timeless silhouette. This shoulder bag is the epitome of versatile luxury, complementing any wardrobe effortlessly.',
            usages: ['Professional Meetings', 'Evening Out', 'Formal Occasions', 'Versatile Daily Use']
        },
        'Pearl Essence Crossbody': {
            description: 'Delicate yet practical, this crossbody bag features pearl-inspired accents that add a touch of refinement to casual and semi-formal looks alike.',
            usages: ['Date Nights', 'Casual Parties', 'Shopping', 'Day Trips']
        },
        'Champagne Dreams Tote': {
            description: 'Celebrate life\'s beautiful moments with this spacious tote. Its champagne-inspired hue and luxurious finish make it perfect for festive occasions.',
            usages: ['Celebrations', 'Parties', 'Weekend Getaways', 'Special Events']
        },
        'Serenity Mini Bag': {
            description: 'Perfectly petite and timelessly chic, this mini bag carries your essentials with understated elegance. Ideal for minimalists who appreciate refined design.',
            usages: ['Cocktails', 'Museum Visits', 'Afternoon Tea', 'Minimalist Outings']
        },
        'Gilded Grace Handbag': {
            description: 'Golden hour captured in a handbag. The gilded accents and graceful structure make this piece a true showstopper for any luxurious occasion.',
            usages: ['Weddings', 'Galas', 'Red Carpet Events', 'Premium Occasions']
        },
        'Crimson Couture Satchel': {
            description: 'Bold, beautiful, and unforgettable. This crimson satchel makes a powerful statement while maintaining practical functionality for daily adventures.',
            usages: ['Bold Fashion Statements', 'Creative Events', 'Confident Daily Wear', 'Art Galleries']
        },
        'Ivory Dream Clutch': {
            description: 'Pure sophistication embodied in ivory elegance. This clutch is the perfect accessory for brides, bridesmaids, and anyone seeking timeless grace.',
            usages: ['Weddings', 'White Events', 'Formal Ceremonies', 'Elegant Soirées']
        },
        'Sapphire Sky Shoulder Bag': {
            description: 'Where elegance meets adventure. This shoulder bag in sapphire tones is designed for women who embrace both sophistication and spontaneity.',
            usages: ['Travel', 'Adventure Outings', 'Casual Events', 'Day-to-Night Wear']
        },
        'Midnight Mystique Tote': {
            description: 'Artisan design meets modern sensibility in this mysterious midnight tote. Crafted for contemporary women who appreciate unique, handmade quality.',
            usages: ['Professional Use', 'Evening Events', 'Business Casual', 'Sophisticated Daily Wear']
        },
        'Blossom Belle Crossbody': {
            description: 'Graceful, feminine, and timeless. This crossbody bag features floral-inspired elegance perfect for spring days and romantic occasions.',
            usages: ['Spring Events', 'Garden Parties', 'Romantic Dates', 'Daytime Elegance']
        }
    };
    
    // ===== MODAL FUNCTIONALITY =====
    const modal = document.getElementById('bagModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalTagline = document.getElementById('modalTagline');
    const modalDescription = document.getElementById('modalDescription');
    const modalUsageTags = document.getElementById('modalUsageTags');
    const closeModal = document.getElementById('closeModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const contactOrderBtn = document.getElementById('contactOrderBtn');
    
    // Store current bag name for order
    let currentBagName = '';
    
    // Function to open modal
    function openBagModal(bagName, bagTagline, bagImage) {
        currentBagName = bagName;
        const details = bagDetails[bagName] || {
            description: 'A beautiful handcrafted bag that exemplifies our commitment to quality and style.',
            usages: ['Daily Use', 'Special Events', 'Fashion Forward']
        };
        
        modalTitle.textContent = bagName;
        modalTagline.textContent = bagTagline;
        modalImage.src = bagImage;
        modalImage.alt = bagName;
        modalDescription.textContent = details.description;
        
        // Clear and populate usage tags
        modalUsageTags.innerHTML = '';
        details.usages.forEach(usage => {
            const tag = document.createElement('span');
            tag.className = 'usage-tag';
            tag.textContent = usage;
            modalUsageTags.appendChild(tag);
        });
        
        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        
        // Force scroll to top of modal overlay
        setTimeout(() => {
            modal.scrollTop = 0;
            window.scrollTo(0, 0);
        }, 10);
    }
    
    // Function to close modal
    function closeBagModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
    }
    
    // WhatsApp order functionality
    contactOrderBtn.addEventListener('click', function() {
        // Your WhatsApp number (replace with actual number in international format without + or spaces)
        const phoneNumber = '917024647676'; // No + sign, no spaces - just digits
        
        // Create order message
        const message = `Hello! I'm interested in ordering the *${currentBagName}*.\n\nCould you please provide more details about availability and pricing?\n\nThank you! 😊`;
        
        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);
        
        // Create WhatsApp URL
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappURL, '_blank');
        
        // Optionally close modal after opening WhatsApp
        setTimeout(() => {
            closeBagModal();
        }, 500);
    });
    
    // Add click event to all bag cards
    const bagCards = document.querySelectorAll('.bag-card');
    bagCards.forEach(card => {
        card.addEventListener('click', function(e) {
            const bagName = this.querySelector('.bag-name').textContent;
            const bagTagline = this.querySelector('.bag-tagline').textContent;
            const bagImage = this.querySelector('.bag-image').src;
            
            openBagModal(bagName, bagTagline, bagImage);
        });
        
        // Add pointer cursor
        card.style.cursor = 'pointer';
    });
    
    // Close modal events
    closeModal.addEventListener('click', closeBagModal);
    closeModalBtn.addEventListener('click', closeBagModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeBagModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeBagModal();
        }
    });
    

    // ===== NOTIFICATION BANNER =====
    const notificationBanner = document.getElementById('notificationBanner');
    const closeBanner = document.getElementById('closeBanner');
    
    // Check if banner was previously closed
    const bannerClosed = sessionStorage.getItem('bannerClosed');
    
    if (bannerClosed) {
        notificationBanner.style.display = 'none';
    }
    
    // Close banner functionality
    closeBanner.addEventListener('click', function() {
        notificationBanner.classList.add('hidden');
        sessionStorage.setItem('bannerClosed', 'true');
        
        setTimeout(() => {
            notificationBanner.style.display = 'none';
        }, 400);
    });
    
    
    // ===== SCROLL ANIMATIONS =====
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const animateOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);
    
    // Observe all bag cards for animation
    document.querySelectorAll('.bag-card').forEach(card => {
        animateOnScroll.observe(card);
    });
    
    
    // ===== SMOOTH SCROLL TO COLLECTION =====
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const collectionSection = document.getElementById('collection');
    
    if (scrollIndicator && collectionSection) {
        scrollIndicator.addEventListener('click', function() {
            const bannerHeight = notificationBanner.style.display !== 'none' ? 
                                 notificationBanner.offsetHeight : 0;
            
            const targetPosition = collectionSection.offsetTop - bannerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    }
    
    
    // ===== BAG CARD INTERACTIONS =====
    // Ripple effect is now integrated with modal opening
    // Add ripple animation CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(30);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    
    // ===== PARALLAX EFFECT ON SCROLL =====
    let lastScrollPosition = 0;
    let ticking = false;
    const hero = document.querySelector('.hero');
    
    function updateParallax(scrollPosition) {
        // Parallax effect for hero section
        if (hero && scrollPosition < hero.offsetHeight) {
            const parallaxSpeed = 0.5;
            hero.style.transform = `translateY(${scrollPosition * parallaxSpeed}px)`;
            
            // Fade out hero content as user scrolls
            const heroContent = document.querySelector('.hero-content');
            const opacity = 1 - (scrollPosition / hero.offsetHeight);
            heroContent.style.opacity = Math.max(0, opacity);
        }
        
        ticking = false;
    }
    
    function requestParallaxUpdate() {
        const scrollPosition = window.pageYOffset;
        
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateParallax(scrollPosition);
            });
            ticking = true;
        }
        
        lastScrollPosition = scrollPosition;
    }
    
    // Use passive event listener for better scroll performance
    window.addEventListener('scroll', requestParallaxUpdate, { passive: true });
    
    
    // ===== CONTACT CARDS STAGGER ANIMATION =====
    const contactCards = document.querySelectorAll('.contact-card');
    
    const contactObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, observerOptions);
    
    contactCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        contactObserver.observe(card);
    });
    
    
    // ===== ABOUT SECTION FADE-IN =====
    const aboutContent = document.querySelector('.about-content');
    
    if (aboutContent) {
        const aboutObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        aboutContent.style.opacity = '0';
        aboutContent.style.transform = 'translateY(30px)';
        aboutContent.style.transition = 'all 0.8s ease-out';
        aboutObserver.observe(aboutContent);
    }
    
    
    // ===== IMAGE LAZY LOADING ENHANCEMENT =====
    // Add shimmer effect while images are loading with Intersection Observer
    const bagImages = document.querySelectorAll('.bag-image');
    
    // Create an Intersection Observer for lazy loading
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const wrapper = img.parentElement;
                wrapper.classList.add('loading');
                
                // Load the image
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
                
                img.addEventListener('load', function() {
                    wrapper.classList.remove('loading');
                    img.style.opacity = '0';
                    setTimeout(() => {
                        img.style.transition = 'opacity 0.4s ease-in';
                        img.style.opacity = '1';
                    }, 50);
                });
                
                // Handle image error with better mobile support
                img.addEventListener('error', function() {
                    wrapper.classList.remove('loading');
                    wrapper.style.background = 'linear-gradient(135deg, #F5E6D3, #E8DCC4)';
                    
                    // Try to reload the image once after a short delay
                    const originalSrc = this.src;
                    setTimeout(() => {
                        if (this.src === originalSrc) {
                            // Still failed, show placeholder
                            const placeholder = document.createElement('div');
                            placeholder.style.position = 'absolute';
                            placeholder.style.top = '50%';
                            placeholder.style.left = '50%';
                            placeholder.style.transform = 'translate(-50%, -50%)';
                            placeholder.style.textAlign = 'center';
                            placeholder.style.color = '#B76E79';
                            placeholder.style.fontFamily = 'Playfair Display, serif';
                            placeholder.style.fontSize = '1.2rem';
                            placeholder.style.fontStyle = 'italic';
                            placeholder.style.zIndex = '10';
                            placeholder.innerHTML = '✨<br>Image<br>Loading...';
                            
                            wrapper.appendChild(placeholder);
                            this.style.display = 'none';
                        }
                    }, 1000);
                });
                
                // Force image load for mobile
                if (img.complete && img.naturalHeight === 0) {
                    img.src = img.src + '?t=' + new Date().getTime();
                }
                
                // Stop observing this image
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '100px', // Start loading 100px before image enters viewport for mobile
        threshold: 0.01
    });
    
    bagImages.forEach(img => {
        // Add cache busting for problematic formats on mobile
        const src = img.src || img.getAttribute('src');
        if (src && (src.includes('.avif') || src.includes('.webp'))) {
            // Force reload for AVIF and WEBP on mobile devices
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                img.setAttribute('data-original-src', src);
                // Add slight delay to prevent all images loading at once
                setTimeout(() => {
                    img.src = src + '?mobile=1';
                }, 100);
            }
        }
        imageObserver.observe(img);
    });
    
    // Add shimmer animation for loading state
    const shimmerStyle = document.createElement('style');
    shimmerStyle.textContent = `
        .bag-image-wrapper.loading::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, 
                transparent, 
                rgba(255, 255, 255, 0.3), 
                transparent
            );
            animation: shimmer 1.5s infinite;
            z-index: 1;
        }
        
        @keyframes shimmer {
            to {
                left: 100%;
            }
        }
    `;
    document.head.appendChild(shimmerStyle);
    
    
    // ===== PERFORMANCE OPTIMIZATION =====
    // Throttle scroll events for better performance
    function throttle(func, wait) {
        let timeout;
        let previous = 0;
        
        return function executedFunction(...args) {
            const now = Date.now();
            const remaining = wait - (now - previous);
            
            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                previous = now;
                func(...args);
            } else if (!timeout) {
                timeout = setTimeout(() => {
                    previous = Date.now();
                    timeout = null;
                    func(...args);
                }, remaining);
            }
        };
    }
    
    // Apply throttle to scroll handler for section tracking
    const throttledScroll = throttle(function() {
        // Additional scroll handlers can be added here
    }, 100);
    
    window.addEventListener('scroll', debouncedScroll);
    
    
    // ===== SECTION VISIBILITY TRACKING =====
    // Track which section is currently in view
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                // Could be used for analytics or navigation highlighting
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px'
    });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    
    // ===== CONTACT INFORMATION INTERACTIONS =====
    const contactDetails = document.querySelectorAll('.contact-detail');
    
    contactDetails.forEach(detail => {
        // Add copy-to-clipboard functionality for email and phone
        if (detail.textContent.includes('@') || detail.textContent.includes('+')) {
            detail.style.cursor = 'pointer';
            detail.title = 'Click to copy';
            
            detail.addEventListener('click', function() {
                const text = this.textContent.trim();
                
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(text).then(() => {
                        // Show feedback
                        const originalText = this.textContent;
                        this.textContent = '✓ Copied!';
                        this.style.color = '#D4AF6A';
                        
                        setTimeout(() => {
                            this.textContent = originalText;
                            this.style.color = '';
                        }, 1500);
                    });
                }
            });
        }
    });
    
    
    // ===== WELCOME ANIMATION =====
    // Add a subtle welcome animation on first load
    const isFirstVisit = !sessionStorage.getItem('visited');
    
    if (isFirstVisit) {
        sessionStorage.setItem('visited', 'true');
        document.body.style.opacity = '0';
        
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.8s ease-in';
            document.body.style.opacity = '1';
        }, 100);
    }
    
    
    // ===== CONSOLE BRANDING =====
    // Add a branded message in console
    console.log('%c✨ Zain Bags - Elegance You Carry ✨', 
                'font-size: 20px; font-weight: bold; color: #D4AF6A; font-family: Playfair Display, serif;');
    console.log('%cHandcrafted with love | Premium Boutique Collection', 
                'font-size: 12px; color: #B76E79; font-style: italic;');
    
});


// ===== VIEWPORT HEIGHT FIX FOR MOBILE =====
// Fix for mobile browsers that change viewport height on scroll
function setVHProperty() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVHProperty();
window.addEventListener('resize', setVHProperty);
window.addEventListener('orientationchange', setVHProperty);


// ===== PREVENT IMAGE DRAG =====
// Prevent accidental image dragging on mobile
document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});


// ===== TOUCH GESTURE HANDLING =====
// Enhance touch interactions
let touchStartY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchmove', function(e) {
    // Custom touch handling can be added here if needed
}, { passive: true });
