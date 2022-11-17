function newTask(){

    // Dom api references
    // 1. get the newTask element/inpu by its own id
    var newTaskInput = document.getElementById("newTask").value;

    var task = document.getElementById("task");
    
    // 2. create an if statement to prevent HTML Characters
    if(newTaskInput.includes('>' || '<')){
        document.getElementById("error").style.display ="Block";
    }

    // 3. create a new li element using createElement dom api
    var li = document.createElement('li');

    // 4. create a textnode (save this to a variable)
    var textNode = document.createTextNode("Have a Wonderful Day");
    
    // 5. append this variable to the <li> variable by using .appendChild
    li.appendChild(textNode);

    // 6. Append your new list to the HTML unordered list
    task.appendChild(li);
}

//Calling the function
newTask();