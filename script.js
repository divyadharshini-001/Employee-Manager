let employees = [];
document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let salary = Number(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value.trim();
    if(name === "" || salary <= 0 || dept === ""){
        alert("Enter valid details");
        return;
    }
    let emp = {name, salary, department:dept};
    employees.push(emp);
    let json = JSON.stringify(emp);
    console.log("JSON:", json);
    document.getElementById("form").reset();
});

const showEmployees = () => {
    let copy = [...employees];
    let output = "";
    for(let emp of copy){
        let {name, salary, department} = emp;
        let upper = name.toUpperCase();
        let status = salary > 30000 ? "High Salary" : "Low Salary";
        output += `Name: ${upper} | Salary: ${salary} | Dept: ${department} | ${status} <br>`;
    }
    document.getElementById("output").innerHTML = output;
};

function deleteLast(){
    employees.pop();
    showEmployees();
}

function deleteFirst(){
    employees.shift();
    showEmployees();
}

let salaries = employees.map(emp => emp.salary);
console.log("Salaries:", salaries);

let high = employees.filter(emp => emp.salary > 30000);
console.log("High Salary:", high);

function showAverage(){
    let total = employees.reduce((sum, emp)=> sum + emp.salary, 0);
    let avg = employees.length ? total / employees.length : 0;
    document.getElementById("output").innerHTML =
        `Total Salary: ${total} <br> Average Salary: ${avg}`;
}

const sumSalaries = (...nums) => nums.reduce((a,b)=>a+b,0);
console.log(sumSalaries(10000,20000,30000));

function fakeLoad(){
    return new Promise(resolve=>{
        document.getElementById("output").innerHTML = "Loading...";
        setTimeout(()=>resolve(),2000);
    });
}

async function loadAPI(){
    await fakeLoad();
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    let output = "";
    data.forEach(user=>{
        output += `Name: ${user.name.toUpperCase()} | Salary: 30000 | Dept: API <br>`;
    });
    document.getElementById("output").innerHTML = output;
}

let obj = {name:"Test", salary:10000};
let jsonText = JSON.stringify(obj);
let backToObj = JSON.parse(jsonText);
console.log(backToObj);


