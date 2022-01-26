'use strict';

function employee(employeeID, fullName, department, level) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    //this.imagePath = './image/${this.name}.png';
    this.salary = 0;
}


employee.prototype.newSalary = function () {
    let netSalary;
    if (this.level == 'Senior') {
        this.salary = getRndInteger(1500, 2000);
    } else if (this.level == 'Mid-Senior') {
        this.salary = getRndInteger(1000, 1500);
    } else if (this.level == 'Junior') {
        this.salary = getRndInteger(500, 1000);
    }

    netSalary = this.salary - (this.salary * 0.075);
    return netSalary;
}



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

employee.prototype.render = function () {
    document.write(`<p> ${this.fullName} the salary: ${this.newSalary()} </p>`)
}

const ghaziSamer = new employee('1000', 'Ghazi Samer', 'Administration', 'Senior', );
ghaziSamer.render();

const lanaAli = new employee('1001', 'Lana Ali', 'Finance', 'Senior');
lanaAli.render();

const tamaraAyoub = new employee('1002', 'Tamara Ayoub', 'Marketing', 'Senior');
tamaraAyoub.render();

const safiWalid = new employee('1003', 'Safi Walid', 'Administration', 'Mid-Senior');
safiWalid.render();

const omarZaid = new employee('1004', 'Omar Zaid', 'Development', 'Senior');
omarZaid.render();

const ranaSaleh = new employee('1005', 'Rana Saleh', 'Development', 'Junior');
ranaSaleh.render();

const hadiAhmad = new employee('1006', 'Hadi Ahmad', 'Finance', 'Mid-Senior');
hadiAhmad.render();