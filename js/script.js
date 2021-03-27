// question 1

const cat = {
    complain: function() {
        console.log("Meow!");
    }
};

cat.complain();



// question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";



// question 3

heading.style = "font-size: 2em";



// question 4

heading.className = "subheading";



// question 5

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}



// question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style = "background: yellow";



// question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function createList(list) {
    for(let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

createList(cats);



// question 8

function createCats(cats) {
    var htmlCats = "";
    for(let i = 0; i < cats.length; i++) {
        htmlCats += `<div> 
            <h5>${cats[i].name}</h5>
            <p>${cats[i].age ? cats[i].age : "Age unknown"}</p>
        </div>` 
    } 
    return htmlCats;
}
var container = document.querySelector(".cat-container");

container.innerHTML = createCats(cats);