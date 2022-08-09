const content = null || document.querySelector('#content');
const apiUrl = 'https://live-fitness-and-health-news.p.rapidapi.com/news/Harvard%20Health%20Publishing';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '56916a5d33msh21c6c410560509cp14ade4jsnb1de69c371ac',
        'X-RapidAPI-Host': 'live-fitness-and-health-news.p.rapidapi.com'
    }
};

async function fetchData(url) {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const noticias = await fetchData(apiUrl);
        let view = `
        ${noticias.map(item =>`
            <div class="card">
            <a href="${item.url}" target="_blank">
                <div class="w-full h-3/5 rounded-t-lg bg-news bg-cover px-4 py-2"></div>
                <div class="w-full h-2/5 bg-white rounded-b-lg dark:bg-gray-700">
                    <p class="font-bold text-2xl mb-2 px-4 py-2 dark:text-white">${item.title}</p>
                    <p class="text-md px-4 dark:text-white">${item.source}</p>
                </div>
                </a>
            </div>
        `
        )}
      `;
      content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();

//activar darkmode

const htmlElement = document.querySelector('html');
const btntoggle = document.querySelector('#toggle')

btntoggle.addEventListener('click', () => {
    htmlElement.classList.contains("dark") ?
    htmlElement.classList.remove("dark") :
    htmlElement.classList.add("dark")
})