// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsClass = document.querySelector('.topics');

function Tabs(obj) {
    const tab = document.createElement('div');

    tab.classList.add('tab');

    return tab;
}

axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then((res) => {
        const topics = res.data.topics;
        topics.forEach((topic) => {
            const newCard = Tabs(topic)
            newCard.textContent = topic;
            topicsClass.appendChild(newCard);
        });
    })
    .catch((err) => {
        console.log("you caught an error: ", err)
})