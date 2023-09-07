//html
<div id="grParent">
  <div id="parent">
    <div id="child">
    
    </div>
  </div>
</div>

//Javascript
//event bubbling
document.querySelector("#grParent")
.addEventListener('click', ()=>{console.log("grandparent was clicked")}, false);

document.querySelector("#parent")
.addEventListener('click', ()=>{console.log("parent was clicked")}, false);

document.querySelector("#child")
.addEventListener('click', ()=>{console.log("child was clicked")}, false);

//CSS
div{
  min-height:100px;
  min-width:100px;
  padding:40px;
  border: 1px solid black;
}
