let pCOunt = document.getElementsByTagName('p').length;
console.log(`Il y a ${pCOunt} elements p dans la page HTML`);

let coucouInnerHtml = document.getElementById('coucou').innerHTML;
console.log(`Le contenu html de coucou est : ${coucouInnerHtml} `);

let thirdLink = document.getElementsByTagName('a')[2].href
console.log(`l'url vers lequel point le 3ème element <a> de la page est : ${thirdLink}`); 

let compteMoi = document.getElementsByClassName('compte-moi').length;
console.log(`il y a ${compteMoi} éléments qui portent la classe "compte-moi"`);

let liCompteMoi = document.querySelectorAll('li.compte-moi').length
console.log(`il y a ${liCompteMoi} li avec le tag "compte-moi"`);

let olLiCompteMoi = document.querySelectorAll('ol li.compte-moi').length
console.log(`il y a ${olLiCompteMoi} li dans un ol avec le tag "compte-moi"`);

let hidden = document.querySelectorAll('div')[0].querySelectorAll('ul')[1].firstElementChild.textContent
console.log(hidden);


// Question 1 :
// Combien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.

// Question 2 :
// Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console.

// Question 3 :
// Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.

// Question 4 :
// Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.

// Question 5 :
// Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.

// Question 6 :
// Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.

// Question 7 :
// Petit jeu de piste à résoudre si possible sans regarder le fichier HTML…

// La page contient un seul élément <div>. Celui-ci contient 2 éléments "unordered list" ou <ul>. Dans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur mais toi, tu peux en récupérer le contenu. Affiche-le dans la console.