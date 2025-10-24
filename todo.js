let todo = [];

document.getElementById("add").addEventListener("click", () => {
    let values = document.getElementById("task").value;

    if (values == " ")
        return alert("Enter a task Name")
    todo.push(values)

})



















// str = '';
// str += `<p>${values} <button id="delete">Delete</button></p>`
// document.getElementById("out").innerHTML = str