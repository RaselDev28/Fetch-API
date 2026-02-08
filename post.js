const loadPosts=()=>{
    const url="https://jsonplaceholder.typicode.com/posts";

    fetch(url).then(res=>res.json())
    .then(data=>{
        // console.log(data)
        displayData(data)
    })
}

// const displayData=(posts)=>{
//     const postContainer=document.getElementById("post-container");
//     postContainer.innerHTML="";

//     posts.forEach(post => {
//         const li=document.createElement('li');
//         li.innerText=post.title;
//         postContainer.appendChild(li)
//     });
// }
//     {
// "userId": 1,
// "id": 1,
// "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
// "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
// },

const displayData=(posts)=>{
    const postContainer=document.getElementById("post-container");
    postContainer.innerHTML="";

    posts.forEach(post => {
        const postCard=document.createElement("div");
        postCard.innerHTML=`<div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>`
        postContainer.appendChild(postCard)
    });
}