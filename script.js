let alea = Math.floor(Math.random() * 100)+1;
console.log(alea);
let input= document.getElementById('userInput');
let check = document.getElementById('check-button');
let result = document.getElementById('results');
const value=[]
let i = 0;

check.addEventListener("click", function(){
  i++;
  let inputvalue= parseInt(document.getElementById("userInput").value, 10);
  value.push(inputvalue);
  document.getElementById("try").textContent ="You tried : "+ value.join(' / ') ;
  if(inputvalue>alea){
    result.innerHTML = "It's less";
  }else if(inputvalue<alea){
    result.innerHTML = "It's more";
  }else if(inputvalue===alea){
    alert("Congratulation, you won in "+i+ " rounds! The number was "+ alea);
    document.location.reload(true);
  }
  document.getElementById('userInput').value = '';
});






