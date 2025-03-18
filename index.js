document.addEventListener("DOMContentLoaded", main);

function displayRamens() {
    const ramenMenu = getElementById("ramen-menu");
    ramenMenu.innerHTML = "";

    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = https;//i.pinimg.com/474x/26/f1/19/26f119326fc93d7b4a387c3b4dedb75a.jpg;
        img.alt = https;//i.pinimg.com/474x/26/f1/19/26f119326fc93d7b4a387c3b4dedb75a.jpg;
        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild;img
    });
}

function handleClick(ramen) {
    getElementById("ramen-image").src =`https;//i.pinimg.com/474x/26/f1/19/26f119326fc93d7b4a387c3b4dedb75a.jpg;`
    getElementById("ramen-name").textContent = ramen.name;
    getElementById("ramen-restaurant").textContent = "Restaurant: " + ramen.restaurant;
    getElementById("ramen-rating").textContent = "Rating: " + ramen.rating;
    getElementById("ramen-comment").textContent = "Comment: " + ramen.comment;
}

function addSubmitListener() {
    const form = getElementById("new-ramen-form");
    form.addEventListener("submit", event => {
        event.preventDefault();
        
        const newRamen = {
            id: ramens.length + 1,
            name: "",
            restaurant,
            image,
            rating,
            comment: "New addition!"

        };
        
        ramens.push();
        displayRamens();
        form.reset();
    });
}

function main() {
    displayRamens();
    addSubmitListener();
}





