// Initialize Supabase client
const { createClient } = supabase;
const supabaseUrl = 'https://tdsxayxnjomnoiestnmj.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkc3hheXhuam9tbm9pZXN0bm1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3NDg4NzUsImV4cCI6MjAyNzMyNDg3NX0._1GPeVJvMjrSyNX3x2mDSGACVIdFkmlD96rgDfOzSkY'; // Replace with your Supabase Anon Key
const supabase = createClient(supabaseUrl, supabaseKey);

// Function to open a secure browser and load the game URL
async function openSecureBrowser(url) {
    const userId = localStorage.getItem('userId');
    const settings = await getUserSettings(userId);
    
    // Create a new browser window
    const newWindow = window.open('about:blank', '_blank');
    newWindow.document.write(`
        <html>
            <head>
                <link rel="stylesheet" href="https://cdn.statically.io/gh/FoundationINCCorporateTeam/mn-games-temploary/main/gamepagestyles.css">
                <title>${settings.tab_title}</title>
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
                        position: absolute;
                        ${settings.panic_button_position}: 10px; /* Position from user settings */
                        z-index: 20; /* Ensure panic button is above everything */
                        cursor: pointer; /* Change cursor style for better UX */
                    }
                </style>
            </head>
            <body>
                <div class="iframe-container">
                    <iframe src="${url}"></iframe>
                    <a href="${settings.emergency_url}" class="panic">Panic Button</a>
                    <iframe id="emergencyIframe" style="display:none; width:100%; height:100%; border:none;" src="${settings.emergency_url}"></iframe>
                </div>

                <script>
                    // Insert a value into localStorage when the page is visited
                    localStorage.setItem('gameVisit', new Date().toISOString()); // Store current timestamp
                    
                    // Function to toggle the emergency iframe
                    function toggleEmergencyIframe() {
                        const emergencyIframe = document.getElementById('emergencyIframe');
                        if (emergencyIframe.style.display === 'none') {
                            emergencyIframe.style.display = 'block';
                        } else {
                            emergencyIframe.style.display = 'none';
                        }
                    }

                    // Listen for the emergency key combo
                    document.addEventListener('keydown', function(event) {
                        if (event.ctrlKey && event.key === '${settings.emergency_key.split('+')[1]}') {
                            toggleEmergencyIframe();
                        }
                    });
                </script>
            </body>
        </html>
    `);
    newWindow.document.close();
}

// Function to get user settings from Supabase
async function getUserSettings(userId) {
    const { data, error } = await supabase
        .from('user_settings')
        .select('*')
        .eq('user_id', userId)
        .single();
    
    if (error) {
        console.error("Error fetching user settings:", error);
        return {}; // Default settings if error occurs
    }
    return data || {}; // Return settings or an empty object if none found
}

// Function to generate a new user ID
async function initializeUser() {
    let userId = localStorage.getItem('userId');
    if (!userId) {
        // Generate a new user ID and store it in localStorage and Supabase
        userId = 'user-' + Date.now(); // Simple unique ID
        localStorage.setItem('userId', userId);
        
        // Insert a new record in Supabase
        const { error } = await supabase
            .from('user_settings')
            .insert([{ user_id: userId }]);
        
        if (error) {
            console.error("Error inserting user settings:", error);
        }
    }
}

// Initialize user and load settings on script start
initializeUser().then(() => {
    // Proceed with other game loading logic here
});

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
