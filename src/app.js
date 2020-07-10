import Service from './components/Service.js';
import Article from './components/Article.js';

let articles = [];
const articlesList = document.querySelector('.todos-list');

window.addEventListener('load', async () => {
  articles = await Service.get();
  renderDOM(articles);
});

const renderDOM = (articles) => {
  const articleHtml = articles
    .map((article, index) => {
      return `<article-item 
                title="${article.title}" 
                url="${article.url}" 
                readed="${article.readed}"
                id="${index}">
              </article-item>`;
    })
    .join('');
  articlesList.innerHTML = articleHtml;
};
