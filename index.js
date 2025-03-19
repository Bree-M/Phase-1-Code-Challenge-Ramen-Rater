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
    document.getElementById("new-ramen-form").addEventListener("submit", function(event) {
        event.preventDefault(); 
    
        window.location.href = "thankyou.html";
    });
    
    
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


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("new-ramen-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission
        
        // Optionally, you can add logic to store the submitted data here

        // Redirect to another page
        window.location.href = "thank-you.html"; // Change to the actual page you want
    });
});



