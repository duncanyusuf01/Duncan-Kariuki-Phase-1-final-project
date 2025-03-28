document.addEventListener("DOMContentLoaded", () => {
    fetch("db.json")
        .then(response => response.json())
        .then(data => {
            displayCategories(data.categories);
            displayUserInfo(data.owner);
            displayPosts(data.posts);
        })
        .catch(error => console.error("Error fetching data:", error));
});
function displayCategories(categories) {
    const categoryList = document.getElementById("category-list");
    categoryList.innerHTML = ""; // Clear existing items

    categories.forEach(category => {
        let li = document.createElement("li");
        li.textContent = category;
        li.addEventListener("click", () => filterPosts(category));
        categoryList.appendChild(li);
    });
}