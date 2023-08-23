const inputbox=document.getElementById("input-box")
const listcont=document.getElementById("list-cont")

//when we click ADD button
function addTask(){
    if(inputbox.value === ''){
        alert("You must write a task");
    }
    else{                       //crete a new task
       let li= document.createElement("li")
       li.innerHTML = inputbox.value;
       listcont.appendChild(li);


       //delete item
       let span = document.createElement("span")   //style span
       span.innerHTML="\u00d7"
       li.appendChild(span)
    }

    //auto remove msg from box after creating new task
    inputbox.value="";
    savedata();
}

//click function  cheked and unchecked 

listcont.addEventListener("click",function(e){
    if(e.target.tagName=== "LI") {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){   //delete task
        e.target.parentElement.remove();
        savedata();
    }
},false);


//save data after refresh ->localstorage

function savedata(){
    localStorage.setItem("data",listcont.innerHTML);  // content in listcont will be stored in browser

}

//dispay savedata after reopen browser
function showtask(){
    listcont.innerHTML=localStorage.getItem("data")
}
showtask();