const loadData = () => {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}

// const loadPosts = () => {
//     const url2 = "https://jsonplaceholder.typicode.com/posts";
//     fetch(url2).then(res => res.json())
//         .then(data => {
//             console.log(data)
//             displayPost(data)
//         })
// }

// const displayPost = (posts) => {
//     posts.forEach(post => {
//         console.log(post)
//     });
// }