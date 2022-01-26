'use strict';



let employeeForm = document.getElementById('employeeForm');
let employeeSec = document.getElementById('employee');

function Employee(employeeID, fullName, department, level,imgurl) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imgurl = imgurl;  
    this.salary = 0;
}

Employee.prototype.newEmployeeID = function(){
    this.employeeID = getRndInteger(1000,9999);
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


Employee.prototype.render = function () {
    let div = document.createElement('div');
    employeeSec.appendChild(div);


    let img = document.createElement('img');
    div.appendChild(img);
    img.setAttribute('src',this.imagePath);
    img.setAttribute('alt',this.name);

    // let img = document.createElement('img');
    // div.appendChild(img);
    // img.setAttribute('src',this.imgurl);
    // img.setAttribute('alt',this.fullName);
//     if(this.imgurl != ''){
//     img.setAttribute('src',this.imgurl);
//     img.setAttribute('alt',this.fullName);
//  }else{
//       img.setAttribute('src', this.imgurl);
//     img.setAttribute('alt',this.fullName);
//     // }
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
// function generateUniqId(num)
// {
// let n = 1;
// let string = "" + num;
// let pad = "0000";
// n= pad.substring(0, pad.length-string.length)+ string;
// num++;
//     return n;
// }

function handelSubmit(event){
    event.preventDefault();
    let fullName = event.target.name.value;

    let department = event.target.department.value;

    let level = event.target.level.value;
    
    let imgurl = event.target.imgurl.value;
    ///
    //let id = generateUniqId();

    let newEmplouee = new Employee(fullName, department, level, imgurl);

    newEmplouee.newEmployeeID();
    newEmplouee.newSalary();
    //svae to local storage
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