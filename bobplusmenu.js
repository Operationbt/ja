let date = new Date();
let dateString = date.getFullYear() + "년 "
    + (date.getMonth() + 1) + "월 "
    + date.getDate() + "일";

document.getElementById("date").innerHTML = dateString;

//https://blog.naver.com/babplus123/222374958935 서울숲 롯데IT캐슬점
const url = "http://localhost:8080/getMenu";
//http://127.0.0.1:5500/listSelect.html

const request = new XMLHttpRequest();
request.open('GET', url, true);
request.send();
request.onload = function () {
  console.log(request.responseText);
  document.getElementById("menu").innerHTML = request.responseText;
};
request.onerror = function() {
    console.log("false");
}
request.onreadystatechange = function() {
    if (request.readyState == XMLHttpRequest.DONE && request.status == 200 ) {

        document.getElementById("text").innerHTML = request.responseText;

    }
}

function showMenu() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:8080/getMenu", true);
    xhr.send()
    xhr.onload = function() {
        document.getElementById("text").innerHTML = xhr.responseText;
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



