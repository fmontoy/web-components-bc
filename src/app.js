import Service from './components/Service.js';
import Article from './components/Article.js';

let articles = [];
const articlesList = document.querySelector('.todos-list');
const filterContainer = document.querySelector('.filter-container');
let filterType = 'all';

window.addEventListener('load', async () => {
  articles = await Service.get();
  articles = articles.map((article,index) => {
    return {...article, id:index};
  });
  renderDOM(articles);
});

const renderDOM = (articles) => {
  const articleHtml = articles
    .map((article) => {
      return `<article-item 
                title="${article.title}" 
                url="${article.url}" 
                readed="${article.readed}"
                id="${article.id}">
              </article-item>`;
    })
    .join('');
  articlesList.innerHTML = articleHtml;
};

const updateArticles = ({detail: {id, checked}}) => {
  articles[id].readed = checked;
  filterArticles();
}

const filterArticles = () => {
  switch (filterType) {
    case 'all':
      renderDOM(articles);
      break;
    case 'pending':
      filterPending();
      break;
    case 'completed':
      filterCompleted();
      break;
    default:
      break;
  }
}

const filterPending = () => {
  const pending = articles.filter(article => !article.readed);
  renderDOM(pending);
}

const filterCompleted = () => {
  const completed = articles.filter(article => article.readed);
  renderDOM(completed);
}

filterContainer.addEventListener('change', ({target: {value}}) => {
  filterType = value;
  filterArticles(filterType);
})
articlesList.addEventListener('article-changed', updateArticles);

