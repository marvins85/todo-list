import {dom, con, clear, box, getProject, getList} from './other.js'
import './style.css'

document.addEventListener('DOMContentLoaded', getProject);
document.addEventListener('DOMContentLoaded', getList);

// add project
window.add = function(){
    document.querySelector('.pop').style.display = 'block';
 }
// cancel project
window.close = function(){
    document.querySelector('.pop').style.display = 'none';
}
// add list
window.list = function(){
   box();
}
//  close project
 window.empty = function(e){
    e.preventDefault();
    document.querySelector('.pop').style.display = 'none';
 }


// project/list pop-up dom output
window.adds = function(e){
    e.preventDefault();
    dom();
    con();
    clear();
    const box = document.createElement('div');
    box.style.display = 'none';
    window.close();
};