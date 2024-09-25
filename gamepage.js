// Supabase client initialization (replace with your Supabase URL and key)
const supabaseUrl = 'https://tdsxayxnjomnoiestnmj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkc3hheXhuam9tbm9pZXN0bm1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3NDg4NzUsImV4cCI6MjAyNzMyNDg3NX0._1GPeVJvMjrSyNX3x2mDSGACVIdFkmlD96rgDfOzSkY';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Function to load settings from localStorage or Supabase
async function loadSettings() {
    let settings = localStorage.getItem('gameSettings');

    if (!settings) {
        // Fetch settings from Supabase if not in localStorage
        const { data, error } = await supabase
            .from('settings')
            .select('*')
            .single();

        if (error) {
            console.error("Error loading settings from Supabase:", error);
            return null;
        }

        settings = data;
        // Save the settings to localStorage for future use
        localStorage.setItem('gameSettings', JSON.stringify(settings));
    } else {
        settings = JSON.parse(settings);
    }

    return settings;
}

// Function to open a secure browser and load the game URL with settings
async function openSecureBrowser(url) {
    const settings = await loadSettings();

    // Default panic button position and URL if not set
    const panicPosition = settings?.panicPosition || 'top-right';
    const panicUrl = settings?.panicUrl || 'https://osseo.schoology.com';
    const panicButtonStyle = getPanicButtonStyle(panicPosition);

    // Create a new window and insert two iframes
    var newWindow = window.open('about:blank', '_blank');
    newWindow.document.write(`
        <html>
            <head>
                <link rel="stylesheet" href="https://cdn.statically.io/gh/FoundationINCCorporateTeam/mn-games-temploary/main/gamepagestyles.css">
                <title>${settings?.tabTitle || 'MN Games Secure Browser'}</title>
                <style>
                    body {
                        margin: 0;
                        overflow: hidden;
                    }
                    .iframe-container {
                        position: relative;
                        width: 100%;
                        height: 100vh;
                    }
                    iframe {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        border: none;
                        z-index: 1; /* Game content below panic button */
                    }
                    .hidden-iframe {
                        display: none; /* Hide the second iframe initially */
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        border: none;
                        z-index: 100; /* Fullscreen iframe above everything */
                    }
                    a.panic {
                        background: linear-gradient(to right, #ff0000, #ff0000);
                        background-color: #ff0000;
                        color: #fff;
                        font-family: Trebuchet MS;
                        font-size: 18px;
                        font-weight: 800;
                        text-decoration: none;
                        padding: 14px 15px;
                        border-radius: 10px;
                        display: inline-block;
                        ${panicButtonStyle} /* Apply dynamic position style */
                        z-index: 20; /* Ensure panic button is above everything */
                        cursor: pointer; /* Change cursor style for better UX */
                    }
                </style>
            </head>
            <body>
                <div class="iframe-container">
                    <!-- First iframe that is always visible (the game iframe) -->
                    <iframe src="${url}" id="gameIframe"></iframe>
                    
                    <!-- Second iframe that is hidden until key press (fullscreen iframe) -->
                    <iframe src="${panicUrl}" id="fullscreenIframe" class="hidden-iframe"></iframe>
                    
                    <a href="${panicUrl}" class="panic">Panic Button</a>
                </div>

                <script>
                    // Insert a value into localStorage when the page is visited
                    localStorage.setItem('gameVisit', new Date().toISOString()); // Store current timestamp

                    // Function to toggle fullscreen iframe visibility
                    function toggleFullscreenIframe() {
                        const fullscreenIframe = document.getElementById('fullscreenIframe');
                        if (fullscreenIframe.style.display === 'none') {
                            fullscreenIframe.style.display = 'block';
                        } else {
                            fullscreenIframe.style.display = 'none';
                        }
                    }

                    // Listen for the keypress (e.g., "F" key for toggle)
                    document.addEventListener('keydown', function(event) {
                        if (event.key === 'F' || event.key === 'f') {
                            toggleFullscreenIframe();
                        }
                    });
                </script>
            </body>
        </html>
    `);
    newWindow.document.close();
}

// Function to get CSS styles based on the panic button's position
function getPanicButtonStyle(position) {
    switch (position.toLowerCase()) {
        case 'top-right':
            return 'top: 10px; right: 10px;';
        case 'top-left':
            return 'top: 10px; left: 10px;';
        case 'bottom-right':
            return 'bottom: 10px; right: 10px;';
        case 'bottom-left':
            return 'bottom: 10px; left: 10px;';
        default:
            return 'top: 10px; right: 10px;'; // Default to top-right if position is not recognized
    }
}

// Functions to load different game URLs
function openSecureBrowser1() {
    var urls1 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam%203kh0-assets%20fixy%201v1lol/index.html';
    openSecureBrowser(urls1);
}
function openSecureBrowser2() {
    var urls2 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam 3kh0-assets fixy slope-2/index.html';
    openSecureBrowser(urls2);
}
function openSecureBrowser3() {
    var urls3 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam 3kh0-assets fixy slope/index.html';
    openSecureBrowser(urls3);
}
function openSecureBrowser4() {
    var urls4 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam 3kh0-assets fixy stickman-hook/index.html';
    openSecureBrowser(urls4);
}
function openSecureBrowser5() {
    var urls5 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam 3kh0-assets fixy worlds-hardest-game-2/index.html';
    openSecureBrowser(urls5);
}
function openSecureBrowser6() {
    var urls6 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam 3kh0-assets fixy retro-bowl/index.html';
    openSecureBrowser(urls6);
}
function openSecureBrowser7() {
    var urls7 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam 3kh0-assets fixy n-gon/index.html';
    openSecureBrowser(urls7);
}
function openSecureBrowser8() {
    var urls8 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam 3kh0-assets fixy motox3m/index.html';
    openSecureBrowser(urls8);
}
function openSecureBrowser9() {
    var urls9 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam 3kh0-assets fixy death-run-3d/index.html';
    openSecureBrowser(urls9);
}
