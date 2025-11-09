
        // Wait for the document to be fully loaded
        document.addEventListener('DOMContentLoaded', function() {
            
            // 1. Get all the navigation buttons
            const navButtons = document.querySelectorAll('.nav-button');
            
            // 2. Get all the page sections
            const pages = document.querySelectorAll('.page');

            // 3. Add a click event listener to *each* button
            navButtons.forEach(function(button) {
                button.addEventListener('click', function() {
                    
                    // Get the 'data-target' value (e.g., "bio" or "resume")
                    const targetId = button.getAttribute('data-target');
                    
                    // --- Remove 'active' from all buttons and pages ---
                    navButtons.forEach(function(btn) {
                        btn.classList.remove('active');
                    });
                    pages.forEach(function(page) {
                        page.classList.remove('active');
                    });

                    // --- Add 'active' to the clicked button and the target page ---
                    
                    // Add to the button you just clicked
                    button.classList.add('active');
                    
                    // Show the matching page (e.g., id="bio" or id="resume")
                    document.getElementById(targetId).classList.add('active');
                });
            });
        });