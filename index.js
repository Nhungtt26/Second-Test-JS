const drinks = [
    {
        name: "Hugo",
        type: "a cocktail",
        price: "€5",
        color: "#ecec1e",
    },
    {
        name: "Martini",
        type: "a cocktail",
        price: "€7",
        color: "#d1b10e",
    },
    {
        name: "Margarita",
        type: "a cocktail",
        price: "€7",
        color: "#ce540e",
    },
    {
        name: "Manhattan",
        type: "a cocktail",
        price: "€9",
        color: "#9acd0d",
    },
    {
        name: "Earl Grey tea",
        type: "not a cocktail",
        price: "€2",
        color: "#2b96b7",
    },
    {
        name: "Herbal tea",
        type: "not a cocktail",
        price: "€2",
        color: "#d9e283",
    },
    {
        name: "Ginger ale",
        type: "not a cocktail",
        price: "€3",
        color: "#6ba01",
    },
    {
        name: "Lemonade",
        type: "not a cocktail",
        price: "€3",
        color: "#5ba01b",
    },
]

drinks.forEach(drink => {
    //create a buttons with differwnt color
    const btn = document.createElement("button");
    btn.innerHTML = (drink.name);
    const container = document.querySelector(".container");
    container.append(btn);
    btn.style.backgroundColor = (drink.color);


    // click on the button and will show on console.
    btn.addEventListener("click", () => {
        console.log(drink.name);
        console.log(drink.type);



    });


})