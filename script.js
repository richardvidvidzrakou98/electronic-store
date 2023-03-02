
//Reference to the html element
const idInput = document.querySelector('.product-id');
const nameInput = document.querySelector('.product-name');
const sellerInput = document.querySelector('.seller');
const priceInput = document.querySelector('.price');
const tableBody = document.querySelector('.display-table tbody');
const form = document.querySelector('form');
const createBtn = document.querySelector('#create');
const updateBtn = document.querySelector('#update');



// Retrieve the products from local storage, or create an empty array
let products = JSON.parse(localStorage.getItem('products')) || [];




//Perform action to the read button
const readBtn = document.querySelector('#read');

// Add an event listener to the "Read" button
readBtn.addEventListener('click', () => {

  // Retrieve the products from local storage
  let products = JSON.parse(localStorage.getItem('products')) || [];

  // Clear the existing rows in the table
  tableBody.innerHTML = '';

  // Create new rows in the table with the products data from local storage
  products.forEach(product => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.seller}</td>
        <td>GH₵${product.price}</td>
        <td><button class="edit-btns"><i class="fas fa-edit"></i></button></td>
        <td><button class="delete-btn"><i class="fas fa-trash-alt"></i></button></td>
    `;
    tableBody.appendChild(newRow);
  });
});





function confirmButton(){
    
    document.getElementsByClassName('confirm-action')[0].style.display = "inline";
    document.getElementsByClassName('message')[0].innerHTML = "Warning! All data will permanently delete";


    const buttonY = document.querySelector('.true');
    const buttonN = document.querySelector('.false');
   
    buttonN.addEventListener('click', handleClick);
    function handleClick(event) {
    const buttonValue = this.value;
   
    if (buttonValue === 'no') {
        document.getElementsByClassName('confirm-action')[0].style.display = "none";
        alert("Success");
    }
}
    buttonY.addEventListener('click', handleClick);
        function handleClick(event) {
        const buttonValue = this.value;
       
        if (buttonValue === 'yes') {
            localStorage.removeItem("products");
            //tableBody.remove();
            document.getElementsByClassName('confirm-action')[0].style.display = "none";
            //alert("Successsss");
        }else{
            document.getElementsByClassName('confirm-action')[0].style.display = "none";

        }
    }
}



document.getElementById('delete').onclick = function(){
    confirmButton();
}





// Add an event listener to the "Create" button
createBtn.addEventListener('click', () => {

    //Add validation
    let isValid = true;
    const nameInput = document.querySelector('.product-name');
    if(idInput.value === "" || nameInput.value === "" || sellerInput.value === "" || priceInput.value === ""){
        isValid = false;
    }

    if(isValid){
        // Get the values of the input fields
        const id = idInput.value;
        const name = nameInput.value;
        const seller = sellerInput.value;
        const price = priceInput.value;

        // Add the new product to the array
        products.push({ id, name, seller, price });

        // Save the products array to local storage
        localStorage.setItem('products', JSON.stringify(products));

        // Create a new row in the table with the input values
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${id}</td>
            <td>${name}</td>
            <td>${seller}</td>
            <td>GH₵${price}</td>
            <td><button id="edit-button" class="edit-btns"><i class="fas fa-edit"></i></button></td>
            <td><button class="delete-btn"><i class="fas fa-trash-alt"></i></button></td>
        `;

        // Add the new row to the table
        tableBody.appendChild(newRow);

        // Clear the input fields
        idInput.value = '';
        nameInput.value = '';
        sellerInput.value = '';
        priceInput.value = '';
    }

    

});




//Delete row when the delete icon or the trash icon is clicked
tableBody.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
      const row = event.target.parentNode.parentNode;
      row.remove();
    }
  });
  

  function update(){
    
// Get the table body element
const tableBody = document.getElementById('tbody');

// Get the input fields
const idInput = document.querySelector('.product-id');
const nameInput = document.querySelector('.product-name');
const sellerInput = document.querySelector('.seller');
const priceInput = document.querySelector('.price');

// Retrieve the products array from local storage
const products = JSON.parse(localStorage.getItem('products')) || [];


//Access the alements in the products and store them in a variables;
products.forEach(function(element){
    const product_id = element.id;
    const product_name = element.name;
    const product_seller = element.seller;
    const product_price = element.price;
    // //console.log(`id: ${element.id}`);
    // console.log(product_id);
    // console.log(product_name);
    // console.log(product_seller);
    // console.log(product_price);
});






// let result = products.find(val => val.id == '2');
// console.log(result);

const editBtn = document.querySelector('.edit-btns');
editBtn.addEventListener('click', () => {
    
    alert("Hello world");
});

// Loop through the products array and add a row to the table for each product
//for (const product of products) {
  // Create a new row in the table
  const newRow = document.createElement('tr');
 // console.log(product);
  // Add the input fields to the row
//   newRow.innerHTML = `
//     <td><input type="text" value="${product.id}" disabled></td>
//     <td><input type="text" value="${product.name}" disabled></td>
//     <td><input type="text" value="${product.seller}" disabled></td>
//     <td><input type="number" value="${product.price}" disabled></td>
//     <td><button class="edit-btns"><i class="fas fa-edit"></i></button></td>
//     <td><button class="delete-btn"><i class="fas fa-trash-alt"></i></button></td>
//   `;

  // Add the new row to the table
  tableBody.appendChild(newRow);

  // Add an event listener to the edit button to enable editing of the input fields
//   const editButton = newRow.querySelector('.edit-btns');
//   editButton.addEventListener('click', () => {
//     idInput.value = product.id;
//     nameInput.value = product.name;
//     sellerInput.value = product.seller;
//     priceInput.value = product.price;
//     idInput.disabled = false;
//     nameInput.disabled = false;
//     sellerInput.disabled = false;
//     priceInput.disabled = false;
//   });
}

  //}
update();