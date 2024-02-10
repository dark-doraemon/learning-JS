console.warn("Call back");
function congViec1() {
    console.log("Cong viec 1");
}

function congViec2(a) {
    console.log(a);
    a();
}

congViec2(congViec1);

function Sum(a, b, check) {
    let c = a + b;
    check(c);
}


const checkPositive = (number) => {
    if (number >= 0) {
        console.log("Số dương");
    }

    else console.log("Số âm");
}

const checkChanLe = (number) => {
    if (number % 2 == 0) {
        console.log("Số chẵn");
    }
    else console.log("Sô lẻ");
}

Sum(1, 3, (number) => {
    checkPositive(number);
    checkChanLe(number);
});


console.warn("Promise");

var a = 10;
// var promise = new Promise((resolve, reject) => {
//     if (a === undefined) {
//         reject(a);
//     }
//     else {
//         resolve(a);
//     }
// });

// promise
//     .then((success) => {
//        console.log("thành công " + success);
//        return success;
//     }) //then ở dưới nhận giá trị của then phía trên , then ở trên phải return giá trị cho then phía dưới
//     .then((success) => {
//         let value = success * 10;
//         return value;
//     })
//     .then((success) =>{
//         let value = success * 10;
//         console.log(value);
//     })
//     .catch((error) => console.log("Thất bại" + error))
//     .finally(() => console.log("Finally"))

//promise có 3 trạng thái
//Pending : khi promise đang chạy thì nó sẽ ở trạng thái này, kết quả là undefined
//Fullfield : khi promise chạy xong thì nó sẽ ở trạng thái này, kết quả là 1 giá trị
//Rejected : khi promise bị lỗi thỉ ở trạng thái này,kết quả là 1 object lỗi  


// const promise2 = new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         resolve(a);
//     },3000); // hàm resolve chỉ được gọi sau 3 giây
// });

// //lưu ý hàm setTimeout là hàm bất đồng bộ

// setTimeout(() =>{
//     console.log("Sau 1 giây " ,promise2); //gọi promise sau 1 giây
// },1000);

// setTimeout(() =>{
//     console.log("Sau 2 giây " ,promise2);//gọi promise sau 2 giây
// },2000);

// setTimeout(() =>{
//     console.log("Sau 3 giây " ,promise2 );//gọi promise sau 3 giây, lúc này promise đã xong
// },3000);


fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {
        const newArray = data.products.map((item) =>{
            return `
             <li>${item.title}</li>
            `;
        })

        const htmls = newArray.join("");
        console.log(htmls);

        const listTitle = document.querySelector(".list-title");
        listTitle.innerHTML = htmls;
    })
    
