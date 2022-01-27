'use strict';


function Employee(employeeID, fullName, department, level) {



let employeeForm = document.getElementById('employeeForm');
let employeeSec = document.getElementById('employee');
let allEmployee = [];
checkLocalAndPush();


function Employee(employeeID, fullName, department, level, salary) {


function Employee(employeeID, fullName, department, level, imgurl, salary) {

function Employee(employeeID, fullName, department, level,imgurl) {

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

    //this.imagePath = './image/${this.name}.png';
    this.salary = 0;


    this.imagePath = `./image/${this.fullName}.jpg`;
    this.salary = 0;
}

Employee.prototype.newEmployeeID = function () {
    this.employeeID = getRndInteger(1000, 9999);
}

Employee.prototype.newSalary = function () {


    this.imgurl = imgurl;  
    this.salary = 0;
}

Employee.prototype.newEmployeeID = function(){
    this.employeeID = getRndInteger(1000,9999);

}

Employee.prototype.newSalary = function () {
    

Employee.prototype.newSalary = function () {
    let netSalary;
    if (this.level == 'Senior') {
        netSalary = getRndInteger(1500, 2000);
    } else if (this.level == 'Mid-Senior') {
        netSalary = getRndInteger(1000, 1500);
    } else if (this.level == 'Junior') {
        netSalary = getRndInteger(500, 1000);

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





    netSalary = netSalary - (netSalary * 0.075);
    return netSalary;


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

Employee.prototype.render = function () {
    document.write(`<p> ${this.fullName} the salary: ${this.newSalary()} </p>`)
}

const ghaziSamer = new Employee('1000', 'Ghazi Samer', 'Administration', 'Senior',);
ghaziSamer.render();

const lanaAli = new Employee('1001', 'Lana Ali', 'Finance', 'Senior');
lanaAli.render();

const tamaraAyoub = new Employee('1002', 'Tamara Ayoub', 'Marketing', 'Senior');
tamaraAyoub.render();

const safiWalid = new Employee('1003', 'Safi Walid', 'Administration', 'Mid-Senior');
safiWalid.render();

const omarZaid = new Employee('1004', 'Omar Zaid', 'Development', 'Senior');
omarZaid.render();

const ranaSaleh = new Employee('1005', 'Rana Saleh', 'Development', 'Junior');
ranaSaleh.render();

const hadiAhmad = new Employee('1006', 'Hadi Ahmad', 'Finance', 'Mid-Senior');
hadiAhmad.render();


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

