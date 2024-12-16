const itemInput = document.getElementById('item-input')
const addItemButton = document.getElementById('add-item-button')
const shoppingList = document.getElementById('shopping-list')
const listArr = []

// Function to check item is not duplicate
function checkDuplicate() {
    let newInput = itemInput.value.toLowerCase().replace(/\s{1,}/g, "");
    for (let list of listArr) {
        let normalisedList = list.toLowerCase().replace(/\s{1,}/g, "");
        if (normalisedList.includes(newInput)) {
            alert("Item already on the list!")
            itemInput.value = ""; // Clear the input field

            return;
        }
    }
    if(!itemInput.value){ 
        alert("Please enter an item")
        return;
    }
    const itemText = itemInput.value;
    listArr.push(itemText);
    renderList();

}

// Function to add an item to the shopping list
function renderList() {
    shoppingList.innerHTML = ''
    listArr.forEach((gift, index) => {
        const listItem = document.createElement('li')
        const button = document.createElement('button')
        button.textContent = "X"
        button.classList.add("remove-btn")
        button.setAttribute("data-index",index)
        listItem.textContent = gift
        shoppingList.appendChild(listItem)
        listItem.appendChild(button)

      button.addEventListener("click", function() {
        this.parentNode.remove();
        const btnIndex = parseInt(this.getAttribute("data-index"),20)
        listArr.splice(btnIndex,1);
        if(shoppingList.childElementCount === 0){
          listArr.length = 0;
        }
      }) 
      
    })
 
    itemInput.value = ""; // Clear the input field
}


// Add event listener to button
addItemButton.addEventListener('click', checkDuplicate)

// Allow adding items by pressing Enter key
itemInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        checkDuplicate()
    }
})
