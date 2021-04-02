let itemList =document.getElementById('item');

let itemValue = document.getElementById('add-item');

let filter = document.getElementById('search');

 

let plus = document.getElementById('plus');

let listE = document.getElementById('list-place');


 

plus.addEventListener('click', addItem);
listE.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);
 



function addItem(e) {
     
    
    // get value
    
    let newItem = itemValue.value;;

    let li = document.createElement('li');
    li.className = 'item';
    li.appendChild(document.createTextNode(newItem));

    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    listE.appendChild(li);

 
 

}


function removeItem(e) {
    console.log('aa')
     if(e.target.classList.contains('delete')) {
         if(confirm('are You Sure to delete?')) {
             var li = e.target.parentElement;
             listE.removeChild(li);
             console.log('1')
         }
     }
    
}



function filterItems(e) {
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