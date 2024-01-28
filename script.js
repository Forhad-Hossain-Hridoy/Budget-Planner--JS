// Dom Ref
const budgetInputBox = document.querySelector(".input__budget");
const expenseTitleInput = document.querySelector(".product__title");
const expenseInputBox = document.querySelector(".input__cost");
const budgetBtn = document.querySelector(".set--budget--btn");
const checkAmountBtn = document.querySelector(".check--amount--btn");
const totalBudget = document.querySelector(".total__budget");
const totalCost = document.querySelector(".total__cost");
const balance = document.querySelector(".remaing__balance");


// functions
const setBudget = ()=>{
    let getBudget = budgetInputBox.value;
    if(getBudget === '' || getBudget<0){
        alert("Can not set Negative or Empty vlaue");
        budgetInputBox.value = '';
    }else{
        totalBudget.innerHTML = getBudget ;
        balance.innerText = getBudget - +totalCost.innerText;
        budgetInputBox.value = '';
    }
}

const createlistItem = (expenseTitle,expenseAmout)=>{
    const listUl = document.querySelector(".listUl");

    let listItem = document.createElement("li");
    listItem.classList.add("list__item");

    let itemLabel = document.createElement("label");
    itemLabel.classList.add('item__label');
    itemLabel.innerHTML = expenseTitle;
    
    let itemAmount = document.createElement("p");
    itemAmount.classList.add("item__amount");
    itemAmount.innerText = expenseAmout;
    
    let icon = document.createElement("i");
    icon.classList.add("fa-solid","fa-trash-can");

    listItem.appendChild(itemLabel);
    listItem.appendChild(itemAmount);
    listItem.appendChild(icon);
    if(!expenseTitle || !expenseAmout){
        alert("Please input Label and amount !!!")
    }else{
        listUl.appendChild(listItem);
    }

    let deletBtn =listItem.querySelector("i");
    deletBtn.addEventListener("click",()=>{
       listUl.removeChild(listItem);
       let deletedAmount = +listItem.querySelector(".item__amount").innerText
       let PrevBal = +balance.innerText ;
       let newBal = PrevBal + deletedAmount;
       balance.innerText = newBal;

       let prevExpen = +totalCost.innerText;
       let newExpen = prevExpen - deletedAmount;
       totalCost.innerText = newExpen;
    });
}

const checkAmount = ()=>{
    createlistItem(expenseTitleInput.value,expenseInputBox.value);
    calculatioin()
}

function calculatioin(){
    let initial = +totalCost.innerText;
    let userAmount = +expenseInputBox.value;
    
    let sum = initial + userAmount ;
    totalCost.innerText = sum;

    let budget = +totalBudget.innerText
    balance.innerText = budget - sum ;
}

// Event Listener
budgetBtn.addEventListener("click",setBudget);
checkAmountBtn.addEventListener("click",checkAmount)