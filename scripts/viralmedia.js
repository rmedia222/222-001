document.addEventListener('DOMContentLoaded', () => {
    const articles = [
        {
            img: "../../src/images/must-read/sub5.jpg",
            link: "../must-read/005.html",
            content: "[Often bitten🦟] People who love eating meat are easily bitten by mosquitoes❓"
        },
        {
            img: "../../src/images/must-read/sub6.jpg",
            link: "../must-read/006.html",
            content: "[What to do if you can’t find something on the MRT❓] A netizen taught you “How to retrieve lost property⚡” and you found it in about an hour!"
        },
        {
            img: "../../src/images/news/sub4.jpg",
            link: "../news/004.html",
            content: '【Deja vu? 】Malaysian woman "failed to pay the fare, was insulted by the driver, and was fired from the company after calling the police!"'
        },
        {
            img: "../../src/images/news/sub5.jpg",
            link: "../news/005.html",
            content: "【Beware of scams! 】Two \"tourists\" went around borrowing money from passers-by + a Chinese girl was targeted: They asked me to go to the ATM to press money!"
        },
        {
            img: "../../src/images/news/sub6.jpg",
            link: "../news/006.html",
            content: "[Floated in the river for more than 10 days] Fat Cat's \"salvage scene exposed\" sister posted the cremation certificate"
        },
        {
            img: "../../src/images/wongcholam1.JPG",
            link: "../technology/004.html",
            content: "This Game Has Wong Cho Lam Addicted – Here's Why!"
        },
        

    ];

    function getRandomArticles() {
        const shuffled = articles.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    }

    function renderArticles() {
        const articlesContainer = document.getElementById('articles');
        const randomArticles = getRandomArticles();
        
        articlesContainer.innerHTML = randomArticles.map(article => `
            <div class="bg-white p-4 rounded-lg shadow">
                <a href="${article.link}">
                    <img src="${article.img}" alt="Article image" class="w-full h-48 object-cover rounded-md mb-2">
                    <p class="text-blue-500 text-lg font-semibold">${article.content}</p>
                </a>
                <div class="text-sm text-gray-500 mt-2">By ViralMedia</div>
            </div>
        `).join('');
    }

    renderArticles();
});
