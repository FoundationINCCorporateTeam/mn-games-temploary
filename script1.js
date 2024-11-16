// Initialize Supabase client
const supabaseUrl = 'https://dvsoyesscauzsirtjthh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2c295ZXNzY2F1enNpcnRqdGhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzNTU4NDQsImV4cCI6MjAyOTkzMTg0NH0.3HoGdobfXm7-SJtRSVF7R9kraDNHBFsiEaJunMjwpHk';
const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);
// Array of page names
const pages = [
  "ad1.html", "ads.txt", "authtest1.html", "backupsign-in.html", "backupsign-up.html",
  "change-password.html", "changepassword.html", "config.js", "customer-referral.html",
  "dailyrewardsbackend.js", "dashboard.html", "dashtest1.html", "datecheck.html",
  "dialyrewardtest.html", "elite.html", "enterprise.html", "enterpriseprox.html",
  "events.html", "firebase.json", "forgot-password.html", "forgotpassword.html", "home.html",
  "index.html", "infoform.html", "istockphoto-176230653-612x612.jpg", "jobs.html",
  "learnhtml1.html", "login.html", "logout.html", "main.js", "maintenance.js", "mnai.html",
  "mnairedirect.html", "mncreditcheck.html", "mngamescontactform.html", "mngamescore.html",
  "mnlearn.html", "mnpluslogo.png", "names.txt", "onboarding.html", "ourteam.html",
  "premium.html", "process_form.php", "profile.html", "protectedtest.html", "redirect.js",
  "referral.html", "referralcheck.html", "report-a-prompt.html", "schoology-icon.jpg",
  "schoology-logo.png", "schoology.jpg", "script.js", "seleniteauthtest.html",
  "seleniteauthtest2.html", "sign-in.html", "sign-up.html", "statuschecks.html", "store.html",
  "sw.js", "terms-of-service.html", "test111.html", "test123.html", "tournamentrules.html",
  "tournaments.html", "ultimate.html", "unauthorized1.html", "untilnextyear.html"
];

// Function to populate dropdown with page names
function populatePageSelect() {
  const pageSelect = document.getElementById('page-select');

  pages.forEach(page => {
    const option = document.createElement('option');
    option.value = page;
    option.textContent = page;
    pageSelect.appendChild(option);
  });
}

// Function to fetch and display disabled pages
async function fetchDisabledPages() {
  const { data: disabledPages, error } = await supabaseClient
    .from('disabled_pages')
    .select('page_name');

  if (error) {
    console.error('Error fetching disabled pages:', error.message);
    return;
  }

  const list = document.getElementById('disabled-pages-list');
  list.innerHTML = ''; // Clear previous list items

  disabledPages.forEach(page => {
    const listItem = document.createElement('li');
    listItem.textContent = page.page_name;

    // Add delete button to re-enable page
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', async () => {
      await supabaseClient
        .from('disabled_pages')
        .delete()
        .eq('page_name', page.page_name);
      
      fetchDisabledPages(); // Refresh disabled pages list after deletion
    });

    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
  });
}

// Function to handle form submission
document.getElementById('add-page-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const pageSelect = document.getElementById('page-select');
  const pageName = pageSelect.value.trim();

  if (!pageName) {
    alert('Please select a page.');
    return;
  }

  // Check if page already exists in disabled_pages
  const { data: existingPage } = await supabaseClient
    .from('disabled_pages')
    .select('id')
    .eq('page_name', pageName)
    .single();

  if (existingPage) {
    alert('Page is already disabled.');
    return;
  }

  // Insert new disabled page into disabled_pages table
  const { data, error } = await supabaseClient
    .from('disabled_pages')
    .insert({ page_name: pageName });

  if (error) {
    console.error('Error inserting page:', error.message);
    return;
  }

  // Clear and refresh disabled pages list
  pageSelect.value = ''; // Reset dropdown
  fetchDisabledPages(); // Refresh disabled pages list
});

// Function to redirect if current page is disabled
async function checkPageAccess() {
  const currentPage = window.location.pathname.split('/').pop();
  const { data: disabledPage } = await supabaseClient
    .from('disabled_pages')
    .select('page_name')
    .eq('page_name', currentPage)
    .single();

  if (disabledPage) {
    window.location.href = '/redirect.html'; // Redirect to redirect.html
  }
}

// Run checkPageAccess() on page load
checkPageAccess();

// Populate page select dropdown on page load
populatePageSelect();
