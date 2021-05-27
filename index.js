fetch ('https:www.thecocktaildb.com/api/json/v1/1/search.php?s=mart')
    .then(response => response.json())
    .then(data=> console.log(data));

//trying to sho the elements
const instructions = document.getElementById("drink-instructions")
const image = document.getElementById("drink-image")
const name = document.getElementById("drink-name")
const category = document.getElementById("drink-name-category")
const glass = document.getElementById("drink-glass")
const alcohol = document.getElementById("drink-alcoholic")


document.getElementById("search-send").addEventListener("click",)

