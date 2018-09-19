const addLiBtn = (location, listName) => {
  let element = document.createElement('button');
  element.innerHTML = `New ${listName}`;
  element.setAttribute("class","btn btn-outline-primary");
  element.setAttribute("data-toggle","modal");
  element.setAttribute("data-target","#projectModal");
  location.insertAdjacentElement("beforeend", element);
}

export default addLiBtn;
