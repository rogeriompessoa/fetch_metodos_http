const getPosts = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();

    console.log(data)
}

//getPosts();

const newPost = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let options = {
        method: 'POST',
        body: {
            title: 'Teste1',
            body: 'Este é um novo teste1',
            userId: 5,
        }
    }

    const header = {
    }

    let response = await fetch(url, options, header)
    let data = await response.json()

    console.log(data)
}

//newPost();

const updatePost = async (id) => {

    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    let options = {
    method:`put`,
    body: body
}


let response  = await       fetch(url, option, headers);
let jason = await response.json();
}
updatePost(2,{
    title:`teste updaye`,
    body:`teste update body`,
    userid:10,

});



const deletePost = id =>{
    fetch('https://jsonplaceholder.typicode.com/posts/1',${id} ,{
        method: "DELETE",
    }),
        
     
    
}

