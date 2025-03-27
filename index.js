document.addEventListener("DOMContentLoaded", () => {
    const ramens = [
        { 
            id: 1, 
            name: "Gyukotsu Ramen", 
            restaurant: "Ichiran", 
            image: "https://i.pinimg.com/236x/05/e3/a8/05e3a814fde659090df471ad58823c79.jpg",  
            rating: 5,
            comment: "Delicious beef bone broth!",
            categories: ["premium"]
        },
        { 
            id: 2, 
            name: "Naruto Ramen", 
            restaurant: "Menya", 
            image: "https://i.pinimg.com/474x/fe/55/cf/fe55cf0c57e07443f0a208b11ea4a9a4.jpg",  
            rating: 4, 
            comment: "Classic fish cake topping!",
            categories: ["classic"]
        },
        { 
            id: 3, 
            name: "Shoyu Ramen", 
            restaurant: "Ramen-ya", 
            image: "https://i.pinimg.com/474x/6f/e4/ef/6fe4ef2995feecb6ec232649d1c942d3.jpg",  
            rating: 4, 
            comment: "Soy sauce based goodness",
            categories: ["classic"]
        },
        { 
            id: 4, 
            name: "Miso Ramen", 
            restaurant: "Chakafe", 
            image: "https://i.pinimg.com/474x/8c/02/4e/8c024e17dad1ca6fb322542a6cb0f630.jpg",  
            rating: 5, 
            comment: "Rich and flavorful miso broth",
            categories: ["vegetarian"]
        },
        { 
            id: 5, 
            name: "Tantan Ramen", 
            restaurant: "Kojiro", 
            image: "https://i.pinimg.com/474x/a4/c1/5c/a4c15c5c55525a9ce15f4cf5bdbe1e46.jpg",  
            rating: 4, 
            comment: "Spicy sesame delight",
            categories: ["spicy"]
        }
    ];

    
    const ramenMenu = document.getElementById("ramen-menu");
    const ramenDetail = document.getElementById("ramen-detail");
    const nameElement = document.getElementById("ramen-name");
    const restaurantElement = document.getElementById("ramen-restaurant");
    const imageElement = document.getElementById("ramen-image");
    const ratingDisplay = document.getElementById("rating-display");
    const commentDisplay = document.getElementById("comment-display");
    const ramenForm = document.getElementById("new-ramen");
    const editForm = document.getElementById("edit-ramen");
    const editRating = document.querySelector("#edit-ramen input[name='rating']");
    const editComment = document.querySelector("#edit-ramen input[name='comment']");
    const menuCategories = document.getElementById("menu-categories");
    const newCategoryForm = document.getElementById("new-category-form");
    const deleteButton = document.getElementById("delete-ramen");

   
    const defaultCategories = ["all", "premium", "classic", "vegetarian", "spicy"];

    
    function displayRamens(ramenList = ramens) {
        ramenMenu.innerHTML = "";
        ramenList.forEach(ramen => {
            const img = document.createElement("img");
            img.src = ramen.image;
            img.alt = ramen.name;
            img.dataset.id = ramen.id;
            img.onerror = function() {
                this.src = "https://i.pinimg.com/736x/52/4a/c8/524ac81354594ba12eeb64a10e727fee.jpg";
            };
            img.addEventListener("click", () => displayRamenDetails(ramen));
            ramenMenu.appendChild(img);
        });
        
        if (ramenList.length > 0) {
            displayRamenDetails(ramenList[0]);
        }
    }

    
    function displayRamenDetails(ramen) {
        nameElement.textContent = ramen.name;
        restaurantElement.textContent = ramen.restaurant;
        imageElement.src = ramen.image;
        imageElement.alt = ramen.name;
        ratingDisplay.textContent = ramen.rating || "Not rated";
        commentDisplay.textContent = ramen.comment || "No comment";

        
        const existingCategories = document.querySelector("#ramen-detail .categories");
        if (existingCategories) {
            existingCategories.remove();
        }

        
        if (ramen.categories && ramen.categories.length > 0) {
            const categoriesDiv = document.createElement("div");
            categoriesDiv.className = "categories";
            categoriesDiv.innerHTML = `<strong>Categories:</strong> ${ramen.categories.join(", ")}`;
            ramenDetail.appendChild(categoriesDiv);
        }

       
        if (editRating) editRating.value = ramen.rating || "";
        if (editComment) editComment.value = ramen.comment || "";
        if (editForm) editForm.dataset.id = ramen.id;
    }

    
    function filterByCategory(category) {
        if (category === "all") {
            displayRamens();
        } else {
            const filteredRamens = ramens.filter(ramen => 
                ramen.categories && ramen.categories.includes(category)
            );
            displayRamens(filteredRamens);
        }
    }

    
    function initCategoryButtons() {
        menuCategories.innerHTML = "";
        
        defaultCategories.forEach(category => {
            const button = document.createElement("button");
            button.className = "category-btn";
            button.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            button.dataset.category = category;
            
            button.addEventListener("click", () => {
                document.querySelectorAll(".category-btn").forEach(btn => 
                    btn.classList.remove("active")
                );
                button.classList.add("active");
                filterByCategory(category);
            });
            
            menuCategories.appendChild(button);
        });
        
        
        const allButton = document.querySelector(".category-btn[data-category='all']");
        if (allButton) allButton.classList.add("active");
    }

    
    newCategoryForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const categoryName = document.getElementById("new-category-name").value.trim().toLowerCase();
        
        if (categoryName && !defaultCategories.includes(categoryName)) {
            defaultCategories.push(categoryName);
            initCategoryButtons();
            newCategoryForm.reset();
        }
    });

    ramenForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const newRamen = {
            id: ramens.length + 1,
            name: e.target.name.value,
            restaurant: e.target.restaurant.value,
            image: e.target.image.value,
            rating: parseInt(e.target.rating.value) || 0,
            comment: e.target.comment.value || "No comment yet",
            categories: []
        };
        
        ramens.push(newRamen);
        displayRamens();
        ramenForm.reset();
    });

    editForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const id = parseInt(editForm.dataset.id);
        const ramen = ramens.find(r => r.id === id);
        
        if (ramen) {
            ramen.rating = parseInt(editRating.value) || 0;
            ramen.comment = editComment.value || "No comment";
            displayRamenDetails(ramen);
            displayRamens();
        }
    });

    deleteButton.addEventListener("click", () => {
        const id = parseInt(editForm.dataset.id);
        const index = ramens.findIndex(r => r.id === id);
        
        if (index !== -1) {
            ramens.splice(index, 1);
            displayRamens();
        }
    });

   
    initCategoryButtons();
    displayRamens();
});

