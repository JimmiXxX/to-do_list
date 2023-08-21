let todoInput = document.querySelector('.todo_input'),
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
        saveData();
    }

    todoList.addEventListener("click", function (check)
    {
        if(check.target.tagName === "LI"){
            check.target.classList.toggle("checked");
            saveData();
        }
        else if(check.target.tagName === "SPAN")
        {
            check.target.parentElement.remove();
            saveData();
        }
    }, false);

    function saveData()
    {
        localStorage.setItem("data", todoList.innerHTML)
    }

    function showTask()
    {
        todoList.innerHTML = localStorage.getItem("data")
    }
    showTask();