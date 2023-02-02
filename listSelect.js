//https://ko.javascript.info/mouse-events-basics#tasks
let list = document.querySelector("ul");
//list == ul : true
//list === ul : true
list.onmousedown = function() {
    return false;
}

//#### 1. 리스트가 여러개인 경우
ul.onclick = function(events) {
    //console.log(events.target.textContent);
    if(events.ctrlKey || events.metaKey) {
        events.target.classList.toggle("selected");
    } else {
        //DOM요소 지정에 대해 잘 생각해야한다
        //document.querySelectorAll(".selected")
        //위 코드는 다른 리스트 ul2에도 영향을 미치게 된다
        let selected = ul.querySelectorAll(".selected");
        for(let i of selected) {
            i.classList.remove("selected");
        }
        events.target.classList.add("selected");
    }
}
ul2.onmousedown = function() {
    return false;
}
ul2.onclick = function(events) {
    //console.log(events.target.textContent);
    if(events.ctrlKey || events.metaKey) {
        events.target.classList.toggle("selected");
    } else {
        let selected = ul2.querySelectorAll(".selected");
        console.log("name:" + this.innerHTML);
        
        for(let i of selected) {
            i.classList.remove("selected");
        }
        
        events.target.classList.add("selected");
    }
}
//########

//#### 2. this로 리스트 요소 선택
function listSelect(events) {
    if (events.target.tagName != "LI") return;
    if(events.ctrlKey || events.metaKey) {
        events.target.classList.toggle("selected");
    } else {
        //ul, ul2의 구성이 동일하고 동일한 기능을 수행한다
        //함수 재사용을 위해서 this를 사용하는게 코드를 줄일 수 있다
        let selected = this.querySelectorAll(".selected");
        for(let i of selected) {
            i.classList.remove("selected");
        }
        events.target.classList.add("selected");
    }    
}
ul.onclick = listSelect;
ul2.onclick = listSelect;
//########

let selectedElement;
selectedElement = ul.querySelectorAll(".selected");
selectedElement.item(1);

submit.onclick = function(e) {
    let selectedElement =[];
    ul.querySelectorAll(".selected").forEach(e => selectedElement.push(e.textContent));
    ul2.querySelectorAll(".selected").forEach(e => selectedElement.push(e.textContent));
    alert(selectedElement); 
}