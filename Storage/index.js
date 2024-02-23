console.warn("Loacl Storage")
//localStorage giống cookie nhưng tồn tại vô thời hạn


//set localStorage
localStorage.setItem("daylakey","Đây là key");
let mode = localStorage.getItem("mode");
if(mode === 'dark')
{
    document.querySelector("body").classList.add("dark");
}
//get localStorage
const key = localStorage.getItem("daylakey");
console.log(key);

document.querySelector(".key").innerHTML = key;


const hyrid = document.querySelector(".hyrid");

hyrid.addEventListener("click",() =>{
    const body = document.querySelector("body");
    if(mode === 'light') 
    {
        localStorage.setItem("mode","dark");
    }
    else 
    {
        localStorage.setItem("mode","light"); 
    }
    body.classList.toggle("dark")
    console.log(mode);
        
});


// localStorage.removeItem("daylakey"); xóa key trong localStorage

// localStorage.clear(); xóa hết all key

//localStorage thực chất là 1 object 
console.log(localStorage);

localStorage.setItem("key1","value1");
//vì vậy ta có thẻ sử dụng có pháp này để add key
localStorage.key2 = "value2";

console.log(localStorage.key2);

console.log(localStorage.key(1)) // lấy key tại vị trí index

console.warn("Session Storage")


//Session Storage mất khí tắt browser
//có các hàm giống với localStorage
sessionStorage.setItem("session1","sessionvalue1");


//tóm lại cookies, localStorage, sessionStorage chức năng giống nhau
//khác
//cookies hết hạn khi mình tự set thới gian hoặc tắt trình duyệt(4KB),truy cập both sides
//localStorage tồn tại mãi mãi trừ khì xóa lích sử web(5MB),chỉ có thể truy cấp trên client
//sessionStorage mất khi tắt browser (10MB), chỉ có thẻ truy cập client



console.warn("Closure");
//Clousure là 1 hàm bên trong 1 hàm khác


const sum = (a,b) => {
    //Closure
    const tinhTong = () =>{
        return a + b;
    }

    return tinhTong; //lưu ý đây là return hàm ,chưa gọi hàm
}

const tong = sum(1,2);
console.log(tong);
console.log(tong());


const tinhToan= (a,b) =>{
    const ham1 = () =>{
        return a + b;
    }

    const ham2 = () =>{
        return a - b;
    }

    const ham3 = () => {
        return a * b;
    }

    const ham4 = () =>{
        return a % b;
    
    }

    return {
        tong : ham1,
        hieu : ham2,
        tich : ham3,
        thuong : ham4
    }
}

const caculate = tinhToan(1,2);
console.log(caculate);

console.log(caculate.tong());
console.log(caculate.hieu());
console.log(caculate.tich());
console.log(caculate.thuong());

console.warn("Spread Syntax");
//dùng để lập lại các phần tử của mảng hoặc object

const arr1 = [1,2,3];
const arr2= [arr1,4,5];
console.log(arr2);


const arr3 = [...arr1,4,5];
console.log(arr3)

//nối 2 mảng 
const arr4 = [...arr1,...arr3];
console.log(arr4);


//nói 2 object
let ob1 = {
    "fullName" : "Chấn bé đù",
    "age" : 20,
}

let ob2 = {
    ...ob1,
    "address" : "HCM",
}

console.log(ob2);

console.warn("Rest paramaters")
//là tham số đại diện cho các tham số khách không được khai báo trong 1 hàm

function rest(a,b,...c)
{
    console.log(a);
    console.log(b);;
    console.log(c);
}

rest(1,2,3,4,5,6,7,8);


console.warn("Destructuring");
//để dẽ dàng lấy các phần tử của array hoặc object

const testArray = [1,2,3,4,5];
const [a,b] = testArray;

console.log(a); // = testArray[0]
console.log(b); // = testArray[1]


const userInfo = {
    fullName : "Chấn bé đù",
    age : 20,
    address : "HCM",
    occupation : "engineer"
}


const {fullName,age} = userInfo;//tên biến phải là tên trong object
console.log(fullName); // = userInfo.fullName
console.log(age);// = userInfo.age