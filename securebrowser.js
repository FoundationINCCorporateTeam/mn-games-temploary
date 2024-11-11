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
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-YMTTSH9XD3"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-YMTTSH9XD3');
            </script>
            <style>
                /* Styles for the overlay and other elements */
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
                    display: none;
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
                body, html {
                    height: 100%;
                    width: 100%;
                    position: relative;
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: Arial, sans-serif;
                    color: white;
                }
                .background {
                    background: url("data:image/jpeg;base64,...") no-repeat center center fixed;
                    background-size: cover;
                    height: 100%;
                    width: 100%;
                    display: flex;
                    align-items: flex-end;
                }
                .text {
                    width: 100%;
                    text-align: center;
                    padding: 3px;
                    font-size: 1.5em;
                    background: rgba(0, 0, 0, 0.5);
                }
                #timer {
                    position: absolute;
                    top: 15px;
                    right: 150px;
                    font-size: 2rem;
                    font-weight: bold;
                    color: #ffddc1;
                    padding: 5px;
                    background-color: rgba(0, 0, 0, 0.7);
                    border-radius: 5px;
                    z-index: 1000;
                }
            </style>
        </head>
        <body>
            <div id="timer">00:00</div>
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
                // Constants for access and cooldown durations
                const ACCESS_DURATION = 20 * 60 * 1000;
                const COOLDOWN_DURATION = 40 * 60 * 1000;
                const COOLDOWN_PAGE_URL = 'cooldown.html';
                const currentDate = new Date().toISOString().split("T")[0];

                let userAccessData = JSON.parse(localStorage.getItem("userAccessData")) || {
                    lastVisitDate: currentDate,
                    accessStartTime: Date.now(),
                    isInCooldown: false,
                    leaveTime: null // Store leave time
                };

                if (userAccessData.lastVisitDate !== currentDate) {
                    userAccessData = {
                        lastVisitDate: currentDate,
                        accessStartTime: Date.now(),
                        isInCooldown: false,
                        leaveTime: null
                    };
                    localStorage.setItem("userAccessData", JSON.stringify(userAccessData));
                }

                function formatTime(ms) {
                    const seconds = Math.floor(ms / 1000);
                    const minutes = Math.floor(seconds / 60);
                    const hours = Math.floor(minutes / 60);
                    return \`\${String(hours).padStart(2, '0')}:\${String(minutes % 60).padStart(2, '0')}:\${String(seconds % 60).padStart(2, '0')}\`;
                }

                function updateTimer() {
                    const currentTime = Date.now();
                    const elapsed = currentTime - userAccessData.accessStartTime;
                    let remainingTime = 0;
                    let timerMessage = '';

                    // Check if the user was in cooldown or session time
                    if (userAccessData.isInCooldown) {
                        remainingTime = COOLDOWN_DURATION - elapsed;
                        if (remainingTime <= 0) {
                            userAccessData.isInCooldown = false;
                            userAccessData.accessStartTime = Date.now();
                            localStorage.setItem("userAccessData", JSON.stringify(userAccessData));
                        } else {
                            timerMessage = \`Cooldown: \${formatTime(remainingTime)}\`;
                            document.getElementById('timer').innerText = timerMessage;
                            return;
                        }
                    } else {
                        remainingTime = ACCESS_DURATION - elapsed;
                        if (remainingTime <= 0) {
                            userAccessData.isInCooldown = true;
                            userAccessData.accessStartTime = Date.now();
                            localStorage.setItem("userAccessData", JSON.stringify(userAccessData));
                            window.location.href = COOLDOWN_PAGE_URL;
                        } else {
                            timerMessage = \`Time left in session: \${formatTime(remainingTime)}\`;
                            document.getElementById('timer').innerText = timerMessage;
                        }
                    }
                }

                function handleAccess() {
                    const currentTime = Date.now();
                    const elapsed = currentTime - userAccessData.accessStartTime;

                    if (userAccessData.isInCooldown) {
                        if (elapsed >= COOLDOWN_DURATION) {
                            userAccessData.isInCooldown = false;
                            userAccessData.accessStartTime = Date.now();
                            localStorage.setItem("userAccessData", JSON.stringify(userAccessData));
                        } else {
                            window.location.href = COOLDOWN_PAGE_URL;
                            return;
                        }
                    } else {
                        if (elapsed >= ACCESS_DURATION) {
                            userAccessData.isInCooldown = true;
                            userAccessData.accessStartTime = Date.now();
                            localStorage.setItem("userAccessData", JSON.stringify(userAccessData));
                            window.location.href = COOLDOWN_PAGE_URL;
                            return;
                        }
                    }
                }

                let isTabActive = true;
                document.addEventListener('visibilitychange', () => {
                    isTabActive = !document.hidden;
                });

                let intervalID;
                function startTimer() {
                    intervalID = setInterval(() => {
                        if (isTabActive) {
                            handleAccess();
                            updateTimer();
                        }
                    }, 1000);
                }

                startTimer();
                window.addEventListener('beforeunload', () => {
                    // Store the time the user leaves the page
                    userAccessData.leaveTime = Date.now();
                    localStorage.setItem("userAccessData", JSON.stringify(userAccessData));
                    clearInterval(intervalID);
                });

                // Resume the timer when the user returns
                if (userAccessData.leaveTime) {
                    const timeLeft = Date.now() - userAccessData.leaveTime;
                    userAccessData.accessStartTime += timeLeft;
                    userAccessData.leaveTime = null;
                    localStorage.setItem("userAccessData", JSON.stringify(userAccessData));
                }

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
                        let scare = false;
                        let overlay = document.getElementById('emailOverlay');
                        let overlayText = overlay.querySelector('.background .text');

                        if (data.exists) {
                            scare = true;
                        }
                        
                        if (scare) {
                            overlay.style.display = "flex";
                            overlayText.textContent = data.message || overlayText.textContent;
                        } else {
                            overlay.style.display = "none";
                        }
                    })
                    .catch(error => console.error('Error:', error));
                }

                setInterval(checkEmail, 1000);
            </script>
        </body>
    </html>
    `);
    newWindow.document.close();
}

// Functions to load different game URLs
function securebrowser1() {
    var urls1 = 'https://teched.sdao.me/?url=https://now.gg/apps/a/10020/b.html';
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
