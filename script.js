// 1. Wait for the HTML document to fully load before running our script
document.addEventListener('DOMContentLoaded', function() {
    
    // 2. Find the login form in our HTML by its ID
    const loginForm = document.getElementById('loginForm');
    
    // 3. Find the error message paragraph so we can show/hide it
    const errorMessage = document.getElementById('errorMessage');

    // 4. Set up the expected credentials (you can change these!)
    // WARNING: Since this is a static site, these are visible in the code.
    const EXPECTED_USERID = 'admin';
    const EXPECTED_PASSWORD = 'password123';

    // 5. Listen for the moment the user clicks "Sign In" or presses Enter
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            // Prevent the default form behavior (which is to refresh the page)
            event.preventDefault();
            
            // Get the values the user typed into the input boxes
            const enteredUserId = document.getElementById('userid').value;
            const enteredPassword = document.getElementById('password').value;
            
            // 6. Check if what they typed matches our expected credentials
            if (enteredUserId === EXPECTED_USERID && enteredPassword === EXPECTED_PASSWORD) {
                // SUCCESS! 
                // Hide the error message just in case it was showing
                errorMessage.style.display = 'none';
                
                // Redirect the user to the portal page
                window.location.href = 'portal.html';
            } else {
                // FAILED!
                // Show the error message
                errorMessage.style.display = 'block';
                
                // Optional: clear the password field so they have to type it again
                document.getElementById('password').value = '';
            }
        });
    }
});
