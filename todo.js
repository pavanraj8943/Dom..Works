let Todo = [];
let filterType = "all";

document.getElementById("add").addEventListener("click", () => {
  let task = document.getElementById("task").value.trim();
  if (task === "") return alert("Enter your task name");
  Todo.unshift({ name: task, completed: false });
  document.getElementById("task").value = "";
  display();
});

function display() {
  let str = "";
  for (let i = 0; i < Todo.length; i++) {
    if (
      (filterType === "completed" && !Todo[i].completed) ||
      (filterType === "pending" && Todo[i].completed)
    ) {
      continue;
    }

    str += `
      <tr>
        <td>${i + 1}</td>
        <td>
          <input type="checkbox"
            ${Todo[i].completed ? "checked" : ""}
            onchange="toggleTask(${i})">
        </td>
        <td style="text-decoration: ${
          Todo[i].completed ? "line-through" : "none"
        }; color: "balck" ${Todo[i].completed ? "#aaa" : "#fff"};">
          ${
            Todo[i].editing
              ? `<input type="text" id="edittext-${i}" value="${Todo[i].name}">`
              : `<span>${Todo[i].name}</span>`
          }
        </td>
        <td>
          ${
            Todo[i].editing
              ? `<button class="savey" onclick="saveTask(${i})">Save</button>`
              : `<button class="edite" onclick="editTask(${i})">Edit</button>`
          }
        </td>
        <td><button class="deletey" onclick="deleteTask(${i})">Delete</button></td>
      </tr>
    `;
  }
  document.getElementById("display").innerHTML = str;
}

function toggleTask(index) {
  Todo[index].completed = !Todo[index].completed;
  display();
}

function editTask(index) {
  Todo[index].editing = true;
  display();
}

function saveTask(index) {
  let newText = document.getElementById(`edittext-${index}`).value.trim();
  if (newText !== "") {
    Todo[index].name = newText;
  }
  Todo[index].editing = false;
  display();
}

function deleteTask(index) {
  if (confirm(`Are you sure you want to delete "${Todo[index].name}"?`)) {
    Todo.splice(index, 1);
    display();
  }
}

let buttons = document.querySelectorAll(".btn button");
for (let btn of buttons) {
  btn.addEventListener("click", () => {
    filterType = btn.textContent.toLowerCase();
    for (let b of buttons) b.classList.remove("active");
    btn.classList.add("active");
    display();
  });
}
