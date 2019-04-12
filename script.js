$(document).ready(documentReady);
//create employee array
const employeeArray = [];
function documentReady(){
    console.log('jQuery');
    //handle Submit button click
    $('#submitButton').on('click',submitClick);
   
}

function addToDom () {
    console.log('in addToDom');
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

function submitClick() {
    //create employee object from input vals
    const employeeObject = {
        lastName: $('#lastName').val(),
        firstName: $('#firstName').val(),
        idNumber: $('#idNumber').val(),
        jobTitle: $('#jobTitle').val(),
        annualSalary: parseFloat($('#annualSalary').val())
    }
    console.log('submit button clicked');

    employeeArray.push(employeeObject);
    // console.log(employeeObject);
    console.log(employeeArray);
    
    addToDom();
}




//add object to array
//display employee array on DOM

//display monthly costs
    //loop through employee array
    //take annual salary from each employee object, divide by 12, and add
    //display monthly total
    //if total>20k, change background to red

//handle delete button click
//create employee object from input vals
//remove object from array
//display new employee array on DOM


