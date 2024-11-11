function securebrowser(url) {
    const panicPosition = localStorage.getItem('panicPosition') || 'top-right';
    const panicURL = localStorage.getItem('panicURL') || 'https://osseo.schoology.com';
    let email = localStorage.getItem('userEmail');

    // Prompt for email if not already stored
    if (!email) {
        email = prompt("Please enter your email:");
        if (email) {
            localStorage.setItem('userEmail', email);
        } else {
            alert("Email is required to continue.");
            return;
        }
    }

    // Open a new window with about:blank and write HTML into it
    const newWindow = window.open('about:blank', '_blank');
    newWindow.document.write(`
        <html>
            <head>
                <link rel="stylesheet" href="https://cdn.statically.io/gh/FoundationINCCorporateTeam/mn-games-temploary/main/gamepagestyles.css">
                <title>MN Games Secure Browser</title>
                <!-- Google tag (gtag.js) -->
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-YMTTSH9XD3"></script>
                <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-YMTTSH9XD3');
                </script>
                <style>
                    /* Add styles for the overlay if email is found */
                    /* Overlay styling */
                    #emailOverlay {
                        display: none;
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0, 0, 0, 0.85);
                        color: white;
                        font-size: 24px;
                        justify-content: center;
                        align-items: center;
                        z-index: 100;
                    }

                    /* Notification styling */
                    .notification {
                        position: fixed;
                        bottom: 20px;
                        left: 50%;
                        transform: translateX(-50%);
                        padding: 10px 20px;
                        background-color: rgba(0, 0, 0, 0.8);
                        color: #fff;
                        border-radius: 5px;
                        font-size: 14px;
                        font-family: Arial, sans-serif;
                        display: none; /* Hidden by default */
                        z-index: 1000;
                    }
                    .notification.success {
                        background-color: green;
                    }
                    .notification.failure {
                        background-color: red;
                    }

                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }

                    /* Fullscreen background image styling */
                    body, html {
                        height: 100%;
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-family: Arial, sans-serif;
                        color: white;
                    }

                    /* Background image container */
                    .background {
                        background: url("data:image/jpeg;base64,...") no-repeat center center fixed;
                        background-size: cover;
                        height: 100%;
                        width: 100%;
                        display: flex;
                        align-items: flex-end;
                    }

                    /* Bottom text styling */
                    .text {
                        width: 100%;
                        text-align: center;
                        padding: 3px;
                        font-size: 1.5em;
                        background: rgba(0, 0, 0, 0.5); /* Optional: Adds a slight background behind text for readability */
                    }

                    /* Timer in upper right corner */
                    #timer {
                        position: absolute;
                        top: 10px;
                        right: 150px;
                        font-size: 2rem;
                        font-weight: bold;
                        color: #ffddc1;
                        padding: 10px;
                        background-color: rgba(0, 0, 0, 0.7);
                        border-radius: 5px;
                    }
                </style>
            </head>
            <body>
                <div id="timer">00:00</div> <!-- Timer element in upper-right corner -->
                <div class="iframe-container">
                    <iframe src="${url}" allowfullscreen></iframe>
                    <a href="${panicURL}" class="panic ${panicPosition}">Panic Button</a>
                </div>

                <div id="emailOverlay" class="overlay">
                    <div class="background">
                        <div class="text">In Wigelts class really?</div>
                    </div>
                </div>

                <form id="emailCheckForm" style="display: none;">
                    <input type="hidden" name="email" value="${email}">
                </form>

                <script>
                    // Constants for the access and cooldown durations (in milliseconds)
                    const ACCESS_DURATION = 20 * 60 * 1000;  // 20 minutes
                    const COOLDOWN_DURATION = 40 * 60 * 1000; // 40 minutes
                    const COOLDOWN_PAGE_URL = 'cooldown.html';
                    const currentDate = new Date().toISOString().split("T")[0];

                    // Retrieve user access data from localStorage, or initialize default data
                    let userAccessData = JSON.parse(localStorage.getItem("userAccessData")) || {
                        lastVisitDate: currentDate,
                        accessStartTime: Date.now(),
                        isInCooldown: false
                    };

                    // Reset data if it's a new day
                    if (userAccessData.lastVisitDate !== currentDate) {
                        userAccessData = {
                            lastVisitDate: currentDate,
                            accessStartTime: Date.now(),
                            isInCooldown: false
                        };
                        localStorage.setItem("userAccessData", JSON.stringify(userAccessData));
                    }

                    // Function to format the remaining time in HH:MM:SS format
                    function formatTime(ms) {
                        const seconds = Math.floor(ms / 1000);
                        const minutes = Math.floor(seconds / 60);
                        const hours = Math.floor(minutes / 60);
                        return \`\${String(hours).padStart(2, '0')}:\${String(minutes % 60).padStart(2, '0')}:\${String(seconds % 60).padStart(2, '0')}\`;
                    }

                    // Function to update the displayed timer based on cooldown or access state
                    function updateTimer() {
                        const currentTime = Date.now();
                        const elapsed = currentTime - userAccessData.accessStartTime;
                        let remainingTime = 0;
                        let timerMessage = '';

                        if (userAccessData.isInCooldown) {
                            // In cooldown period, calculate remaining cooldown time
                            remainingTime = COOLDOWN_DURATION - elapsed;
                            if (remainingTime <= 0) {
                                // Cooldown finished, start new access
                                userAccessData.isInCooldown = false;
                                userAccessData.accessStartTime = Date.now();
                                localStorage.setItem("userAccessData", JSON.stringify(userAccessData));
                            } else {
                                timerMessage = \`Cooldown: \${formatTime(remainingTime)}\`;
                                document.getElementById('timer').innerText = timerMessage;
                                return; // Don't update anything else while in cooldown
                            }
                        } else {
                            // In access period, calculate remaining access time
                            remainingTime = ACCESS_DURATION - elapsed;
                            if (remainingTime <= 0) {
                                // Access time finished, go into cooldown
                                userAccessData.isInCooldown = true;
                                userAccessData.accessStartTime = Date.now();
                                localStorage.setItem("userAccessData", JSON.stringify(userAccessData));
                                // Redirect to cooldown page
                                window.location.href = COOLDOWN_PAGE_URL;
                            } else {
                                timerMessage = \`Time left in session: \${formatTime(remainingTime)}\`;
                                document.getElementById('timer').innerText = timerMessage;
                            }
                        }
                    }

                    // Function to handle the access logic based on cooldown or access period
                    function handleAccess() {
                        const currentTime = Date.now();
                        const elapsed = currentTime - userAccessData.accessStartTime;

                        if (userAccessData.isInCooldown) {
                            // If still in cooldown, check if the cooldown period is over
                            if (elapsed >= COOLDOWN_DURATION) {
                                userAccessData.isInCooldown = false;
                                userAccessData.accessStartTime = Date.now();
                                localStorage.setItem("userAccessData", JSON.stringify(userAccessData));
                            } else {
                                // Still in cooldown, redirect to the cooldown page
                                window.location.href = COOLDOWN_PAGE_URL;
                                return;
                            }
                        } else {
                            // If in access period, check if the access period is over
                            if (elapsed >= ACCESS_DURATION) {
                                userAccessData.isInCooldown = true;
                                userAccessData.accessStartTime = Date.now();
                                localStorage.setItem("userAccessData", JSON.stringify(userAccessData));
                                // Redirect to cooldown page after access period ends
                                window.location.href = COOLDOWN_PAGE_URL;
                                return;
                            }
                        }
                    }

                    // Initialize and continuously update the access state and timer every second
                    setInterval(() => {
                        handleAccess();  // Handle access/cooldown logic
                        updateTimer();   // Update the displayed countdown timer
                    }, 1000);
      // Retrieve the email from localStorage
        const email = localStorage.getItem('userEmail');
        if (!email) {
            alert("Email is required to continue.");
        }
        // The iframe should request the parent for the pathname once it's loaded
function requestParentPathname() {
  window.parent.postMessage("getPathname", "https://zealous-meadow-04d0ae41e.5.azurestaticapps.net");
}
        // Function to check email every second
        function checkEmail() {
            fetch('https://publicmowing.site.blueastroid.com/check-email.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'email=' + encodeURIComponent(email)
            })
            .then(response => response.json())
            .then(data => {
// Get the notification element or create it if it doesn't exist
let scare = false;  // Define scare outside the block for global access
let overlay = document.getElementById('emailOverlay');
let overlayText = overlay.querySelector('.background .text'); // Target the text element inside the overlay

// Check if the email is found and display the corresponding message
if (data.exists) {
    scare = true;  // Set scare to true here
} else {
}
// Show or hide the overlay based on the scare variable and update the message if provided
if (scare) {
    overlay.style.display = "flex";
    // If data has a message, use it; otherwise, keep the existing message
    overlayText.textContent = data.message || overlayText.textContent;
} else {
    overlay.style.display = "none";
}
    // Show the notification and hide it after 3 seconds
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
})
.catch(error => console.error('Error:', error));
}
        // Run the checkEmail function every 1 second
        setInterval(checkEmail, 1000);
    </script>
            </body>
        </html>
    `);
    newWindow.document.close();
}

// Functions to load different game URLs
function securebrowser1() {
    var urls1 = 'https://schoolclass.sdao.me/?url=https://now.gg/apps/a/10020/b.html';
    securebrowser(urls1);
}

// Function to apply settings from the popup
function applySettings() {
    const panicPosition = document.getElementById('panicPosition').value;
    const panicURL = document.getElementById('panicURL').value;
    localStorage.setItem('panicPosition', panicPosition);
    localStorage.setItem('panicURL', panicURL);
    toggleSettings(); // Close the settings popup
}
