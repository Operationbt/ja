let date = new Date();
let dateString = date.getFullYear() + "년 "
    + (date.getMonth() + 1) + "월 "
    + date.getDate() + "일";

document.getElementById("date").textContent = dateString;

const url = "http://localhost:8080/getMenu";


const request = new XMLHttpRequest();
request.open('GET', url, true);
request.send();
request.onload = function () {
    let menu = decodeHTMLEntities(request.responseText);
    menu = menu.split(" ").join("\n");
    console.log(menu);
    document.getElementById("menu").textContent = menu;
};
request.onerror = function() {
    console.log("request false");
}
request.onreadystatechange = function() {
    if (request.readyState == XMLHttpRequest.DONE && request.status == 200 ) {
        let menu = decodeHTMLEntities(request.responseText);
        document.getElementById("text").textContent = menu.split(" ").join("<br>");
    }
}

function showMenu() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:8080/getMenu", true);
    xhr.send()
    xhr.onload = function() {
        let menu = decodeHTMLEntities(xhr.responseText);
        document.getElementById("menu").textContent = menu.split(" ").join("\n");
    }
}
//localhost:8080은 스프링 서버
//스프링 서버에서 localhost:5500에 CrossOrigin을 명시해줬기 때문에 GET으로 데이터 가져오기 가능
/*
fetch("http://localhost:8080/getMenu").then(
    (Response) => Response.text()
).then(
    result => {
        console.log(result);
        document.getElementById("menu").textContent = result;
    }
)
*/

//innerHTML은 XSS에 악용될 수 있어 보안에 취약하므로 textContent를 이용하게된다.
//하지만 일부 기호가 HTML엔티티로 표시되면 보기 안좋다.
//1. 서버 단에서 HTML엔티티가 없는 문자를 보내기
//2. 클라이언트 단에서 아래와 같은 함수를 통해 replace하기
function decodeHTMLEntities (str) {
    if(str !== undefined && str !== null && str !== '') {
        str = String(str);

        str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
        str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
        var element = document.createElement('div');
        element.innerHTML = str;
        str = element.textContent;
        element.textContent = '';
    }
    return str;
}
