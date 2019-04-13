$(document).ready(documentReady);
//create employee array
const employeeArray = [];
function documentReady(){
    console.log('jQuery');
    //handle Submit button click
    $('#submitButton').on('click',submitInputs);
   
}
//display employee array on DOM
function addToDom () {
    // console.log('in addToDom'); //confirming funtion is running
    $('#formInfo table tbody tr').empty();

    //loop through employeeArray
    for (i=0; i<employeeArray.length; i++) {
    
    $('#formInfo table tbody').append(`<tr>
        <td>${employeeArray[i].lastName}</td>
        <td>${employeeArray[i].firstName}</td>
        <td>${employeeArray[i].idNumber}</td>
        <td>${employeeArray[i].jobTitle}</td>
        <td>${employeeArray[i].annualSalary}</td>
        </tr>`);
    }
}

//display monthly costs
function displayBudget() {
    console.log('in displayBudget'); //confirming funtion is running
    let annualTotal = 0;
    //loop through employee array
    for (i = 0; i < employeeArray.length; i++) {
        annualTotal += employeeArray[i].annualSalary;
    }
    //take annual salary from each employee object, divide by 12, and add
    
    let monthlyTotal = annualTotal / 12;
    let monthlyTotalWithDec = monthlyTotal.toFixed(2); //makes the number show 2 decimal places -- still need to figure out commas
    // console.log(annualTotal);
    // console.log(monthlyTotal);
    //display monthly total
    $('#totalMonthlyBudget').replaceWith(`<p id="totalMonthlyBudget">Total Monthly: $${monthlyTotalWithDec}</p>`);
    //if total>20k, change background to red
    if (monthlyTotal > 20000) {
        console.log('change background color');
        
        $('#totalMonthlyBudget').replaceWith(`<p id="totalMonthlyBudget">Total Monthly: <span class="red">$${monthlyTotalWithDec}</span></p>`);
    }
}

    
   

function submitInputs() {
    
    //create employee object from input vals
    const employeeObject = {
        lastName: $('#lastName').val(),
        firstName: $('#firstName').val(),
        idNumber: $('#idNumber').val(),
        jobTitle: $('#jobTitle').val(),
        annualSalary: parseFloat($('#annualSalary').val())
    }
    // console.log('submit button clicked');
    //clear inputs
    $('#lastName').val("");
    $('#firstName').val("");
    $('#idNumber').val("");
    $('#jobTitle').val("");
    $('#annualSalary').val("");

    //add object to array
    employeeArray.push(employeeObject);
    displayBudget(); //call display budget function
    // console.log(employeeObject); //testing that object is created properly
    // console.log(employeeArray); //testing object is pushed to array
    addToDom(); //run addToDom to append table with updated array
}









//handle delete button click
//create employee object from input vals
//remove object from array
//display new employee array on DOM


