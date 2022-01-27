'use strict';



let employeeForm = document.getElementById('employeeForm');
let employeeSec = document.getElementById('employee');

function Employee(employeeID, fullName, department, level, imgurl, salary) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imgurl = imgurl;
    this.salary = 0;
}

Employee.prototype.newEmployeeID = function () {
    this.employeeID = getRndInteger(1000, 9999);
}

Employee.prototype.newSalary = function () {
    let netsalary;

    if (this.level == 'Senior') {
        this.salary = getRndInteger(1500, 2000);
    } else if (this.level == 'Mid-Senior') {
        this.salary = getRndInteger(1000, 1500);
    } else if (this.level == 'Junior') {
        this.salary = getRndInteger(500, 1000);
    }

    netsalary = this.salary - (this.salary * 0.075);
    return netsalary;
}


Employee.prototype.render = function () {
    let div = document.createElement('div');
    employeeSec.appendChild(div);


    let img = document.createElement('img');
    div.appendChild(img);
    if(this.imgurl != ''){
    img.setAttribute('src',this.imgurl);
    img.setAttribute('alt',this.fullName);
    }else{
        img.setAttribute('src',`./photo/${this.fullName}.jpg`);
        img.setAttribute('alt',this.fullName);
    }

    let p1 = document.createElement('p');
    div.appendChild(p1);
    p1.textContent = `Name: ${this.fullName}`

    let p2 = document.createElement('p');
    div.appendChild(p2);
    p2.textContent = `ID: ${this.employeeID}`

    let p3 = document.createElement('p');
    div.appendChild(p3);
    p3.textContent = `Depertment: ${this.department}`


    let p4 = document.createElement('p');
    div.appendChild(p4);
    p4.textContent = `Level: ${this.level}`


    let p5 = document.createElement('p');
    div.appendChild(p5);
    p5.textContent = `${this.salary}`

}

function handelSubmit(event) {
    event.preventDefault();
    let fullName = event.target.name.value;

    let department = event.target.department.value;

    let level = event.target.level.value;

    let imgurl = event.target.imgurl.value;


    let newEmplouee = new Employee(fullName, department, level, imgurl);
    newEmplouee.render();

    newEmplouee.newEmployeeID();
    newEmplouee.newSalary();
    newEmplouee.render();
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// function generateUniqId(num)
//  {
//  let n = 1;
//  let string = " " + num;
// let pad = "0000";
//  n= pad.substring(0, pad.length-string.length)+ string;
//  num++;
//      return n;
// }

employeeForm.addEventListener('submit', handelSubmit)