
//Lấy chiều dài và rộng của trình duyệt
console.log(window.innerWidth);
console.log(window.innerHeight);



// var tab;

const openTab = () => {
    tab = window.open('https://youtube.com', "_blank", "width=500, height=500, left=100, top=100");
}

const closeTab = () => {
    tab.close();
}


//lấy chiều dài và rộng của thiết bị
console.log(screen.width);
console.log(screen.height);


//các đổi tượng liên quan tới url
console.log(window.location)


//reload
const reload = () => {
    window.location.reload();
}

// setInterval(reload,200);


console.log(window.history)

const goBack = () => {
    window.history.back();
}

const goFoward = () => {
    window.history.forward();
}



//window.navigator chứa các thông tin về trình đuyệt của người dùng
console.log(window.navigator.cookieEnabled);//kiểm tra trình duyệt có bật cookie không 
console.log(window.navigator.appName) //kiểm tra tên trình duyệt
console.log(window.navigator.appCodeName); //kiểm tra mã code của trình duyệt
console.log(window.navigator.appVersion);//kiểm tra version của trình duyệt
console.log(window.navigator.platform);//kiểm tra hệ điệu hành đang sử dụng
console.log(window.navigator.language); //kiểm tra ngôn ngữ của trình duyệt
//.....




//hàm tạo cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


setCookie("fullName","chanbedu",3);
setCookie("taikhoan", "admin", 3);
setCookie("matkhau", "1", 3);


//hàm get cookie

console.log(document.cookie.split(';'));

function getCookieValue(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getCookieValue2(cname) {
    let pairs = document.cookie.split('; ');
    for (let i = 0; i < pairs.length; i++) {
        let key = pairs[i].split('=');
        if (key[0] === cname) {
            return key[1];
        }
        console.log(key);
    }
}


//Kiểm tra cookie đã tồn tại chưa
//nếu có rồi thì in ra câu xin chao
//chưa thì set cookie
function checkCookie() {
    let username = getCookieValue("fullName");
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}


//cách xóa cookie

function deleteCookie(cname)
{
    //ta chỉ cần set expires là 1 ngày trước ngày hết hạn(ngày nào cũng được)
    //và ta không cần chỉ định giá trị của cookie khi xóa(xóa rồi thì cần chỉ định giá trị làm gì);
    document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

deleteCookie("fullName");



