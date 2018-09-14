import _ from 'lodash';
import header from './header';
import Project from './projects';
import refreshListBtn from './refreshListBtn';
import addLiBtn from './addLiBtn';
import '../dist/assets/styles.css';

//header
let top = document.getElementById('header');
top.innerHTML = header;
refreshListBtn(top,'Project');
addLiBtn(top,'Project');
//main
