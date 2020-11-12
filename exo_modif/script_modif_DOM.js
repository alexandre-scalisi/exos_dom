//modif 1
function changeTitles(title, subtitle) {
  document.getElementsByClassName('jumbotron-heading')[0].innerHTML = title;
  document.getElementsByClassName('lead text-muted')[0].innerHTML = subtitle
}


title = "Ce que j'ai appris à THP";
subtitle = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
changeTitles(title, subtitle)


//modif 2
function changeCallToActions(text1, text2, url1, url2) {
  let btnPrimary = document.getElementsByClassName("btn-primary")[0];
  btnPrimary.innerHTML = text1;
  btnPrimary.href = url1

  let btnSecondary = document.getElementsByClassName("btn-secondary")[0];
  btnSecondary.innerHTML = text2;
  btnSecondary.href = url2

}

text1 = "OK je veux tester !"
url1 = "http://www.thehackingproject.org"
text2 = "Non Merci"
url2 = "https://www.pole-emploi.fr/accueil/"
changeCallToActions(text1, text2, url1, url2)


//modif 3

function changeLogoName(title, size) {
  let navTitle = document.getElementsByClassName("navbar-brand")[0]
  navTitle.querySelector("strong").innerHTML = title
  navTitle.style.fontSize = size
}

title = "The THP Experience"
size = "2rem"

changeLogoName(title, size)





// modif 4

function populateImages(url) {
  let cards = document.getElementsByClassName("card-img-top")
  for (let index = 0; index < cards.length; index++) {
    cards[index].src = url[index]
  }
  
}


let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
populateImages(imagesArray)


//modif 5

function deleteLastCards() {
  let cards = document.getElementsByClassName("card");
  const cardLength = cards.length 
  for (let index = cardLength-1; index > cardLength-4 ; index--) {
    cards[index].remove();
    
  }
}
deleteLastCards()


//modif 6

function changeCardsText(texts){
  cardTexts = document.getElementsByClassName("card-text")
  for (let index = 0; index < 3; index++) {
    cardTexts[index].innerHTML = texts[index]
    
  }
}

texts = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype." ]
changeCardsText(texts)


//modif 7

function changeViewButtons() {
  let buttons = document.getElementsByClassName("btn-sm")
  for (let index = 0; index < buttons.length; index++) {
    if (buttons[index].innerHTML == "View") {
      buttons[index].classList.remove("btn-outline-secondary");
      buttons[index].classList.add("btn-success");
    }
    
  }
}

changeViewButtons();


// modif 8


function addDiv() {
  let div = document.createElement("div");
  div.classList.add("row");
  card3 = document.getElementsByClassName("card")[2];
  div.appendChild(card3)
  let container = document.getElementsByClassName("container")[3];
  container.appendChild(div);
  
  

}

addDiv()
