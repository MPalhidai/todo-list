const refreshListBtn = (location, listName) => {
  let element = document.createElement('button');
  element.innerHTML = "New List";
  element.setAttribute("class","btn btn-outline-danger");
  element.setAttribute("data-toggle","modal");
  element.setAttribute("data-target","#deleteModal");

  const deleteList = () => {
    let list = document.getElementById(listName);
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }

  document.getElementById('removeProjects').addEventListener("click", () => {deleteList()});
  location.insertAdjacentElement("beforeend", element);
}

export default refreshListBtn;
