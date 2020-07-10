# Card Styles

```
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
```

# Card HTML

```
<li class="todos-li">
  <div class="card">
    <h2 class="card-title">Title</h2>
    <div class="card-bottom">
      <a href="" class="article-link">Go to article</a>
      <input type="checkbox" />
    </div>
  </div>
</li>
```
