$(document).ready(documentReady);
//create employee array
const employeeArray = [];
function documentReady(){
    console.log('jQuery');
    //handle Submit button click
    $('#submitButton').on('click',submitInputs);
    //handle delete button click
    $('#deleteButton').on('click', removeInputs);
   
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
        <td>$${parseFloat(employeeArray[i].annualSalary.toFixed(2)).toLocaleString('en')}</td> 
        </tr>`); //toFixed forces annual salary to display with 2 decimal places, then parseFloat to turn back into a number (from a string), then toLocaleSting('en') adds commas
    }
}

//display monthly costs
function displayBudget() {
    console.log('in displayBudget'); //confirming funtion is running
    let annualTotal = 0;
    //loop through employee array
    for (i = 0; i < employeeArray.length; i++) {
        annualTotal += parseFloat(employeeArray[i].annualSalary);
    }
    //take annual salary from each employee object, divide by 12, and add
    
    let monthlyTotal = annualTotal / 12;
    let monthlyTotalWithDec = monthlyTotal.toFixed(2); //makes the number show 2 decimal places -- still need to figure out commas
    // console.log(annualTotal);
    // console.log(monthlyTotal);
    //display monthly total
    $('#totalMonthlyBudget').replaceWith(`<p id="totalMonthlyBudget">Total Monthly: $${parseFloat(monthlyTotalWithDec).toLocaleString('en')}</p>`);
    //if total>20k, change background to red
    if (monthlyTotal > 20000) {
        console.log('change background color');
        
        $('#totalMonthlyBudget').replaceWith(`<p id="totalMonthlyBudget">Total Monthly: <span class="red">$${parseFloat(monthlyTotalWithDec).toLocaleString('en')}</span></p>`);
    }
}

function removeInputs () {
    //console.log('delete button clicked');
    
    const employeeObject = {
        lastName: $('#lastName').val(),
        firstName: $('#firstName').val(),
        idNumber: $('#idNumber').val(),
        jobTitle: $('#jobTitle').val(),
        annualSalary: parseFloat($('#annualSalary').val())
    }

//remove object from array
//loop through array
    for(i=0; i<employeeArray.length; i++) {
        //if array[i]=employeeObject splice array at index
        // console.log(employeeArray[i]);
        // console.log(employeeObject);

        if (employeeArray[i].lastName == employeeObject.lastName 
            && employeeArray[i].firstName == employeeObject.firstName 
            && employeeArray[i].idNumber == employeeObject.idNumber 
            && employeeArray[i].jobTitle == employeeObject.jobTitle 
            && employeeArray[i].annualSalary == employeeObject.annualSalary){
            // console.log('remove object');
            
            employeeArray.splice(i,1);
        }//end if
    }// end loop
    // console.log(employeeArray);
    //clear inputs
    $('#lastName').val("");
    $('#firstName').val("");
    $('#idNumber').val("");
    $('#jobTitle').val("");
    $('#annualSalary').val("");

    //display new employee array on DOM
    addToDom ();
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
















