let itemList =document.getElementById('item');

let itemValue = document.getElementById('add-item');

let filter = document.getElementById('search');

clearSearch = document.getElementById('clear')

let plus = document.getElementById('plus');

let listE = document.getElementById('list-place');

 
 
document.addEventListener('DOMContentLoaded', getLocalList)
plus.addEventListener('click', addItem);

listE.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);
clearSearch.addEventListener('click', clearSearchContent)

itemValue.addEventListener('keydown', (e) => {
    
    if(e.key === "Enter") {
       addItem(e);
    }
       
});

function addItem(e) {
    
 
    
    e.preventDefault()  
    // get value
    
    const newItem = itemValue.value;

    let li = document.createElement('li');
    li.className = 'item';
    li.appendChild(document.createTextNode(newItem));
    saveLocalList(itemValue.value);
    var deleteBtn = document.createElement('i');
    deleteBtn.className = 'delete far fa-trash-alt';
    
    // deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    listE.appendChild(li);
     
    itemValue.value = "";
    

}


function removeItem(e) {
     
     if(e.target.classList.contains('delete')) {
       
             var li = e.target.parentElement;
             listE.removeChild(li);
             removeLocalList();
         }
      
    
}



function filterItems(e) {
    console.log(e);
    var text = e.target.value.toLowerCase();

    var items = listE.getElementsByTagName('li');
    Array.from(items).forEach(function(item){

        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });


}


function saveLocalList(e) {

    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];

    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(e);

    localStorage.setItem("todos", JSON.stringify(todos));

}


function getLocalList() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];

    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(e){
        
         newItem = e;
    
        let li = document.createElement('li');
        li.className = 'item';
        li.appendChild(document.createTextNode(newItem));
         
        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete';
        
        deleteBtn.appendChild(document.createTextNode('X'));
        li.appendChild(deleteBtn);
        listE.appendChild(li);
    })
}


function removeLocalList(todo) {

    let todos
    if (localStorage.getItem("todos") === null) {
        todos = [];

    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    let toDoIndex = todos[0].innerText;
    todos.splice(todos.indexOf(toDoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    
 }


 function clearSearchContent() {
      text = filter.value = "";
    
     var items = listE.getElementsByTagName('li');
     Array.from(items).forEach(function(item){
             item.style.display = 'block';
             console.log("test")
     });

 

 }