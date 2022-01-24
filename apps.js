'use strict';

function employee(employeeID, fullName, department, level, salary)
{
this.employeeID = employeeID;
this.fullName = fullName;
this.department = department;
this.level = level;
this.imagePath = './asma/${this.name}.png';
this.salary = salary;
}

employee.prototype.newSalary = function(){
 let clSalary;
 if(this.level == 'senior'){
clSalary = getRndInteger(1500, 2000);
 }else if (this.level == 'Mid-Senior'){
    clSalary = getRndInteger(1000, 1500);
 }else if (this.level == 'Junior'){
    clSalary = getRndInteger(500, 1000);
 }

 clSalary = clSalary - (clSalary * 0.075);
 return clSalary;
}
 
function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min ;
  
}

employee.prototype.render = function(){
    document.write(`<p> ${this.fullName} the salary: ${this.newSalary()}</P>`)
}

const ghaziSamer = new employee ('1000', 'Ghazi Samer', 'Administration', 'Senior');
ghaziSamer.render();

const lanaAli = new employee('1001', 'Lana Ali', 'Finance', 'Senior');
lanaAli.render();

const tamaraAyoub = new employee('1002', 'Tamara Ayoub', 'Marketing', 'Senior');
tamaraAyoub.render();
const safiWalid = new employee('1003', 'Safi Walid', 'Administration', 'Mid-Senior');
safiWalid.render();
