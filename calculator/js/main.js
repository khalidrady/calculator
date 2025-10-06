let calculatorContainer = document.querySelector (".calculator-container");
let displayArea = document.querySelector(".display-area");

calculatorContainer.addEventListener("click" ,(e)=>{
    if(e.target.nodeName === "BUTTON"){
        switch(e.target.textContent){
            case("c"):
            clear();
            break;
            case("DEL"):
            deleteOneValue();
            break;
            default:
            addToDisplaytArea(e.target.textContent);
            break;
             case "=":
        calculateResult();
        break;
        }}})
        function clear(){
            displayArea.textContent = "";
        }
        function deleteOneValue (){
            displayArea.textContent = displayArea.textContent.slice(0 , -1);
        }
        function addToDisplaytArea (value){
           displayArea.textContent += value; 
        }
        function calculateResult() {
  try {
    let result = eval(displayArea.textContent);
    displayArea.textContent = result;
  } catch {
    displayArea.textContent = "Error";
  }
}