const todoControl = document.querySelector (".todo-control"),
todoList = document.querySelector (".todo-list"),
todoCompleted = document.querySelector (".todo-completed"),
todoContainer = document.querySelector (".todo-container");

let obj =[]; 
load();

const render = () =>{
todoList.textContent="";
todoCompleted.textContent="";
if (Object.keys(obj).length != 0) {
let idCount=0;
obj.forEach((el) =>{
if (el!=null){
const li = document.createElement("li");
li.classList.add("todo-item");
li.id=idCount;

li.innerHTML = `<span class="text-todo">${el.value}</span>
<div class="todo-buttons">
<button class="todo-remove"></button>
<button class="todo-complete"></button>
</div>`;
if (el.completed) todoCompleted.append(li);
else todoList.append(li);
}idCount++;
})}
}
render();

todoControl.addEventListener("submit", (event) =>{
event.preventDefault();
const input = todoControl.querySelector("input");
newObj = {value: input.value, completed: false}
obj.push(newObj);
render();
save();
} )
todoContainer.addEventListener('click',(event)=>{
    event.preventDefault();
    const target=event.target;
    if (!target.matches('button'))return;
    const id=parseInt(target.closest('li').id);
    if (target.matches('.todo-remove')){
        target.closest('li').remove();
     obj[id]=null;
    }
    if (target.matches('.todo-complete')){
        obj[id].completed=true;
      render();
    }
    save();
    })
    function save()
    {
        const saveObj = JSON.stringify(obj);
        document.cookie="spisok="+saveObj; 
    }
    function load()
    {
        const loadObj =document.cookie.split('=')[1];
        if (loadObj!=null){
        obj = JSON.parse(loadObj);
        }
    }
   
    