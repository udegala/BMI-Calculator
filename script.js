const btnEle =document.getElementById("btn");
const bmiInputEle = document.getElementById("bmi-result");
const weigConditionEle = document.getElementById("weight-condition")

function calculateBMI(){
   const heightValue = document.getElementById("height").value / 100;
   const weightValue = document.getElementById("weight").value;
   
   const bmiValue = weightValue / (heightValue * heightValue)
   
   bmiInputEle.value = bmiValue;

   if(bmiValue < 18)
   {
    weigConditionEle.innerText = "Under Weight";
   }
   else if(bmiValue >= 18 && bmiValue <= 24)
   {
    weigConditionEle.innerText = "Normal Weight";
   }
   else if(bmiValue > 24 && bmiValue <= 30)
   {
    weigConditionEle.innerText = "Over Weight";
   }
   else (bmiValue > 30)
   {
    weigConditionEle.innerText = "Obesity";
   }


}



btnEle.addEventListener("click",calculateBMI);