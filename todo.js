let todo = [];

document.getElementById("add").addEventListener("click", () => {
    let values = document.getElementById("task").value;

    if (values == "") {
        return alert("Enter a task Name")

    }
    todo.push(values)
    document.getElementById("task").value = ""
    displayTask()
})


function displayTask() {
    let str = ``;
    for (const [index, task] of todo.entries()) {
        str += `
        <tr>
            <td>${index + 1}</td>
            <td>${task}</td>
            <td><button id="edit">Edit</button></td>
            <td><button id="delete" onclick="deletes(${index})">Delete</button></td>
        </tr>
        `
    }
    document.getElementById("display").innerHTML = str
}
function deletes(index) {
    let tasks = todo[index];
    if (confirm(`Are you sure "${index + 1},${tasks}" want to delete?`)) {
        // todo.splice(index,1);
        todo = todo.filter((task, i)=> i !==index)
        displayTask()
    }
}
