class Article extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render = () => {
    this.readed = this.attributes.readed.value == 'true';
    this.id = this.attributes.id.value;
    this.shadowRoot.innerHTML = `
    <style>
      a {
        color: black;
        text-decoration: none;
      }

      .todos-li {
        border: 2px dashed white;
        height: 200px;
        list-style-type: none;
        padding: 15px;
        width: 250px;
        position: relative;
        background-image: repeating-linear-gradient(-24deg, transparent, transparent 4px, white 0, white 5px);
        }
        
        .card {
        position: absolute;
        transform: translate(10px, 10px);
        background-color: white;
        height: 200px;
        width: 260px;
        padding: 10px;
        }
        
        .card-title {
        font-weight: bold;
        font-size: 32px;
        }

        .card--checked {
          background-color: #E0B64B;
        }
        
        .card-bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 40px;
        width: 260px;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        border-top: 2px dashed black;
        align-items: center;
        }
    </style>
    <div class="todos-li">
      <div class="card">
        <h2 class="card-title">${this.attributes.title.value}</h2>
        <div class="card-bottom">
          <a href="${this.attributes.url.value}" target="_blank" class="article-link">Go to article</a>
          <input type="checkbox" class="checkbox-readed"/>
        </div>
      </div>
    </div>
    `;
    this.setChecked();
  };

  setChecked = () => {
    this.checkbox = this.shadowRoot.querySelector('.checkbox-readed');
    this.checkbox.checked = this.readed;
    this.checkbox.addEventListener('change', this.setColor);
    if (this.checkbox.checked) {
      this.checkbox.parentElement.parentElement.classList.add('card--checked');
    }
  };

  setColor = () => {
    this.dispatchEvent(new CustomEvent('article-changed', { detail: { id: Number(this.id), checked: this.checkbox.checked }, bubbles: true }))
    this.checkbox.parentElement.parentElement.classList.toggle('card--checked');
  };
}

customElements.define('article-item', Article);

export default Article;
