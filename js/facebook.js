    // JavaScript to toggle visibility based on screen size

    function isMobileDevice() {
        // Check if the device is touch-enabled and has a small screen
        return (
            ("ontouchstart" in window || navigator.maxTouchPoints > 0) &&
            window.matchMedia("(max-width: 1024px)").matches
        );
    }


    function toggleFacebookFeed() {
        const isMobile = isMobileDevice();
        document.getElementById("desktop-facebook").style.display = isMobile ? "none" : "block";
        document.getElementById("mobile-facebook").style.display = isMobile ? "block" : "none";
    }

    // Run on page load and window resize
    window.addEventListener("load", toggleFacebookFeed);
    window.addEventListener("resize", toggleFacebookFeed);