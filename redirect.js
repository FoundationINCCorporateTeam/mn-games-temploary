async function fetchConfigAndRedirect() {
    try {
        const response = await fetch('names.txt');
        const text = await response.text();
        const lines = text.split('\n');
        const config = {};

        lines.forEach(line => {
            const [page, status] = line.split('=');
            if (page && status) {
                config[page.trim()] = status.trim() === 'true';
            }
        });

        const currentPage = window.location.pathname.split('/').pop().split('.')[0];

        if (config[currentPage]) {
            window.location.href = '/untilnextyear';
        }
    } catch (error) {
        console.error('Error fetching or processing names.txt:', error);
    }
}

fetchConfigAndRedirect();
