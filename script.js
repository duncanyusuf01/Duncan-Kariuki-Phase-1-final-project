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