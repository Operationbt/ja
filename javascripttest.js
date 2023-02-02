//주석은
/*
    똑같네
*/
//let x = 7, y = 6;

//let은 지역변수, 그리고 재선언 불가능
//let x = 8;

// const longtext = "동해물과 백두산이 마르고 닳도록";
// document.getElementById("body_1").innerHTML = x + y + `애국가 ${longtext}`; //백틱 ``로 문자열 쓰면 중간에 ${변수명}으로 값을 끼워넣을 수 있음

//let age = prompt("프롬프트", 10);
//document.getElementById("body_2").innerHTML = age;

// alert(1 == 1); //true
// alert(1 == "1"); //true 자료형이 서로 다른걸 비교하면 숫자형으로 변환하고 비교함 
// alert(1 === "1"); //false ===는 자료형도 같은지 검사한다
// alert(1 === 2); //false 자료형은 같지만 값이 달라서 거짓
// alert(1 != 1); //false
// alert(1 !== "1"); //true 

//let str = "gggawe";
//let newstr = str.replace("ggg", "abc");
//alert(newstr); //abcawe
let str = print_diamond(5);
console.log(str.trim());

function print_diamond(n) {
    n = (n%2 == 1) ? n : n+1;
    let result = "";
    for (let i = 0; i < n/2; i++) {
      let str = '#'.repeat(n - i - 3) + '*'.repeat(2 * i + 1)
      result += str + '\n';
    }
    for (let i = (n-1)/2 - 1; i >= 0; i--) {
      let str = '#'.repeat(n - i - 3) + '*'.repeat(2 * i + 1)
      result += str + '\n';
    }
    return result;
}
