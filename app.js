




function Add(){
    var todo = document.getElementById('todo-item');

  // textnode created with li
    var txtnode = document.createTextNode(todo.value);
    var li = document.createElement('li')
    li.appendChild(txtnode);

  // delete button
    var dltbtn = document.createElement('button');
    var dlttxt = document.createTextNode("DELETE");
    dltbtn.appendChild(dlttxt);
    dltbtn.setAttribute("onclick","deleteItem(this)");


  // edit button
    var editbtn = document.createElement('button');
    var edittxt = document.createTextNode('EDIT');
    editbtn.appendChild(edittxt);
    editbtn.setAttribute("onclick","editItem(this)");

    li.appendChild(editbtn);
    li.appendChild(dltbtn);

    var list = document.getElementById('li');
    list.appendChild(li);



    todo.value = "";

}
function deleteItem(e){
    e.parentNode.remove();
}

function editItem(e){
  var val =   e.parentNode.firstChild.nodeValue;
    var y = prompt("enter new value",val);
    e.parentNode.firstChild.nodeValue = y;
}

function deleteAll(){
  document.getElementById('li');
  li.innerHTML = "";
}
