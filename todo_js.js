let todoInput = document.querySelector('.todo_input'),
    todoButton = document.querySelector('.todo_button'),
    todoList = document.querySelector('.todo_list')
    function addList()
    {
        if(todoInput.value === '')
            alert("Введите задачу!")
        else
        {
            let li = document.createElement("li")
            li.innerHTML = todoInput.value;
            todoList.appendChild(li);
            let span = document.createElement('span')
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
        todoInput.value = "";

    }

    todoList.addEventListener("click", function (check)
    {
        if(check.target.tagName === "LI"){
            check.target.classList.toggle("checked");
        }
        else if(check.target.tagName === "SPAN")
        {
            check.target.parentElement.remove();
        }
    }, false);