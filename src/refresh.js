//make this a universal list deleter by passing in the class name of the li's to be deleted
//need to remove header target
const refreshListBtn = () => {
  let head = document.getElementById('header');
  let element = document.createElement('button');
  element.innerHTML = "New List";
  element.class = "delete";

  const deleteList = () => {
    let ul = document.getElementById('project-list');
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  }

  element.addEventListener("click", () => {deleteList()});
  head.insertAdjacentElement("beforeend", element);
}

export default refreshListBtn;
