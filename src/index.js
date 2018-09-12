import _ from 'lodash';
import header from './header';
import Project from './projects';
import refreshListBtn from './refresh';
import '../dist/assets/styles.css';

//header
let top = document.getElementById('header');
top.innerHTML = header;
refreshListBtn();

//main
let add_project = document.querySelector('.add-project');
let new_project = document.createElement("button");
new_project.innerHTML = "Add Project";
new_project.addEventListener("click", Project);
add_project.appendChild(new_project);
