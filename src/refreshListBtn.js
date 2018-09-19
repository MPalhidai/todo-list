const refreshListBtn = (location, listName) => {
  let element = document.createElement('button');
  element.innerHTML = "New List";
  element.setAttribute("class","btn btn-outline-danger");


  const alert = () => {
    document.querySelector('.alert').setAttribute("style", "display: block;");
  }

  const deleteList = () => {
    let list = document.getElementById(listName);
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
    document.querySelector('.alert').setAttribute("style", "display: none;")
  }

  element.addEventListener("click", () => {alert()});
  document.querySelector('.alert-link').addEventListener("click", () => {deleteList()});
  location.insertAdjacentElement("beforeend", element);
}

export default refreshListBtn;
