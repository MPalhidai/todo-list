import _ from 'lodash';
import header from './header';
import refreshListBtn from './refreshListBtn';
import addLiBtn from './addLiBtn';
import projectDiv from './projectDiv';
import '../dist/assets/styles.css';

//header
let top = document.getElementById('header');
top.innerHTML = header;
refreshListBtn(top, 'Project');
addLiBtn(top, 'Project');
//main
document.querySelector('#addProject').addEventListener("click", () => {projectDiv('Project')});
