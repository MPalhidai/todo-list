const projectDiv = (listName) => {

  const addTask = () => {
    let new_task = document.createElement('li');
    new_task.innerHTML = input.value;
    let subtract = document.createElement('button');
    subtract.setAttribute("class","btn btn-outline-danger float-right");
    subtract.addEventListener("click", () => { task_list.removeChild(new_task) });
    subtract.innerHTML = "Done"
    new_task.appendChild(subtract);
    task_list.appendChild(new_task);
  }

  let list = document.getElementById(listName);
  list.setAttribute("style", "list-style-type: none; padding: 0;")
  let li = document.createElement('li');
  li.setAttribute("class", `${listName}_box`);
  let div = document.createElement('div');
  let title = document.createElement('h2');
  title.innerHTML = document.getElementById('Project_Name').value;
  let date = document.createElement('p');
  date.innerHTML = `Due date: ${document.getElementById('Due_Date').value}`;
  let priority = document.createElement('p');
  priority.innerHTML = `Priority: ${ radioValue() }`;
  let remove = document.createElement('button');
  remove.innerHTML = "Remove";
  remove.setAttribute("class","btn btn-outline-danger float-right");
  remove.addEventListener("click", () => { list.removeChild(li) });

  let task_list = document.createElement('ol');
  task_list.setAttribute("class","task_list");
  let taskLabel = document.createElement('p');
  taskLabel.innerHTML = "Task List: ";
  let input = document.createElement('input');
  input.setAttribute("type","text");
  input.setAttribute("class","task_input float-right");
  let add = document.createElement('button');
  add.setAttribute("class","btn btn-outline-primary float-right");
  add.innerHTML = "Add";

  add.addEventListener("click", () => { addTask() });
  taskLabel.insertAdjacentElement("beforeend", add);
  taskLabel.insertAdjacentElement("beforeend", input);

  div.insertAdjacentElement("beforeend", remove);
  div.insertAdjacentElement("beforeend", title);
  div.insertAdjacentElement("beforeend", date);
  div.insertAdjacentElement("beforeend", priority);
  div.insertAdjacentElement("beforeend", taskLabel);
  div.insertAdjacentElement("beforeend", task_list);
  li.insertAdjacentElement("beforeend", div);
  list.appendChild(li);
}

const radioValue = () => {
  let radios = document.getElementsByName('options');
  let checked = ""
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      checked = radios[i].value
    }
  }
  return checked
}



export default projectDiv;
