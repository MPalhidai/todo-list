const addLiBtn = (location, listName) => {
  let element = document.createElement('button');
  element.innerHTML = `New ${listName}`;
  element.setAttribute("class","btn btn-outline-primary");
  element.setAttribute("data-toggle","modal");
  element.setAttribute("data-target","#projectModal");

  const addLi = () => {
    let list = document.getElementById(listName);
    let li = document.createElement('li');

    li.innerHTML = "Add Project";
    list.appendChild(li);
  }

  document.getElementById('addProject').addEventListener("click", () => {addLi()});
  location.insertAdjacentElement("beforeend", element);
}

export default addLiBtn;
