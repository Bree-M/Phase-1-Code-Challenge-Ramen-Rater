const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg", rating: 5, comment: "Rich and creamy!" }
];

document.addEventListener("DOMContentLoaded", main);

function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.innerHTML = "";

    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
}

function handleClick(ramen) {
    document.getElementById("ramen-image").src = ramen.image;
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = "Restaurant: " + ramen.restaurant;
    document.getElementById("ramen-rating").textContent = "Rating: " + ramen.rating;
    document.getElementById("ramen-comment").textContent = "Comment: " + ramen.comment;
}

function addSubmitListener() {
    const form = document.getElementById("new-ramen-form");
    form.addEventListener("submit", event => {
        event.preventDefault();
        
        const newRamen = {
            id: ramens.length + 1,
            name: document.getElementById("new-ramen-name").value,
            restaurant: document.getElementById("new-ramen-restaurant").value,
            image: document.getElementById("new-ramen-image").value,
            rating: 5,
            comment: "New addition!"
        };
        
        ramens.push(newRamen);
        displayRamens();
        form.reset();
    });
}

function main() {
    displayRamens();
    addSubmitListener();
}





