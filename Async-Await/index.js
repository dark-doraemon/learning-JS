console.warn("Async/Await");

//từ khóa async dùng để tạo hàm trả về promise 
//await dùng để đợi kết quả của hàm promise

//fetech - then
fetch("https://dummyjson.com/products").then(response =>{
	console.log(response);
	return response.json();//hàm json() là 1 promise nên ta lại cần 1 then để đợi
}).then(data => {
	console.log(data);
})

//async - await 
console.warn("Async/Await");
const fetchApi = async (api) => {
	const response = await fetch(api);//await = then
	const data = await response.json();
	console.log(response);
	return data;
}


fetchApi("https://dummyjson.com/products").then(data =>{
	console.log(data);
})




