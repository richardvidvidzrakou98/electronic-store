
// //Reference to the html element
// const idInput = document.querySelector('.product-id');
// const nameInput = document.querySelector('.product-name');
// const sellerInput = document.querySelector('.seller');
// const priceInput = document.querySelector('.price');
// const tableBody = document.querySelector('.display-table tbody');
// const form = document.querySelector('form');
// const createBtn = document.querySelector('#create');
// const updateBtn = document.querySelector('#update');
// const tBody = document.querySelector('#tbody');


// // const arr = [1, 2, 3, 4, 5, 6];
// // //arr.splice(1);
// // console.log(arr);

// // Retrieve the products from local storage, or create an empty array
// let products = JSON.parse(localStorage.getItem('products')) || [];




// //Perform action to the read button
// const readBtn = document.querySelector('#read');

// // Add an event listener to the "Read" button
// readBtn.addEventListener('click', () => {

//   // Retrieve the products from local storage
//   let products = JSON.parse(localStorage.getItem('products')) || [];

//   // Clear the existing rows in the table
//   tableBody.innerHTML = '';

//   // Create new rows in the table with the products data from local storage
//   products.forEach(product => {
//     const newRow = document.createElement('tr');
//     newRow.innerHTML = `
//         <td>${product.id}</td>
//         <td>${product.name}</td>
//         <td>${product.seller}</td>
//         <td>GH₵${product.price}</td>
//         <td><button class="edit-btns"><i class="fas fa-edit"></i></button></td>
//         <td><button class="delete-btn"><i class="fas fa-trash-alt"></i></button></td>
//     `;
//     tableBody.appendChild(newRow);
//   });
// });





// function confirmButton(){
    
//     document.getElementsByClassName('confirm-action')[0].style.display = "inline";
//     document.getElementsByClassName('message')[0].innerHTML = "Warning! All data will permanently delete";


//     const buttonY = document.querySelector('.true');
//     const buttonN = document.querySelector('.false');
   
//     buttonN.addEventListener('click', handleClick);
//     function handleClick(event) {
//     const buttonValue = this.value;
   
//     if (buttonValue === 'no') {
//         document.getElementsByClassName('confirm-action')[0].style.display = "none";
//         //alert("Success");
//     }
// }
//     buttonY.addEventListener('click', handleClick);
//         function handleClick(event) {
//         const buttonValue = this.value;
       
//         if (buttonValue === 'yes') {
//             localStorage.removeItem("products");
//             //tableBody.remove();
//             document.getElementsByClassName('confirm-action')[0].style.display = "none";
//             //alert("Successsss");
//         }else{
//             document.getElementsByClassName('confirm-action')[0].style.display = "none";

//         }
//     }
// }



// // document.getElementById('delete').onclick = function(){
// //     confirmButton();
// // }





// // Add an event listener to the "Create" button
// createBtn.addEventListener('click', () => {

//     //Add validation
//     let isValid = true;
//     const nameInput = document.querySelector('.product-name');
//     if(idInput.value === "" || nameInput.value === "" || sellerInput.value === "" || priceInput.value === ""){
//         isValid = false;
//     }

//     if(isValid){
//         // Get the values of the input fields
//         const id = idInput.value;
//         const name = nameInput.value;
//         const seller = sellerInput.value;
//         const price = priceInput.value;

//         // Add the new product to the array
//         products.push({ id, name, seller, price });

//         // Save the products array to local storage
//         localStorage.setItem('products', JSON.stringify(products));

//         // Create a new row in the table with the input values
//         const newRow = document.createElement('tr');
//         newRow.innerHTML = `
//             <td>${id}</td>
//             <td>${name}</td>
//             <td>${seller}</td>
//             <td>GH₵${price}</td>
//             <td><button id="edit-button" class="edit-btns"><i class="fas fa-edit"></i></button></td>
//             <td><button class="delete-btn"><i class="fas fa-trash-alt"></i></button></td>
//         `;

//         // Add the new row to the table
//         tableBody.appendChild(newRow);

//         // Clear the input fields
//         // idInput.value = '';
//         // nameInput.value = '';
//         // sellerInput.value = '';
//         // priceInput.value = '';
//     }

    

// });




// //Delete row when the delete icon or the trash icon is clicked
// tableBody.addEventListener('click', (event) => {
//     if (event.target.classList.contains('delete-btn')) {
//       const row = event.target.parentNode.parentNode;
//     //   console.log(row);
//       row.remove();
//     }
//   });



// //   const edit = document.querySelector('.edit-btns');
// //   edit.addEventListener('click', function(){
// //     alert("clicked");
//   //})
//   tableBody.addEventListener('click', (event) => {
//     if (event.target.classList.contains('edit-btns')) {
//       const row = event.target.parentNode.parentNode;
//       const tds = row.querySelectorAll('td');
//       const values = [];
      
  
//       tds.forEach(td => {
//         values.push(td.textContent.trim());
//       });

      
      

//       const product_id = values[0];
//       const product_name = values[1];
//       const product_seller = values[2];
//       const product_price = values[3];
  
//       const pro_id = document.querySelector('.product-id');
//       const pro_name = document.querySelector('.product-name');
//       const pro_seller = document.querySelector('.seller');
//       const pro_price = document.querySelector('.price');
  
//       pro_id.value = product_id;
//       pro_name.value = product_name;
//       pro_seller.value = product_seller;
//       pro_price.value = product_price;

//       console.log(values);
      
//       // Attach a click event listener to the update button
//       updateBtn.addEventListener('click', () => {

        
        
//         // Update the row with the new values
//         tds[0].textContent = pro_id.value;
//         tds[1].textContent = pro_name.value;
//         tds[2].textContent = pro_seller.value;
//         tds[3].textContent = pro_price.value;

        
//         //Update the values array with the new values
//         values[0] = pro_id.value;
//         values[1] = pro_name.value;
//         values[2] = pro_seller.value;
//         values[3] = pro_price.value;

//         // values.length = 0;
//         // console.log(values);
//         //console.log(tds);
//         // values.length = 0;
//         // conso
  
//         // Clear the input fields
//         pro_id.value = '';
//         pro_name.value = '';
//         pro_seller.value = '';
//         pro_price.value = '';
//       });
//     }
//   });

  
  

//   //Update data in the table body when click event happens to update button

  

const createButton = document.getElementById('create-btn');

createButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get form input values
  const productId = document.querySelector('.product-id').value;
  const productName = document.querySelector('.product-name').value;
  const seller = document.querySelector('.seller').value;
  const price = document.querySelector('.price').value;

  // Create sale record object
  const saleRecord = {
    productId: productId,
    productName: productName,
    seller: seller,
    price: price
  };

  // Get existing sale records from local storage or initialize empty array
  let saleRecords = JSON.parse(localStorage.getItem('saleRecords')) || [];

  // Add new sale record to array
  saleRecords.push(saleRecord);

  // Store updated sale records in local storage
  localStorage.setItem('saleRecords', JSON.stringify(saleRecords));

  // Clear form inputs
  document.querySelector('.product-id').value = '';
  document.querySelector('.product-name').value = '';
  document.querySelector('.seller').value = '';
  document.querySelector('.price').value = '';

  // Show success message
  const message = document.querySelector('.message');
  message.innerHTML = 'Sale record created successfully.';
  message.style.color = 'green';
});


// Get the "Read" button element
const readButton = document.getElementById("read-btn");

// Add a click event listener to the button
readButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form from submitting

  // Get the tbody element of the table
  const tbody = document.getElementById("tbody");

  // Clear the existing rows in the table
  tbody.innerHTML = "";

  // Get the sale records from local storage
  const sales = JSON.parse(localStorage.getItem("saleRecords"));

  // Loop through each sale record and add it to the table
  sales.forEach((sale) => {
    // Create a new table row element
    const row = document.createElement("tr");

    
    // Add the sale record data to the row
    row.innerHTML = `
      <td>${sale.productId}</td>
      <td>${sale.productName}</td>
      <td>${sale.seller}</td>
      <td>${sale.price}</td>
      <td><button class="edit-btns">Edit</button></td>
      <td><button class="delete-btns" style="color:crimson">Delete</button></td>
    `;

    // Add the row to the tbody element
    tbody.appendChild(row);
  });
});

const table = document.querySelector("table");

table.addEventListener("click", (event) => {
  if (event.target.classList.contains("edit-btns")) {
    const row = event.target.parentNode.parentNode;
    // Get the values of the cells in the row
    const id = row.cells[0].textContent;
    const productName = row.cells[1].textContent;
    const seller = row.cells[2].textContent;
    const price = row.cells[3].textContent;

    // Set the input field values to the sales record values
    document.querySelector(".product-id").value = id;
    document.querySelector(".product-name").value = productName;
    document.querySelector(".seller").value = seller;
    document.querySelector(".price").value = price;

    document.querySelector(".product-id")

    document.querySelector(".product-id").disabled = true;

  }
});

const delTable = document.querySelector("table");
delTable.addEventListener("click", (event) => {
    // console.log("hello");
  if (event.target.classList.contains("delete-btns") ) {
    // console.log("Hi");
    const row = event.target.parentNode.parentNode;
    // Get the values of the cells in the row
    const id = row.cells[0].textContent;
    const productName = row.cells[1].textContent;
    const seller = row.cells[2].textContent;
    const price = row.cells[3].textContent;

    // Set the input field values to the sales record values
    document.querySelector(".product-id").value = id;
    document.querySelector(".product-name").value = productName;
    document.querySelector(".seller").value = seller;
    document.querySelector(".price").value = price;

    document.querySelector(".product-id")

    document.querySelector(".product-id").disabled = true;

  }
});


// Get the "Update" button element
const updateButton = document.getElementById("update-btn");

// Add a click event listener to the button
updateButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form from submitting

  // Get the values from the input fields
  const productId = document.querySelector(".product-id").value;
  const productName = document.querySelector(".product-name").value;
  const seller = document.querySelector(".seller").value;
  const price = document.querySelector(".price").value;

  // Get the sales records from local storage
  let sales = JSON.parse(localStorage.getItem("saleRecords"));

  console.log(sales);

  // Loop through the sales records and update the matching record
  for (let i = 0; i < sales.length; i++) {
    if (sales[i].productId === productId) {
      console.log("hello");
      sales[i].productName = productName;
      sales[i].seller = seller;
      sales[i].price = price;
      break;
    }
  }

  // Save the updated sales records back to local storage
  localStorage.setItem("saleRecords", JSON.stringify(sales));


  // Clear form inputs
  document.querySelector('.product-id').value = '';
  document.querySelector('.product-name').value = '';
  document.querySelector('.seller').value = '';
  document.querySelector('.price').value = '';

  document.querySelector(".product-id").disabled = false;

  alert("Sale record updated successfully. Refresh the page");


});


// Get the "Delete" button element
const deleteButton = document.getElementById("delete-btn");

// Add a click event listener to the button
deleteButton.addEventListener("click", () => {
  // Get the id of the selected sale record
  const selectedId = document.querySelector(".product-id").value;

  // Get the sale records from local storage
  const sales = JSON.parse(localStorage.getItem("saleRecords"));

  // Find the index of the selected sale record in the sales array
  const selectedIndex = sales.findIndex((sale) => sale.productId === selectedId);

  // If the selected sale record is found, remove it from the array
  if (selectedIndex !== -1) {
    sales.splice(selectedIndex, 1);

    // Update the sale records in local storage
    localStorage.setItem("saleRecords", JSON.stringify(sales));

    // Display a success message
    alert("Sale record deleted successfully. Refresh the page");
  } else {
    // Display an error message if the selected sale record is not found
    alert("Sale record not found.");
  }
});



  
