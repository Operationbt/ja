let date = new Date();
let dateString = date.getFullYear() + "년 "
    + (date.getMonth() + 1) + "월 "
    + date.getDate() + "일";

document.getElementById("date").textContent = dateString;


//https://blog.naver.com/babplus123/222374958935 서울숲 롯데IT캐슬점
const url = "https://blog.naver.com/babplus123/222374958935";
//const xhr = new XMLHttpRequest();
//xhr.open("GET", url);

//let one = document.getElementById("blog").contentWindow.document.getElementById("SE-85fbd044-706a-11ed-aba8-17439184eed4");
//document.getElementById("menu").textContent = one;
//http://127.0.0.1:5500/listSelect.html

/*
fetch(url, {"method":"option"})
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error(error));
*/
  
const headers = new Headers({
    'content-Type': 'text/plain',
    mode : 'no-cors',
});
fetch("http://127.0.0.1:5500/listSelect.html", { headers }).then(
    (Response) => Response.text()
).then(
    (html) => {
        let parser = new DOMParser();
        let doc = parser.parseFromString(html, "text/html");
        console.log(doc);
        document.getElementById("menu").textContent = doc.getElementById("ul").childNodes[1].textContent;
    }
)

