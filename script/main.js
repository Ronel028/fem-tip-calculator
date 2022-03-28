let billInput = document.querySelector('#bill-input');
let tipButton = document.querySelectorAll('.select-tip .select-tip-button button');
let customTip = document.querySelector('#input-tip');
let numberPeople = document.querySelector('#number-people');
let resetButton = document.querySelector('.right-container .reset-btn');

// output
let tAmount = document.getElementById('tipAmount');
let total = document.getElementById('totalAmount');


let bill;
let percentage;
let inputCustomTip;
let numberPeopleInput = 1;

billInput.addEventListener('input', billValue);
customTip.addEventListener('input', customTipInput);
numberPeople.addEventListener('input', peopleInput);
resetButton.addEventListener('click', reset);

// function for bill value
function billValue(){
     bill = parseFloat(billInput.value);

     if(bill < 0){
          billInput.value = '';
          bill = 0; 
     }
  
     totalTipAmount(tAmount, total);
}

// function for custom tip
function customTipInput(){

     if(inputCustomTip < 0){
          customTip.value = '';
          inputCustomTip = 0;
     }
     else{
          tipButton.forEach(button => button.classList.remove('active-state-button'));
          inputCustomTip = parseInt(customTip.value)/100;
          percentage = inputCustomTip;
      
          totalTipAmount(tAmount, total);
     }
}

// function for people input
function peopleInput(){
     numberPeopleInput = parseInt(numberPeople.value);
     console.log(numberPeopleInput);
     totalTipAmount(tAmount, total);

     let errorMessage = document.querySelector('.error-msg');
     if(numberPeopleInput === 0 || numberPeopleInput < 0){
          errorMessage.style.display = 'block';
          tAmount.innerText = "0.00";
          total.innerText = "0.00";
          numberPeople.value = 0;
          numberPeopleInput = 1;
     }
     else{
          errorMessage.style.display = 'none';
     }
}

// tip button
tipButton.forEach(function(btn){
     btn.addEventListener('click', function(e){

          // Add active state in button
          tipButton.forEach(button => button.classList.remove('active-state-button'));
          this.classList.add('active-state-button');
          customTip.value = '';


          percentage = parseInt(e.target.innerText)/100; 
          // calculateTip();  
          console.log(percentage) 
          totalTipAmount(tAmount, total);
     })
});
 
// Calculate tip

// function calculateTip(){

//      let tipAmount = ((bill * percentage)/numberPeopleInput).toFixed(2);
//      tAmount.textContent = tipAmount;

//      let totalAmount = ((bill + parseInt(tipAmount))/numberPeopleInput).toFixed(2);
//      total.textContent = totalAmount;

// }
function totalTipAmount(a, b){
     a.textContent = tipAmount();
     b.textContent = totalAmount();
}

function tipAmount(){

     let defaultValue = '0.00';
     let tipAmount = ((bill * percentage)/numberPeopleInput).toFixed(2);

    
     if(!isNaN(tipAmount)){
          return tipAmount;
     }
     else{
          return defaultValue;
     }
     
}

function totalAmount(){

     let defaultValue = '0.00';
     let totalAmount = ((bill + parseInt(tipAmount()))/numberPeopleInput).toFixed(2);

    
     if(!isNaN(totalAmount)){
          return totalAmount;
     }
     else{
          return defaultValue;
     }
     
}

// reset
 function reset(){
      billInput.value = '';
      bill = 0;

      tipButton.forEach(button => button.classList.remove('active-state-button'));
      customTip.value = '';
      inputCustomTip = 0;
      percentage = 0;

      numberPeople.value = 1;
      numberPeopleInput = 1;

      tAmount.textContent = '0.00';
      total.textContent = '0.00';
 }

