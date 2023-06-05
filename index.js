
const form = document.getElementById("form");
const table =  document.getElementById('data-table');

form.addEventListener('submit', (e) => {


  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const pass = document.getElementById('pass').value;

  const form_data = {
    name: name,
    phone: phone,
    email: email,
    password: pass,
  };

  let form_array = localStorage.getItem('formdata');

  if (form_array) {
    form_array =  JSON.parse(form_array)
  } else{
    form_array = [];
  }
  form_array.push(form_data);
  localStorage.setItem('formdata' , JSON.stringify(form_array))
  table_show(form_array)
});

function table_show(form_array){
  table.innerHTML= "";

  if (form_array.length === 0) {
    return;
    
  } else{
    const table_head = '<thead><tr><th style= "width:30%">name</th><th  style= "width:20%">phone</th><th  style="width:25%">email</th><th style= "width:20%">password</th><th style= "width:5%">actions</th></tr></thead>';
    table.innerHTML += table_head;
  }
  const tab_row = form_array.map(formdata => {
    return `<tr><td>${formdata.name}</td><td>${formdata.phone}</td><td>${formdata.email}</td><td>${formdata.password}</td><td><button onclick="delete_(${form_array.indexOf(formdata)})"><span><i class="fa-solid fa-trash-can"></i></span></button></td></tr>`;
  });
  
  table.innerHTML += tab_row.join('');

}
function delete_(index){
const form_array =  JSON.parse(localStorage.getItem("formdata"));


if (form_array && form_array.length > index) {
  form_array.splice(index,1);
  localStorage.setItem('formdata', JSON.stringify(form_array));
  table_show(form_array)
  
}
}

window.addEventListener('load' , () =>{
  const form_array = JSON.parse(localStorage.getItem('formdata')) || [];
  table_show(form_array);
})
