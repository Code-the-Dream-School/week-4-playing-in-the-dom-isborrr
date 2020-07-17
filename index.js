//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'




//resolve // QUESTION 1 here

// getting the first element of the class
var x = document.getElementsByClassName("square")[0];      
//setting the function to check the innerHtml value of x : if it is 'X,' change to 'O' and vise versa
function myFunction() {
   
    if(x.innerHTML=='X'){
       
    x.innerHTML = "O";
    
    }else{
        x.innerHTML = "X";
       
    }

  }

//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow, those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'
const colors = [ 'red' , 'white', 'black' , 'green' , 'orange'];




//resolve // QUESTION 2 here
const makeOptions=()=>{           
    let optionList="";                // create a list option and use a loop to assing each element to to elements of the array colors
    for(var i=0;i<colors.length;i++){
        optionList += `<option>${colors[i]}</option>` ;
        console.log(optionList);
    }
    return optionList;
}

function remove() {                                //use to fuction remove to revove the index 
    var x = document.getElementById("selectNow");    
    console.log('string',x.selectedIndex);
    x.remove(x.selectedIndex);
 }

var mySelect= document.getElementById("selectNow");
mySelect.innerHTML=makeOptions();


//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)


const calculate_sphere = (e) =>{
    e.preventDefault();      // prevent the default behavior of the function 

    let content = document.querySelectorAll("#MyForm input");   // Select all the inputs in the class MyForm 

    submit.addEventListener("click",function() {          
        let π =3.14;                                //give the value to π   and applying the calculations
        let radius = parseInt(content[0].value);     // get and assign the first input value to radius 
        let volume = ((4/3) * π * (radius*radius*radius));        
        content[1].value= volume;              // set the value of the second input to volume,
        let area= (4 * π * (radius*radius));
        content[2].value=area;                  // set the value of the third input to area,
   
    });
    
   
   


 }

window.onload = document.getElementById('MyForm').onsubmit = calculate_sphere; // this execute the volume_sphere function each time the calculate (submit) button is clicked




//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons, each with a click action that will hide the respective question's answer above. So if you click the "Hide Question 1" button it will hide from the DOM the answer to your first exercise. If you click it again it will show the answer. 


//resolve // QUESTION 4 here

//create 3 buttons to hide or display each question
 let button1=document.querySelector("#button1");       
 let button2=document.querySelector("#button2");  
 let button3=document.querySelector("#button3");  
 

//adding a click eventListener to each buttons to hide or display each question

    button1.addEventListener("click", function() {
    var div = document.getElementById("a-1");      
              if(div.hidden===false){
                  div.hidden= true;
                  button1.textContent="Show Question1";

              }else{
                div.hidden= false;
                button1.textContent="Hide Question1";
              }
});

button2.addEventListener("click", function() {
    var div = document.getElementById("a-2");
              if(div.hidden===false){
                  div.hidden= true;
                  button2.textContent="Show Question2";
              }else{
                div.hidden= false;
                button2.textContent="Hide Question2";
              }
});
           
button3.addEventListener("click", function() {
    var div = document.getElementById("a-3");
              if(div.hidden===false){
                  div.hidden= true;
                  button3.textContent="Show Question3";
              }else{
                div.hidden= false;
                button3.textContent="Hide Question3";
              }
});
            
            








