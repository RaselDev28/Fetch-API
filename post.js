const loadPosts=()=>{
    const url="https://jsonplaceholder.typicode.com/posts";

    fetch(url).then(res=>res.json())
    .then(data=>{
        // console.log(data)
        displayData(data)
    })
}

const displayData=(posts)=>{
    const postContainer=document.getElementById("post-container");

    posts.forEach(post => {
        const li=document.createElement('li');
        li.innerText=post.title;
        postContainer.appendChild(li)
    });
}