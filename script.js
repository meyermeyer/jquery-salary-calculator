$(document).ready(documentReady);

function documentReady(){
    console.log('jQuery');
    //handle Submit button click
    $('#submitButton').on('click',submit)

//create employee array

//create employee object from input vals

}

function submit() {
    let employeeArray = [];
    let employeeObject = {
        lastName: $('#lastName').val(),
        firstName: $('#firstName').val(),
        idNumber: $('#idNumber').val(),
        jobTitle: $('#jobTitle').val(),
        annualSalary: parseFloat($('#annualSalary').val())
    }
    console.log('submit button clicked');
    employeeArray.push(employeeObject);
    console.log(employeeObject);
    
    

    
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


