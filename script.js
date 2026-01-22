// Background music auto-play and loop
document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    
    // Try to play audio automatically
    const playMusic = () => {
        if (backgroundMusic) {
            backgroundMusic.play().catch(error => {
                // Autoplay was prevented, try again after user interaction
                console.log('Autoplay prevented, waiting for user interaction');
                
                // Try to play on first user interaction
                const tryPlayOnInteraction = () => {
                    backgroundMusic.play().catch(err => {
                        console.log('Play failed:', err);
                    });
                    // Remove all event listeners after successful play attempt
                    document.removeEventListener('click', tryPlayOnInteraction);
                    document.removeEventListener('touchstart', tryPlayOnInteraction);
                    window.removeEventListener('scroll', tryPlayOnInteraction);
                    window.removeEventListener('wheel', tryPlayOnInteraction);
                    window.removeEventListener('touchmove', tryPlayOnInteraction);
                };
                
                // Listen to various user interactions
                document.addEventListener('click', tryPlayOnInteraction);
                document.addEventListener('touchstart', tryPlayOnInteraction);
                window.addEventListener('scroll', tryPlayOnInteraction);
                window.addEventListener('wheel', tryPlayOnInteraction);
                window.addEventListener('touchmove', tryPlayOnInteraction);
            });
        }
    };
    
    // Ensure music loops continuously
    if (backgroundMusic) {
        backgroundMusic.loop = true;
        backgroundMusic.volume = 1.0;
        
        // Restart if it ends (double safety for loop)
        backgroundMusic.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        });
    }
    
    // Attempt to play when page loads
    playMusic();
    
    // Also try when page is fully loaded
    window.addEventListener('load', playMusic);
});

// Page fade transition
document.addEventListener('DOMContentLoaded', function() {
    const creditLink = document.getElementById('credit-link');
    const galleryLink = document.getElementById('gallery-link');
    
    // Fade transition for credit link
    if (creditLink) {
        creditLink.addEventListener('click', function(e) {
            e.preventDefault();
            const targetUrl = this.getAttribute('href');
            
            // Fade out
            document.body.classList.add('fade-out');
            
            // Navigate after fade
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 400);
        });
    }
    
    // Fade transition for gallery link
    if (galleryLink) {
        galleryLink.addEventListener('click', function(e) {
            e.preventDefault();
            const targetUrl = this.getAttribute('href');
            
            // Fade out
            document.body.classList.add('fade-out');
            
            // Navigate after fade
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 400);
        });
    }
    
    // Fade in on page load
    document.body.classList.add('fade-in');
});

