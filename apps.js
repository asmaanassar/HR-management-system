'use strict';



let employeeForm = document.getElementById('employeeForm');
let employeeSec = document.getElementById('employee');

function employee(employeeID, fullName, department, level,imgurl, salary) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imgurl = imgurl  
    this.salary = salary;
}

employee.prototype.newEmployeeID = function(){
    this.employeeID = getRndInteger(1000,9999);
}

employee.prototype.newSalary = function () {
    
    if (this.level == 'Senior') {
        this.salary = getRndInteger(1500, 2000);
    } else if (this.level == 'Mid-Senior') {
        this.salary = getRndInteger(1000, 1500);
    } else if (this.level == 'Junior') {
        this.salary = getRndInteger(500, 1000);
    }
    
}


employee.prototype.render = function () {
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
    let p = document.createElement('p');
    div.appendChild(p);
    p.textContent = `Name: ${this.fullName} - ID: ${this.employeeID}`

    let p2 =document.createElement('p');
    div.appendChild(p2);
    p2.textContent =`Depertment: ${this.department} - Level: ${this.level}`

    let p3 =document.createElement('p');
    div.appendChild(p3);
    p3.textContent= `${this.salary}`

}


function handelSubmit(event){
    event.preventDefault();
    let fullName = event.target.name.value;

    let department = event.target.department.value;

    let level = event.target.level.value;
    
    let imgurl = event.target.imgurl.value;

    let newEmplouee = new employee(0,fullName, department, level, imgurl);

    newEmplouee.newEmployeeID();
    newEmplouee.newSalary();
    newEmplouee.render();
}




function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

employeeForm.addEventListener('submit', handelSubmit);
