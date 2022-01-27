'use strict';



let employeeForm = document.getElementById('employeeForm');
let employeeSec = document.getElementById('employee');
let allEmployee = [];
checkLocalAndPush();

function Employee(employeeID, fullName, department, level, salary) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imagePath = `./image/${this.fullName}.jpg`;
    this.salary = 0;
}

Employee.prototype.newEmployeeID = function () {
    this.employeeID = getRndInteger(1000, 9999);
}

Employee.prototype.newSalary = function () {

    if (this.level == 'Senior') {
        this.salary = getRndInteger(1500, 2000);
    } else if (this.level == 'Mid-Senior') {
        this.salary = getRndInteger(1000, 1500);
    } else if (this.level == 'Junior') {
        this.salary = getRndInteger(500, 1000);
    }

}


function render(emploFromLs) {
    employeeSection.innerHTML = '';
    for (let i = 0; i < emploFromLs.length; i++) {


        let div = document.createElement('div');
        employeeSec.appendChild(div);

        let p = document.createElement('p');
        div.appendChild(p);
        p.textContent = `Name: ${this.fullName} - ID: ${this.employeeID}`


        let lu = document.createElement('ul')
        div.appendChild(ul);
        for (let j = 0; j < emploFromLs[i].department.length; j++) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = emploFromLs[i].employeeID[j]
        }
        let img = document.createElement('img');
        div.appendChild(img);
        img.setAttribute('src', emploFromLs[i].imagePath);
        img.setAttribute('alt', emploFromLs[i].name);

        let p2 = document.createElement('p');
        div.appendChild(p2);
        p2.textContent = `Depertment: ${this.department} - Level: ${this.level}`

        let p3 = document.createElement('p');
        div.appendChild(p3);
        p3.textContent = `${this.salary}`
    }




}



function handelSubmit(event) {
    event.preventDefault();
    let fullName = event.target.name.value;

    let department = event.target.department.value;

    let level = event.target.level.value;

    let newEmplouee = new Employee(0, fullName, department, level);

    allEmployee.push(newEmplouee);
    let jsonArr=toJSON();
    saveToLocal(jsonArr);
    render (readFormatLocal());

    newEmplouee.newEmployeeID();
    newEmplouee.newSalary();
    newEmplouee.render();
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkLocalAndPush() {
    if (allEmployee.length == 0) {
        let arr = readFromLocalS();
        if (arr.length != 0) {
            allEmployee = arr;
        }
    }
}


function readFromLocalS() {
    let jsonArr = localStorage.getItem('employee');
    let arr = JSON.parse(jsonArr);
    if (arr !== null) {
        return arr;
    } else {
        return [];
    }
}

function toJSON() {
    let jsonArray = JSON.stringify(allEmployee);
    return jsonArray;
}

function saveToLocalS(jsonArray) {
    localStorage.setItem('employee', jsonArray)
}

render(readFromLocalS());



employeeForm.addEventListener('submit', handelSubmit);
