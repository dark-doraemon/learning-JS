//DOM element (dùng để lấy các phẩn tử trong DOM)
console.warn("DOM element");
console.log("Get element by id");
const h2_01 = document.getElementById("h2-01");
console.log(h2_01);


console.log("get element by tag name");
//lấy các phẩn tử theo tên thẻ 
const h2tags = document.getElementsByTagName("h2"); //trả về 1 mảng các tag name
console.log(h2tags);
for (const h2 of h2tags) {
    console.log(h2);
}


console.log("get element by class name");
//lấy các phẩn tử theo class name
const listClasses = document.getElementsByClassName("title");
console.log(listClasses);



console.log("query selector (chỉ lấy 1 phần tử ) (nên dùng thằng này so với những thằng ở trên)");
console.log("vì nếu ta lấy các phần tử trong the ul thì nó sẽ tiện hơn")
const selector = document.querySelector(".title");
console.log(selector);


console.log("querySelectorAll('#menu li a')");
//sẽ lấy ra 1 NodeList các thẻ "a"
console.log(document.querySelectorAll("#menu li a"));

console.log("querySelectorAll('.title')");
//query selectorALL 
const selectorAll = document.querySelectorAll(".title");
console.log(selectorAll);


console.log("Nếu không sử dụng querySelectorAll thì ta sẽ viết như sau");
console.log("const tagname = document.getElementById('menu2').getElementsByTagName('a');")
const tagname = document.getElementById("menu2").getElementsByTagName("a");
console.log(tagname);



//DOM HTML dùng để thay đổi hoặc lấy nội dung, thuộc tính,... của các thẻ HTML
console.error("DOM HTML");
console.log("innerHTML");

//gán nội dung cho thẻ html
document.querySelector(".div1").innerHTML = "xin chao";

//lấy nôi dụng của thẻ html
let div1 = document.querySelector(".div1").innerHTML;
let div2 = document.querySelector(".div2").innerHTML;
console.log(div1);
console.log(div2);

//lấy nội dung của 1 thuộc tính
console.log("lấy nội dụng của 1 thuộc tính, vd document.querySelector('.div3').getAttribute('class'), lấy nội dung của thuộc tính class")
const div3 = document.querySelector(".div3").getAttribute("class");
console.log(div3);
console.log(document.querySelector(".div4").getAttribute("daylathuoctinhtutao"));

//set nội dụng của 1 thuộc tính 
console.log("set thuộc tính của tag")
const div5 = document.querySelector(".div5");
div5.setAttribute("data", "xinchao");


const quangcao = document.querySelector(".ads");
function showQuangCao() {
    // quangcao.setAttribute("class","ads ads-display")
    //hoặc
    //ban đầu div có class là ads ,ta có thể thêm vào class mà không cần viết lại
    quangcao.classList.add("ads-display");
}


function tatQuangCao() {
    quangcao.setAttribute("class", "ads");

}


console.warn("DOM CSS")
div5.style.fontSize = "100px";


// DOM Events cho phép JS react với các HTML events(click,hover,...)
//onload : sẽ được gọi khi load xong mọi thẻ html
//onblur : sẽ được kích hoạt khi 1 element không focus được nữa
//onfocus
//onkeydown
//onkeyup
//onclick
//onchange
console.warn("DOM Events");

console.log("on blur")
function Blur() {
    console.log("Blur");
}

const input = document.querySelector(".oinput"); // = events.target
input.onblur = (events) => {
    input.value = input.value.toUpperCase();
}

console.log("onfocus");

input.onfocus = (events) => {
    console.log(events);
    input.style.background = "yellow";
}


console.log("onkeydown")

//khi nhấn 1 phím thì hàm này sẽ được gọi rồi mới nhập vào ô input
input.onkeydown = (events) => {
    // console.log(events.key);
    alert(events.target.value);
}



//ô input được nhập rồi mới gọi hàm này
console.log("onkeyup")
input.onkeyup = (events) => {
    // console.log(events);
    alert(events.target.value);

}

console.log("onclick");
const clickme = document.querySelector(".clickme");
clickme.onclick = () => {
    alert("xinchao");
}

const x = document.querySelector(".x");
const img = document.querySelector(".img");

x.onclick = () => {
    img.setAttribute("class", "ads");
}


console.log("onchange (dùng nhiểu trong thẻ select)");
//onchange hơi giống oninput 
//oninput thì sử kiện xảy ra ngay nhập tức khi người dùng nhập giá trị
//onchange chỉ kích hoạt khi blur




const mausac = document.querySelector(".color");
mausac.onchange = (events) => {
    alert(events.target.selectedOptions[0].innerHTML);
}

mausac.oninput = (e) => {
    console.log(e.target.selectedOptions[0].innerHTML);
}



//DOM Events Listener
console.warn("DOM Events Listener");
//DOM E L giống D E, khác ở chổ 1 element có thẻ gọi nhiều event
//có thể bỏ lắng nghe sự kiện


function ham1() {
    alert("Thực hiện công việc 1");
}

function ham2() {
    alert("Thực hiện công việc 2");
}

const dojob = document.querySelector(".dojob");
//chỉ thực hiện được 1 cái(hanm2());
// dojob.onclick = () => ham1();
// dojob.onclick = () => ham2();


//nó lăng nghe tất các các sự kiện tử trên xuống
dojob.addEventListener("click", ham1);

dojob.addEventListener("click", ham2);


setTimeout(() => {
    dojob.removeEventListener("click", ham1);
}, 3000);

//Event Bubbling or Event Capturing?
{/* <div>
    <p></p>
</div> */}
//nếu thẻ div và p có cũng 1 sự kiện onlick thì sự kiện của thẻ nào xảy ra trước
//Event Bubbling sự kiện của thẻ p xảy ra trược rồi mới tới thẻ div
//Event Capturing thì ngược lại 

// dojob.addEventListener("click",ham1,false); false Bubbling

// dojob.addEventListener("click",ham2,true); true Capturing



//DOM Navigation (dùng để thẻ hiện mối quan hệ giũa các thẻ html);
//mỗi element trong HTML là 1 node
//text trong element cũng là node (node text)

console.warn("DOM Navigation");

console.log(document.querySelector(".parent").innerHTML);


console.log("từ phẩn tử con tìm kiếm parentNode"); //từ phẩn tử con tìm kiếm parentNode
const child1 = document.querySelector(".child-1");
console.log(child1.parentNode);

console.log("lấy các phẩn tử con của parent(tính luôn text node) (không nên dùng) (childNodes)"); //lấy các phẩn tử con của parent(tính luôn text node)
console.log(child1.childNodes);


console.log("lấy các phẩn tử con của parent không tính text node"); //lấy các phẩn tử con của parent không tính text node
console.log(child1.querySelectorAll(".box"));

console.log("lấy phẩn tử đâu tiên của parent firstElementChild không phải firstChild") //lấy phẩn tử đâu tiên của parent
console.log(child1.firstElementChild);
console.log("ta nên dùng các khác (child1.querySelectorAll('.box')[0]),..."); //ta nên dùng cách khác (child1.querySelectorAll(".box")[0])
console.log(child1.querySelectorAll(".box")[2])
console.log(child1.querySelectorAll(".box:nth-child(2)"));


console.log("lấy phần tử kế tiếp (cùng cấp) nextSibling nó cũng sẽ lấy text node, vì vậy ta sẽ dùng nextElementSibling") // lấy phần tử kế tiếp (cùng cấp)
console.log(child1.nextElementSibling.innerHTML);

console.log("Lấy tên thẻ (nodeName)")
console.log(child1.nodeName);



console.warn("DOM Nodes (dùng đẻ tạo ra các thẻ HTML");
//thay vì tạo thẻ trong html ta có thẻ dùng JS để tạo 
//appendChild() dùng để chèn nội dụng vào vị trí cuối cùng của element cần chèn
//nếu muỗn chèn ở phía trược 1 element nào đó thì dùng insertBefore();

const thediv = document.createElement("div");//tạo thẻ div
const text = document.createTextNode("Quảng cáo"); //tạo note text cho thẻ div
thediv.appendChild(text); //insert text node vào thẻ div

//hoặc đơn giản hơn ta có thẻ sử dụng innerHTML để tạo text cho thẻ
//thediv.innerHTML = "some text";

//lưu ý khi tạo 1 thẻ thì thẻ dó chỉ có thẻ add vào 1 vị trí, tức là không thẻ dùng thẻ đó để add vào nhiều vị trí khác nhau
document.querySelector("body").appendChild(thediv);//insert thẻ div vừa tạo vào body vào cuối
document.querySelector("body").insertBefore(thediv, document.querySelector(".parent")) //insert trược thẻ có class là parent
console.log(thediv);



//lấy thẻ ul
const theul = document.querySelector(".add");

//lấy button Add Last
const addLast = document.querySelector(".addLast");

//xử lý khi nhân vào button Add Last
addLast.onclick = () => {
    //tạo thẻ li
    const theli = document.createElement("li");
    theli.innerHTML = "Item";

    //tạo button
    const button = document.createElement("button");
    button.innerHTML = "X";

    button.addEventListener("click",(e)=>{
        e.target.parentNode.remove();
    });
    
    theli.appendChild(button);

    theul.appendChild(theli);
}

//lấy button addFirst
const addFirst = document.querySelector(".addFirst");

//code xử lý khi nhấn add first
var i = 1;
addFirst.addEventListener("click", () => {
    //tạo thẻ li
    const theli = document.createElement("li");
    theli.innerHTML = "Item" + i++;

    //tạo button
    const button = document.createElement("button");
    button.innerHTML = "X";
    button.addEventListener("click",(e)=>{
        e.target.parentNode.remove();
    });


    theli.appendChild(button);
    theul.insertBefore(theli, document.querySelector(".add").querySelector("li"));
});


//lấy button remove dau và remove cuoi
const removeDau = document.querySelector(".removeDau");
const removeCuoi = document.querySelector(".removeCuoi");

removeDau.onclick = () => {
    const ptudau = document.querySelector(".add").querySelector("li");
    ptudau.remove();
}

removeCuoi.addEventListener("click", () => {
    const ptucuoi = document.querySelector(".add");
    ptucuoi.lastElementChild.remove();
})


//Replacing HTML Elements (replaceChild())
const textcha = document.querySelector(".textcha");
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");

const textkhac = document.createElement("div");
textkhac.innerHTML = "Text khác";


document.querySelector(".replace").addEventListener("click", () =>{
    textcha.replaceChild(textkhac,text1);
});

