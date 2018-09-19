

const projectDiv = (listName) => {
  let list = document.getElementById(listName);
  let li = document.createElement('li');
  let div = document.createElement('div');
  let title = document.createElement('h6');
  title.innerHTML = document.getElementById('Project_Name').value;
  let date = document.createElement('p');
  date.innerHTML = document.getElementById('Due_Date').value;
  div.insertAdjacentElement("beforeend", title);
  div.insertAdjacentElement("beforeend", date);
  li.insertAdjacentElement("beforeend", div);
  list.appendChild(li);
}

export default projectDiv;
