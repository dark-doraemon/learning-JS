//lưu ý cho dù biến đặt là var hay let trong 1 hàm thì biến đó sẽ là biến cục bộ


console.warn("var,let const trong hoisting");
//tính hoisting  có thẻ sử dụng 1 biến xong mới khai báo biến đó 
//hoisting thực chật là duy chuyển phần khai báo biên lên trên đầu

//từ khóa var có tính hoisting
console.log(a);//undifined chứ không bị lỗi
var a = "Hello World!";
console.log(a);

//lí do không lỗi là do JS chuyển các phần "Khai báo biến lên đầu"(var);

//tương đương
var b ;
console.log(b);
b = "Hello World";
console.log(b);


//let và const sẽ bị lỗi can not acccess ... before initialization
// console.log(c);
// let c ; //lỗi vì c không có tính hoisting do đó nó không di chuyển let lên trên đầu

// console.log(d);
// const d = 10;
//const cũng lỗi như let


console.warn("hàm trong hoising");

//declaration function 

test();//không lỗi dù chưa có hàm test() và nó cũng thực hiện được các chức năng sao khi viết code phía dưới
function test(){
    console.log("hàm test");
}
//vì hoisting là di chuyển phẩn khai báo biến lên trên đầu
//do đó declaration function là di chuyển toàn bộ nguyên khối hàm lên trên đầu 
//tương đương
// function test(){
//     console.log("hàm test");
// }
// test();

//expression function
// test2(); //lỗi  test2 is not a function
// var test2 = function() {
//     console.log("Hàm test2");
// }

//lí do
//tương đương
//var test2 ;//var có tình hoisting nên nó di chuyển phần khai bao biến lên trên đầu
//test2(); //tới đây sẽ lỗi do test2 là undifined do đó khi gọi hàm sẽ lỗi theo (undefined())
// test2 = function() {
//     console.log("Hàm test2");
// }

//arrow function cũng giống như expression function (nhìn thì cũng biết);

console.warn("Từ khóa this");
//this sẽ trỏ về đối tượng mà nó đăng thuộc về
console.log(this);//vì đối ở cấp hiện tại là window nến this ở đây là window

//gán sự kiện cho 1 phần tử html thì this là phần tử html đó
const button = document.getElementById("button");
// button.onclick = function() {
//     console.log(this);//this lúc này sẽ chính button 
// }

button.addEventListener("click",function()  {
    console.log(this);//tự khóa this đại diện cho thẻ gọi function
});

//this ở sự kiện này là window không phải là button
//do từ khóa this bên trong arrow function 
//mà arrow function không có ngữ cảnh riêng
//nên nó sẽ gọi ngữ cảnh gấn nhất là window
//nói tóm lại arrow function không có ràng buộc với từ khóa this
button.addEventListener("click",() =>  {
    console.log(this);
});


console.warn("this trong object");
var userInfo = {
    fullName : "Chấn bé đù",
    email : "chanbedu@gmail.com",
    phone : "0121434454",
    getThis : function() {
        console.log(this);
        console.log(this.fullName);
    },
    getThis2 : function() {
        this.getThis();
    },
}

console.log(JSON.stringify(userInfo));
userInfo.getThis();
userInfo.getThis2();

console.warn("This trong arrow function");
const arrowButton = document.querySelector("#arrowButton");

arrowButton.addEventListener("click",() =>{
    console.log(this);
    console.log(arrowButton);
});

console.warn("Module");
import { Sum } from "./function.js";

console.log(Sum(1,2));


var stringJSON = `true`;
var stringJS = JSON.parse(stringJSON);
console.log(typeof stringJS);


var arrayJSON = `[
    {},
    {},
    {}
]`;

console.log(JSON.stringify(arrayJSON))
console.log(JSON.parse(arrayJSON));


var nullJSON = `null`;
console.log(JSON.stringify(nullJSON));
console.log(JSON.parse(nullJSON));
console.log(JSON.parse(JSON.stringify(nullJSON)));