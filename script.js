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
function displayUserInfo(owner) {
    document.getElementById("blog-owner-img").src = owner.image;
    document.getElementById("blog-owner-desc").textContent = owner.description;
}
function displayPosts(posts) {
    const blogPostsContainer = document.getElementById("blog-posts");
    blogPostsContainer.innerHTML = ""; // Clear existing posts

    posts.forEach(post => {
        let postDiv = document.createElement("div");
        postDiv.classList.add("blog-post");

        postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <span class="upvote">👍 ${post.upvotes}</span>
        `;

        // Handle upvote clicks
        const upvoteBtn = postDiv.querySelector(".upvote");
        upvoteBtn.addEventListener("click", () => {
            post.upvotes += 1;
            upvoteBtn.textContent = `👍 ${post.upvotes}`;
        });

        blogPostsContainer.appendChild(postDiv);
    });
}