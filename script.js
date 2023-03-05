
//Reference to the html element
const idInput = document.querySelector('.product-id');
const nameInput = document.querySelector('.product-name');
const sellerInput = document.querySelector('.seller');
const priceInput = document.querySelector('.price');
const tableBody = document.querySelector('.display-table tbody');
const form = document.querySelector('form');
const createBtn = document.querySelector('#create');
const updateBtn = document.querySelector('#update');
const tBody = document.querySelector('#tbody');


// const arr = [1, 2, 3, 4, 5, 6];
// //arr.splice(1);
// console.log(arr);

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
        //alert("Success");
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



// document.getElementById('delete').onclick = function(){
//     confirmButton();
// }





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
        // idInput.value = '';
        // nameInput.value = '';
        // sellerInput.value = '';
        // priceInput.value = '';
    }

    

});




//Delete row when the delete icon or the trash icon is clicked
tableBody.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
      const row = event.target.parentNode.parentNode;
    //   console.log(row);
      row.remove();
    }
  });



//   const edit = document.querySelector('.edit-btns');
//   edit.addEventListener('click', function(){
//     alert("clicked");
  //})
  tableBody.addEventListener('click', (event) => {
    if (event.target.classList.contains('edit-btns')) {
      const row = event.target.parentNode.parentNode;
      const tds = row.querySelectorAll('td');
      const values = [];
      
  
      tds.forEach(td => {
        values.push(td.textContent.trim());
      });

      
      

      const product_id = values[0];
      const product_name = values[1];
      const product_seller = values[2];
      const product_price = values[3];
  
      const pro_id = document.querySelector('.product-id');
      const pro_name = document.querySelector('.product-name');
      const pro_seller = document.querySelector('.seller');
      const pro_price = document.querySelector('.price');
  
      pro_id.value = product_id;
      pro_name.value = product_name;
      pro_seller.value = product_seller;
      pro_price.value = product_price;

      console.log(values);
      
      // Attach a click event listener to the update button
      updateBtn.addEventListener('click', () => {

        
        
        // Update the row with the new values
        tds[0].textContent = pro_id.value;
        tds[1].textContent = pro_name.value;
        tds[2].textContent = pro_seller.value;
        tds[3].textContent = pro_price.value;

        
        //Update the values array with the new values
        values[0] = pro_id.value;
        values[1] = pro_name.value;
        values[2] = pro_seller.value;
        values[3] = pro_price.value;

        // values.length = 0;
        // console.log(values);
        //console.log(tds);
        // values.length = 0;
        // conso
  
        // Clear the input fields
        pro_id.value = '';
        pro_name.value = '';
        pro_seller.value = '';
        pro_price.value = '';
      });
    }
  });

  
  

  //Update data in the table body when click event happens to update button

  

  
