const fetchApi = async (api) =>{
    const response = await fetch(api);
    const data = await response.json();
    return data;
}

fetchApi("http://localhost:3000/products").then(data => {


    console.log(data);

    const newArray = data.map(item =>{
        return `<li>${item.title}</li>`
    })

    const lis = newArray.join("");


    const theul = document.querySelector(".menu");
    theul.innerHTML = lis;
})



