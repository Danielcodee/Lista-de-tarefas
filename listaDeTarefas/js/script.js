// obetendo tiosonos elementos necessarios


const inputBox = document.querySelector('.campoInput');
const addBtn = document.querySelector('.campoInput button');
const todoList = document.querySelector('.todoList');
const apagarTudoBtn = document.querySelector('.footer button');



//evento onkeyup


inputBox.onkeyup = () =>{
    let valorInserido = inputBox.value; //obetendo o valor inserido
    if(valorInserido.trim() != 0) { //se o valor do user nao for apenas espaços
        addBtn.classList.add("active"); //active o botao adicionar
    }else{
        addBtn.classList.remove("active"); // desative o botao
    }
}


mostrarTarefas(); // chamando funçao
addBtn.onclick = ()=>{
    let valorInserido = inputBox.value;
     let getLocalStorage = localStorage.setItem('new Todo');
    if(getLocalStorageData == null){
    listArray =[];
    } else {
    listArray = JSON.parse(getLocalStorageData);
}

listArray.push(valorInserido);
localStorage.setItem("New Todo", JSON.stringify(listArray));
mostrarTarefas();
add.classList.remove("active")




}
