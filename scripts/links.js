document.addEventListener('DOMContentLoaded', function () {
    const baseURL = "https://omoncada.github.io/wdd230/";
    const linksURL = `${baseURL}data/links.json`;

    async function getLinks() {
        try {
            const response = await fetch(linksURL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            displayLinks(data.weeks);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    function displayLinks(weeks) {
        const activitiesSection = document.querySelector('.left-card ul');
        activitiesSection.innerHTML = '';

        weeks.forEach(week => {
            const weekItem = document.createElement('li');
            weekItem.innerHTML = `${week.week}: `;

            week.links.forEach((link, index) => {

                const anchor = document.createElement('a');
                anchor.textContent = link.title;

                anchor.href = link.url.startsWith('http') ? link.url : `${baseURL}${link.url}`;

                if (link.url.startsWith('http')) {
                    anchor.target = '_blank';
                    anchor.rel = 'noopener noreferrer';
                }

                weekItem.appendChild(anchor);

                if (index < week.links.length - 1) {
                    weekItem.appendChild(document.createTextNode(' | '));
                }
            });

            activitiesSection.appendChild(weekItem);
        });
    }

    getLinks();
});
