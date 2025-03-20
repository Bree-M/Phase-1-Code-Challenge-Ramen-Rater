document.addEventListener("DOMContentLoaded", () => {
    const ramenMenu = document.getElementById("ramen-menu");
    const ramenDetail = document.getElementById("ramen-detail");
    const ramenForm = document.getElementById("new-ramen");
    
    const ramens = [
        { name: "Pork Ramen", restaurant: "Ramen Paradise", image: "https://i.pinimg.com/474x/6b/41/04/6b41047134d607e49a2c0d98c4a8c554.jpg", rating: 10, comment: "Definitely coming back for the pork ramen." },
        { name: "Naruto Ramen", restaurant: "Menya", image: "https://moringa.instructure.com/courses/967/files/517799/preview", rating: 10, comment: "Very filing and very rich" },
        { name: "Miso Ramen", restaurant: "Chekafe", image: "https://moringa.instructure.com/courses/967/files/517800/preview", rating: 10, comment: "Very creamy, love it." },
        { name: "Taty Ramen", restaurant: "Inti", image: "https://moringa.instructure.com/courses/967/files/517798/preview", rating: 10, comment: "Love it." },
        { name: "Shoyu Ramen", restaurant: "Misono", image: "https://moringa.instructure.com/courses/967/files/517801/preview", rating: 10, comment: "Very filing and very umami." },
        { name: "Udon Ramen", restaurant: "Menya", image: "https://moringa.instructure.com/courses/967/files/517797/preview", rating:10, comment: "Very filing." }
    ];
    
    function displayRamens() {
        ramenMenu.innerHTML = "";
        ramens.forEach((ramen, index) => {
            const img = document.createElement("img");
            img.src = ramen.image;
            img.alt = ramen.name;
            img.addEventListener("click", () => handleClick(index));
            ramenMenu.appendChild(img);
        });
    }
    
    function handleClick(index) {
        const ramen = ramens[index];
        ramenDetail.innerHTML = `
            <h2>${ramen.name}</h2>
            <h3>${ramen.restaurant}</h3>
            <img src="${ramen.image}" alt="${ramen.name}">
            <p>Rating: <span id="ramen-rating">${ramen.rating}</span></p>
            <p>Comment: <span id="ramen-comment">${ramen.comment}</span></p>
            <button onclick="deleteRamen(${index})">Delete</button>
        `;
    }
    
    function addSubmitListener() {
        ramenForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const newRamen = {
                name: e.target.name.value,
                restaurant: e.target.restaurant.value,
                image: e.target.image.value,
                rating: e.target.rating.value,
                comment: e.target.comment.value
            };
            ramens.push(newRamen);
            displayRamens();
            ramenForm.reset();
        });
    }

    function updateRamen(index) {
        const updatedRating = document.getElementById("ramen-rating").value;
        const updatedComment = document.getElementById("ramen-comment").value;
        ramens[index].rating = updatedRating;
        ramens[index].comment = updatedComment;
        handleClick(index);
    }
    
    function deleteRamen(index) {
        ramens.splice(index, 1);
        displayRamens();
        ramenDetail.innerHTML = "<p>Select a ramen to see details.</p>";
    }
    
    function main() {
        displayRamens();
        addSubmitListener();
        handleClick(0); 
    }
    
    main();
});



