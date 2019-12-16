// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

//iterate over names, use template literals to select the array in the object, forEach the array, use that data to add text content

const cardsContainer = document.querySelector('.cards-container');

axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then((res) => {
        const articlesData = res.data.articles;

        articlesArray = Array.from(Object.keys(articlesData));

        for (let i = 0; i < articlesArray.length; i++) {
            res["data"]["articles"][`${articlesArray[i]}`].forEach((item) => {
                const newCard = ArticleCard(item);
                cardsContainer.appendChild(newCard);
            })
        }
    })
    .catch((err) => {
        console.log("You received the following error: ", err);
    });

function ArticleCard(item) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(authorName);
    imgContainer.appendChild(img);

    headline.textContent = item.headline;
    authorName.textContent = item.authorName;
    img.src = item.authorPhoto;

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    return card;
}