import { format } from 'date-fns'

const date = require('date-fns');

const dates = date.format(new Date(), 'dd/MM/yyyy');

//console.log(dates);


// storage variables
let project = [];
let listOne = [];
let listTwo = [];
let listThree = [];
let listFour = [];
let listFive = [];
let listSix = [];
let listSeven = [];
let listEight = [];
let listNine = [];
let listTen = [];

//Project dom input/output & click output
function dom(){
    const pname = document.getElementById('pname').value;
    const dname = document.getElementById('dname').value;
    const div = document.querySelector('.info');
    let li = document.createElement('li');
    div.appendChild(li);
    li.textContent = pname + " " + dname;
    saveProject(li.textContent);
    const divs = document.querySelector('.info2');
    li.onclick = function (){
        divs.textContent = li.textContent;
// click project to display list section
        const box = document.querySelector('.details');
        project.forEach(match);
function match(){
    if(divs.textContent == project[0]){
        document.querySelector('.details').innerHTML = dates + "<br/>" + listOne.join('<br/>');
    } else if (li.textContent == project[1]){
        document.querySelector('.details').innerHTML = dates + "<br/>" + listTwo.join('<br/>');
    } else if (li.textContent == project[2]){
        document.querySelector('.details').innerHTML = dates + "<br/>" + listThree.join('<br/>');
    } else if (li.textContent == project[3]){
        document.querySelector('.details').innerHTML = dates + "<br/>" + listFour.join('<br/>');
    } else if (li.textContent == project[4]){
        document.querySelector('.details').innerHTML = dates + "<br/>" + listFive.join('<br/>');
    } else if (li.textContent == project[5]){
        document.querySelector('.details').innerHTML = dates + "<br/>" + listSix.join('<br/>');
    } else if (li.textContent == project[6]){
        document.querySelector('.details').innerHTML = dates + "<br/>" + listSeven.join('<br/>');
    } else if (li.textContent == project[7]){
        document.querySelector('.details').innerHTML = dates + "<br/>" + listEight.join('<br/>');
    } else if (li.textContent == project[8]){
        document.querySelector('.details').innerHTML = dates + "<br/>" + listNine.join('<br/>');
    } else if (li.textContent == project[9]){
        document.querySelector('.details').innerHTML = dates + "<br/>" + listTen.join('<br/>');
    }
    
}
    }
    
    project.push(li.textContent);

    // storage
    // let localData;
    // localStorage.setItem('project', JSON.stringify(project));
    // localData = JSON.parse(localStorage.getItem('project'));
    // console.log(localData);
}

//storage
function saveProject(data){
    if(localStorage.getItem('project') === null){
        project = [];
    } else {
        project = JSON.parse(localStorage.getItem('project'));
    }
    project.push(data);
    localStorage.setItem('project', JSON.stringify(project));
}
function getProject(data){
    if(localStorage.getItem('project') === null){
        project = [];
    } else {
        project = JSON.parse(localStorage.getItem('project'));
    }
    project.forEach(function(data){
        const divs = document.querySelector('.info2');
        const div = document.querySelector('.info');
        let li = document.createElement('li');
        div.appendChild(li);
        li.textContent = data;
        li.onclick = function (){
        divs.textContent = data;
        //link project to list in local storage
            if(divs.textContent == project[0]){
                document.querySelector('.details').innerHTML = JSON.parse(localStorage.getItem('listOne')).join("<br/>");
            } else if (divs.textContent == project[1]){
                document.querySelector('.details').innerHTML = JSON.parse(localStorage.getItem('listTwo')).join("<br/>");
            } else if (divs.textContent == project[2]){
                document.querySelector('.details').innerHTML = JSON.parse(localStorage.getItem('listThree')).join("<br/>");
            } else if (divs.textContent == project[3]){
                document.querySelector('.details').innerHTML = JSON.parse(localStorage.getItem('listFour')).join("<br/>");
            } else if (divs.textContent == project[4]){
                document.querySelector('.details').innerHTML = JSON.parse(localStorage.getItem('listFive')).join("<br/>");
            } else if (divs.textContent == project[5]){
                document.querySelector('.details').innerHTML = JSON.parse(localStorage.getItem('listSix')).join("<br/>");
            } else if (divs.textContent == project[6]){
                document.querySelector('.details').innerHTML = JSON.parse(localStorage.getItem('listSeven')).join("<br/>");
            } else if (divs.textContent == project[7]){
                document.querySelector('.details').innerHTML = JSON.parse(localStorage.getItem('listEigth')).join("<br/>");
            } else if (divs.textContent == project[8]){
                document.querySelector('.details').innerHTML = JSON.parse(localStorage.getItem('listNine')).join("<br/>");
            } else if (divs.textContent == project[9]){
                document.querySelector('.details').innerHTML = JSON.parse(localStorage.getItem('listTen')).join("<br/>");
            }
        }
    })
        }

function saveList(data){
    if(localStorage.getItem('listOne') === null){
        listOne = [];
    } else {
        listOne = JSON.parse(localStorage.getItem('listOne'));
    }
    listOne.push(data);
    localStorage.setItem('listOne', JSON.stringify(listOne));
}

function getList(data){
    if(localStorage.getItem('listOne') === null){
        listOne = [];
    } else {
        listOne = JSON.parse(localStorage.getItem('listOne'));
    }
    listOne.forEach(function(data){
        const box = document.querySelector('.details');
        const infot = document.createElement('li');
        box.appendChild(infot);
        infot.textContent = data;
    })
}
//2
function saveList2(data){
    if(localStorage.getItem('listTwo') === null){
        listTwo = [];
    } else {
        listTwo = JSON.parse(localStorage.getItem('listTwo'));
    }
    listTwo.push(data);
    localStorage.setItem('listTwo', JSON.stringify(listTwo));
}
//3
function saveList3(data){
    if(localStorage.getItem('listThree') === null){
        listThree = [];
    } else {
        listThree = JSON.parse(localStorage.getItem('listThree'));
    }
    listThree.push(data);
    localStorage.setItem('listThree', JSON.stringify(listThree));
}
//4
function saveList4(data){
    if(localStorage.getItem('listFour') === null){
        listFour = [];
    } else {
        listFour = JSON.parse(localStorage.getItem('listFour'));
    }
    listFour.push(data);
    localStorage.setItem('listFour', JSON.stringify(listFour));
}
//5
function saveList5(data){
    if(localStorage.getItem('listFive') === null){
        listFive = [];
    } else {
        listFive = JSON.parse(localStorage.getItem('listFive'));
    }
    listFive.push(data);
    localStorage.setItem('listFive', JSON.stringify(listFive));
}
//6
function saveList6(data){
    if(localStorage.getItem('listSix') === null){
        listSix = [];
    } else {
        listSix = JSON.parse(localStorage.getItem('listSix'));
    }
    listSix.push(data);
    localStorage.setItem('listSix', JSON.stringify(listSix));
}
//7
function saveList7(data){
    if(localStorage.getItem('listSeven') === null){
        listSeven = [];
    } else {
        listSeven = JSON.parse(localStorage.getItem('listSeven'));
    }
    listSeven.push(data);
    localStorage.setItem('listSeven', JSON.stringify(listSeven));
}
//8
function saveList8(data){
    if(localStorage.getItem('listEight') === null){
        listEight = [];
    } else {
        listEight = JSON.parse(localStorage.getItem('listEight'));
    }
    listEight.push(data);
    localStorage.setItem('listEight', JSON.stringify(listEight));
}
//9
function saveList9(data){
    if(localStorage.getItem('listNine') === null){
        listNine = [];
    } else {
        listNine = JSON.parse(localStorage.getItem('listNine'));
    }
    listNine.push(data);
    localStorage.setItem('listNine', JSON.stringify(listNine));
}
//10
function saveList10(data){
    if(localStorage.getItem('listTen') === null){
        listTen = [];
    } else {
        listTen = JSON.parse(localStorage.getItem('listTen'));
    }
    listTen.push(data);
    localStorage.setItem('listTen', JSON.stringify(listTen));
}

// List dom input
function con(){
    const pname = document.getElementById('pname').value;
    const dname = document.getElementById('dname').value;
    const div = document.querySelector('.info2');
    div.textContent = pname + " " + dname;
}

// Clear pop-up text
function clear(){
    document.getElementById('pname').value = '';
    document.getElementById('dname').value = '';
    const box = document.querySelector('.details');
    box.textContent = '';
}

// list details boxes
function box(){
    const box = document.querySelector('.details');
    const info = document.createElement('div');
    info.classList.add('box');
    const another = document.createElement('div');
    another.classList.add('box2');
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    another.appendChild(x);
    const but = document.createElement('BUTTON');
    but.textContent = 'Remove';
    but.classList.add('domRemove');
    but.onclick = function (){
        info.style.display = 'none';
    }
    // put box content to page
    const butt = document.createElement('BUTTON');
    butt.textContent = 'Add';
    butt.classList.add('domDetails');
    butt.onclick = function (){
        const infot = document.createElement('li');
        const divs = document.querySelector('.info2');
        box.appendChild(infot);
        infot.textContent = x.value;
        info.style.display = 'none';

//Group list outputs to match projects 
        if(divs.textContent == project[0]){
            //listOne.push(x.value);
            saveList(x.value);
        }else if(divs.textContent == project[1]){
            //listTwo.push(x.value);
            saveList2(x.value);
        }else if(divs.textContent == project[2]){
            saveList3(x.value);
        }else if(divs.textContent == project[3]){
            saveList4(x.value);
        }else if(divs.textContent == project[4]){
            saveList5(x.value);
        }else if(divs.textContent == project[5]){
            saveList6(x.value);
        }else if(divs.textContent == project[6]){
            saveList7(x.value);
        }else if(divs.textContent == project[7]){
            saveList8(x.value);
        }else if(divs.textContent == project[8]){
            saveList9(x.value);
        }else if(divs.textContent == project[9]){
            saveList10(x.value);
        }
        
        
    }

    info.appendChild(another);
    box.appendChild(info);
    info.appendChild(but);
    info.appendChild(butt);
}
          
export {dom, con, clear, box, getProject, getList};
