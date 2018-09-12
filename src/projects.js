const Project = () => {
  let list = document.getElementById("project-list")
  let element = document.createElement('li');
  element.innerHTML = "Project"; // change this to the project node
  element.class = "project";


  list.appendChild(element);
}

export default Project;
