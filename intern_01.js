let inputs = document.getElementById("task");
let  text = document.querySelector(".task01");

function Add(){
    if(inputs.value == ''){
        alert("please! Enter the task :");
    } else {
         let newElement = document.createElement("ul");
         newElement.innerHTML = `${inputs.value} <i class="ri-delete-bin-6-line"></i>`
         text.appendChild(newElement);
         inputs.value = "";

         newElement.querySelector("i").addEventListener("click",remove);
         function remove(){
            newElement.remove()
         }
    }
}