function loginSwitch(element){
    if (element.innerText == "Login") {
        element.innerText = "Logout"
    }
    else{
        element.innerText = "Login"
    }
}

var addDef = document.querySelector('#definition')
function disappear (addDef) {
    addDef.remove();
}