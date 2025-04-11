// Function to fetch user data
async function fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    return user;
}

// Function to fetch posts by user ID
async function fetchPosts(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    const posts = await response.json();
    return posts;
}

// Function to fetch comments by post ID
async function fetchComments(postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    const comments = await response.json();
    return comments;
}

// Combining the asynchronous calls
async function fetchAllData() {
    try {
        // Fetching the user data
        const user = await fetchUser();
        console.log("User:", user.name);

        // Fetching posts by the user
        const posts = await fetchPosts(user.id);
        console.log("Posts:", posts[0].title);

        // // Fetching comments for the first post
        const comments = await fetchComments(posts[0].id);
        console.log("Comments for the first post:", comments[0].email, comments[1].email);
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

// Call the function to perform all the requests
fetchAllData();
