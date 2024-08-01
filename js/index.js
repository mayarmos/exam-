let nameAlert= document.getElementById("nameAlert")
let emailAlert= document.getElementById("emailAlert")
let phoneAlert= document.getElementById("phoneAlert")
let ageAlert= document.getElementById("ageAlert")
let passAlert= document.getElementById("passAlert")
let repassAlert= document.getElementById("repassAlert")
let submitBtn= document.getElementById("submitBtn")
let meals = []
// <!----------------------     side-nav      ---------------------->  

$('.open').on("click" , function(){
 
    $('.slideNav').css({left: '0px', Transition : 'left 1s'})
        $('.open').addClass('d-none')
        $('.close').removeClass('d-none')

})
$('.close').on("click" , function(){
 
    $('.slideNav').css({left: '-200px', Transition : 'left 1s'})
        $('.open').removeClass('d-none')
        $('.close').addClass('d-none')

})
// <!----------------------     main meals   ----------------------> 


async function fpage() {
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`) 
  let sec = await response.json();
  console.log(sec);
  disf(sec.meals) 
}
fpage()
function disf(meal) {
  let cartona =``
  for (let i = 0; i < meal.length; i++) {
      cartona += `
      <div class="col-md-3">
    <div class="meals position-relative rounded-2 overflow-hidden"  onclick="">
      <img class="bg-black mt-3 mb-3 img-fluid"  src="${meal[i].strMealThumb}" alt="">
      <div class="layer position-absolute d-flex align-items-center text-black ">
        <h3 >${meal[i].strMeal}</h3>
      </div>
    </div>
  </div>`
      document.getElementById("rowData").innerHTML=cartona 
     
         
}
}
$('.meals').on("click" , function(){
  Description()
})
async function Description(des) {
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${des}`) 
  let data = await response.json();
  console.log(data);
  DisplayDescription(data.strInstructions) 
}

function DisplayDescription(meal) {
  let cartona =``
  for (let i = 0; i <meal.length; i++) {
      cartona += `
      <div class="">
    <div class="meals position-relative rounded-2 overflow-hidden"  onclick="">
      <img class="bg-black mt-3 mb-5 img-fluid"  src="${meal[i].strMealThumb}" alt="">
        <h3 >${meal[i].strInstructions}</h3>
    </div>
  </div>`
      document.getElementById("rowData").innerHTML=cartona    
}
}

// <!----------------------     dis meals   ----------------------> 


function displayMeals(meals) {
  let cartona = '';
  for (let i = 0; i <meals.length; i++) {
    cartona += `
      <div class="col-md-3">
        <div class="meal position-relative rounded-2 overflow-hidden">
          <img src="${meals[i].strMealThumb}" class="w-100 rounded-2 overflow-hidden"/>
          <div class="meal-layer position-absolute d-flex flex-column align-items-center text-black text-center">
            <h3>${meals[i].strMeal}</h3>
          </div>
        </div>
      </div>`;
  }
  document.getElementById("rowData").innerHTML = cartona;
}


// <!----------------------     search   ----------------------> 

search.addEventListener("click" , function () {
  gsearch()
  console.log('hello');
})

function gsearch() {
  document.getElementById("rowData").innerHTML = `
  <div class=" search d-flex justify-content-center min-vh-100"> 
  <form class=" w-100 d-flex mt-5 gap-5">
     <div class="form-floating   col-md-6 mb-3">
  <input onclick="getMealsLetter() type="email" class="form-control bg-black" id="floatingInput" placeholder="search by Name">
  <label class="text-secondary" for="floatingInput">search by Name</label>
</div>
<div class="form-floating col-md-6">
  <input type="password" class="form-control bg-black" id="floatingPassword" placeholder="Password">
  <label class="text-secondary" for="floatingPassword">search by Letter</label>
</div>
  </form>    
  </div>
   `
   displayMeals()
}
$('.search').on('input', function(){
  getMealsLetter(Letter)
})
async function getMealsLetter(Letter) {
  let response = await fetch(`www.themealdb.com/api/json/v1/1/filter.php?c=${Letter}`);
  let data = await response.json();
  console.log(data);
  displayMeals(data.meals);
}
// let searchArr1 = []; 
//         async function search() {
//             try {
//                 let sNameApi = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
//                 let sNameData = await sNameApi.json();
        
//                 searchArr1 = sNameData.meals;
        
//                 $('.search').on('click', function () {
//                     $('.mainpage').empty();

//                     $('.mainpagef').removeClass('d-none')
        
//                     $('.mainpagef').append(`
                       
//                     `);
        
//                     const firstSearchInput = $('#firstSearch');
        
//                       firstSearchInput.on('input', async function () {
//                           let content = $(this).val().toLowerCase();
//                            console.log(content);
          
//                           let searchBox = '';
          
//                           let filteredResults = searchArr1.filter(meal => 
//                               meal.strMeal.toLowerCase().includes(content)
//                           );
        
//                         for (let i = 0; i < filteredResults.length; i++) {
//                             searchBox += `
                            
//                                 <div class="card overflow-hidden">
//                                     <img src="${filteredResults[i].strMealThumb}" alt="" class="card-img">
//                                     <div class="card-cover">
//                                         <h2>${filteredResults[i].strMeal}</h2>
//                                         <p>${filteredResults[i].strInstructions}</p>
//                                     </div>
//                                 </div>`;
//                         }
        
//                         document.getElementById('mainpage2').innerHTML = searchBox;
//                     });
//                 });
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         }
        
//         search();

// <!----------------------     Categories    ----------------------> 
   


Categories.addEventListener("click" , function () {
    getCategory() 
    
})

async function getCategory() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`) 
    let data = await response.json()
    console.log(data);
    disCategory(data.categories) 
   
 }

 function disCategory(meals) {
  let cartona =``
  for (let i = 0; i <meals.length; i++) {
      cartona += `
      <div class="col-md-3">
    <div class="meals position-relative rounded-2 overflow-hidden" onclick="getCategoryMeals('${meals[i].strCategory}')">
      <img class=" mt-5 mb-5 img-fluid" src="${meals[i].strCategoryThumb}" alt="">
      <div class="layer position-absolute d-flex flex-column align-items-center text-black text-center">
        <h3>${meals[i].strCategory}</h3>
        <p>${meals[i].strCategoryDescription.split("").slice(0,150).join("")}</p>
      </div>
    </div>
  </div>`
      document.getElementById("rowData").innerHTML=cartona   
}
}
$('.meals').on("click" , function(){
  getCategoryMeals()
})
 async function getCategoryMeals(cat) {
  let response = await fetch(`www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
  let data = await response.json();
  console.log(data);
  displayMeals(data.meals);
}




// <!----------------------    area    ---------------------->  


Area.addEventListener("click" , function () {
    getArea()
    
})

async function getArea() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`) 
    let area= await response.json()
    console.log(area);
    DisArea(area.meals) 
 }
 $('.area').on("click" , function(){
  getCategoryMeals()
})
 async function displayAreaMeals(area){
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
  let data = await response.json()
   console.log(data);
  displayMeals(data.meals)
}

function DisArea(meals) {
    let cartona =``
    for (let i = 0; i <meals.length; i++) {
        cartona +=` 
        <div class="area col-md-3 text-center text-white pt-5 rounded-2 cursor-pointer "   > 
            <i class="fa-solid fa-house-laptop fs-1 "></i>
            <h3 >${meals[i].strArea} </h3>
          </div>`
          document.getElementById("rowData").innerHTML=cartona    
    }
    // onclick="displayAreaMeals('${meals[i].strArea}')" 
}


// <!----------------------   Ingredients   ---------------------->  



Ingredients.addEventListener("click" ,function(){
    GetIngredients()
})

async function GetIngredients() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let ing = await response.json()
    console.log(ing);
    disIng (ing.meals)
}
async function displayIngMeals(ing){
  let response = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`)
  let data = await response.json()
  displayMeals(data.meals)
  
  }
  $('.ing').on("click" , function(){
    getCategoryMeals()
  })

function disIng (meals) {
        let cartona =``
        for (let i = 0; i <meals.length; i++) {
            cartona +=` <div class="ing col-md-3 text-center mt-5 text-white pt-5 " >
           <i class="fa-solid fa-drumstick-bite fs-1"></i>
            <h3 >${meals[i].strIngredient} </h3>
            <p> ${meals[i].strDescription.split("").slice(0,100).join("")}</p>
          </div>`
          document.getElementById("rowData").innerHTML=cartona    
            
        }
    
}
// <!----------------------  contact us  ----------------------> 


Contact.addEventListener("click" ,function(){
  showContact()
  console.log('hello');
})
function  showContact() {
  document.getElementById("rowData").innerHTML = `
    <div class="contact d-flex align-items-center justify-content-center min-vh-100">

<div class="container w-75 text-center">

<div class="row g-4">

<div class="col-md-6">
<input id="nameInput" type="text" class="form-control" placeholder="Enter Your Name">
<div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
Special characters and numbers not allowed
</div>
</div>

<div class="col-md-6">
<input id="emailInput" type="email" class="form-control" placeholder="Enter Your Email">
<div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
Email not valid exemple@yyy.zzz
</div>
</div>

<div class="col-md-6">
<input id="phoneInput" type="text" class="form-control" placeholder="Enter Your phone">
<div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
Enter valid Phone Number
</div>
</div>

<div class="col-md-6">
<input id="ageInput" type="number" class="form-control" placeholder="Enter Your age">
<div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
Enter valid age
</div>
</div>

<div class="col-md-6">
<input id="passInput" type="password" class="form-control" placeholder="Enter Your password">
<div id="passAlert" class="alert alert-danger w-100 mt-2 d-none">
Enter valid password
</div>
</div>

<div class="col-md-6">
<input id="repassInput" type="password" class="form-control" placeholder="Repassword">
<div id="repassAlert" class="alert alert-danger w-100 mt-2 d-none">
Enter valid Repassword
</div>
</div>
<div >
<button id="submitBtn" class="btn border border-2  border-danger w-auto  px-2 mt-3">Submit</button>
 </div>
</div>
</div>
   `
   document.getElementById("submitBtn").addEventListener("click", function(){
    allInputsValidation()
    })
     
}

function nameValidation(){
  let nameInput = document.getElementById("nameInput");
  let nameAlert = document.getElementById("nameAlert");
  let regex = /^[A-Za-z\s\-_]*$/;
  if (regex.test(nameInput.value = true & nameInput != "")) {
  nameAlert.classList.add("d-none")
  }else{
  nameAlert.classList.remove("d-none")
  }
  }
  function emailValidation(){
  let emailInput = document.getElementById("emailInput");
  let emailAlert = document.getElementById("emailAlert");
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regex.test(emailInput.value = true & emailAlert != "")) {
    emailInput.classList.add("d-none")
  }else{
    emailAlert.classList.remove("d-none")
  }
  }
  function phoneValidation(){
  let phoneInput = document.getElementById("phoneInput");
  let phoneAlert = document.getElementById("phoneAlert");
  let regex = /^\+?[0-9]{1,3}?[-.\s]?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/;
  if (regex.test(phoneInput.value = true & phoneAlert != "")) {
    phoneInput.classList.add("d-none")
  }else{
    phoneAlert.classList.remove("d-none")
  }
  }
  function ageValidation(){
  let ageInput = document.getElementById("ageInput");
  let ageAlert = document.getElementById("ageAlert");
  let regex = /^(0?[1-9]|[1-9][0-9]|[1][0-1][0-9]|120)$/;
  if (regex.test(ageInput.value = true & ageAlert != "")) {
    ageInput.classList.add("d-none")
  }else{
    ageAlert.classList.remove("d-none")
  }
  }
  function passwordValidation(){
  let passInput = document.getElementById("passInput");
  let passAlert = document.getElementById("passAlert");
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regex.test(passInput.value = true & passAlert != "")) {
    passInput.classList.add("d-none")
  }else{
    passAlert.classList.remove("d-none")
  }
  }
  function repasswordValidation(){
  let repassInput = document.getElementById("repassInput");
  let repassAlert = document.getElementById("repassAlert");
  let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
  if (regex.test(repassInput.value = true & repassAlert != "")) {
    repassInput.classList.add("d-none")
  }else{
    repassAlert.classList.remove("d-none")
  }
  }
function allInputsValidation (){
  nameValidation();
  emailValidation();
  phoneValidation();
  ageValidation();
  passwordValidation();
  repasswordValidation();
if ( nameValidation() && emailValidation() && phoneValidation ()  &&   ageValidation() && passwordValidation()  &&  repasswordValidation() ==true ){
  document.getElementById("submitBtn").removeAttribute("disabled")
}else{
  document.getElementById("submitBtn").setAttributeAttribute("disabled", true);
}
}