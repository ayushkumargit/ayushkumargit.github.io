console.log('news app');
// b800221eb871448fb4d9427d5dc74d2c

let source = 'the-times-of-india';
let apiKey = 'e2e1372e028059de2ea106ea28330bab';
// let apiKey = 'b800221eb871448fb4d9427d5dc74d2c';

// grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// new xhr object
const xhr = new XMLHttpRequest();

// create a get request
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=b800221eb871448fb4d9427d5dc74d2c`, true);
xhr.open('GET', `https://gnews.io/api/v4/search?q=example&token=${apiKey}`, true);

xhr.onload = function () {
    if (this.status === 200) { // 200 is a response code of http for response OK
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            let news = `<div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                    <b>Breaking news ${index + 1} : &nbsp</b> ${element["title"]}
                </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}"
                data-bs-parent="#newsAccordion">
                <div class="accordion-body">${element["description"]}. <a href="${element['url']}" target="_blank"> read more here</a></div>
            </div>
            </div>`

            newsHtml += news;
        });

        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.error('an error occured');
    }
}

xhr.send();



