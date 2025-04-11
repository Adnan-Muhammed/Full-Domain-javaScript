async function fetchAllDataConcurrently() {
    try {
        // Start all the fetch operations simultaneously
        const userPromise = fetchUser( 'https://jsonplaceholder.typicode.com/users/1');
        const postsPromise = fetchPosts('https://jsonplaceholder.typicode.com/users/1/posts/1'); // Hardcoded userId
        const commentsPromise = fetchComments('https://jsonplaceholder.typicode.com/users/1/comments/1'); // Hardcoded postId

        // Await all results
        const [user, 
            posts, 
            comments
        ] = await Promise.all([
            userPromise,
            postsPromise,
            commentsPromise
        ]);

        console.log("User:", user.name);
        console.log("Posts:", posts[0].title);
        console.log("Comments:", comments[0].email);
    } catch (error) {
        console.error("Error occurred:", error);
    }
}
