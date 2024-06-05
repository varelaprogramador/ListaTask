



let formAdd = 'form-addTask';
let btnExcluir = true;
let task = [];

let qtdTask = () => {
    return task.length ;
};
function renderTask(){
    document.getElementById("area-task").innerHTML="";

    task.map((todo)=>{
        document.getElementById("area-task").appendChild(todo)
        console.log('Tarefa :'+todo);


    });

}

function formAddTask() {
    // Criar a div com o ID "box-addTask"
    if (!document.getElementById(formAdd)) {
        const boxAddTask = document.createElement('div');
        boxAddTask.id = 'box-addTask';

        // Criar o formulário com o ID "form-addTask" e definir a função "criaTask(event)" para o evento "onsubmit"
        const formAddTask = document.createElement('form');
        formAddTask.setAttribute('onsubmit', 'criaTask(event)');
        formAddTask.id = 'form-addTask';

        // Criar a label para o campo "Nome da Tarefa"
        const labelNomeTask = document.createElement('label');
        labelNomeTask.setAttribute('for', 'nomeTask');
        labelNomeTask.textContent = 'Nome da Tarefa*';

        // Criar o input para o campo "Nome da Tarefa" com o ID "nomeTask-inpt" e o atributo "name" definido como "nomeTask"
        const inputNomeTask = document.createElement('input');
        inputNomeTask.setAttribute('name', 'nomeTask');
        inputNomeTask.id = 'nomeTask-inpt';
        inputNomeTask.type = 'text';

        // Criar a label para o campo "Descrição"
        const labelDescriTask = document.createElement('label');
        labelDescriTask.setAttribute('for', 'descriTask');
        labelDescriTask.textContent = 'Descrição';

        // Criar a textarea para o campo "Descrição" com o ID "descriTask-inpt" e definir o número de linhas e colunas
        const textareaDescriTask = document.createElement('textarea');
        textareaDescriTask.setAttribute('name', 'descriTask');
        textareaDescriTask.id = 'descriTask-inpt';
        textareaDescriTask.setAttribute('rows', '4');
        textareaDescriTask.setAttribute('cols', '50');

        // Criar o botão de submit com o valor "Criar Tarefa"
        const submitButton = document.createElement('input');
        submitButton.type = 'submit';
        submitButton.value = 'Criar Tarefa';

        // Adicionar os elementos criados ao formulário
        formAddTask.appendChild(labelNomeTask);
        formAddTask.appendChild(inputNomeTask);
        formAddTask.appendChild(labelDescriTask);
        formAddTask.appendChild(textareaDescriTask);
        formAddTask.appendChild(submitButton);

        // Adicionar o formulário à div "box-addTask"
        boxAddTask.appendChild(formAddTask);

        document.getElementById('global').insertAdjacentElement('afterbegin', boxAddTask);
    } else {
        console.log('tentou abrir um novo form erro');
    }
}


function criaTask(event) {
    event.preventDefault();


    const newTask = {
        nomeTask: document.getElementById('nomeTask-inpt'),
        descriTask: document.getElementById('descriTask-inpt')
    }

    if(!newTask.nomeTask.value == "" && !newTask.descriTask.value == ""){

    // Criar o elemento base da lista
    const listItem = document.createElement('li');
    listItem.classList.add('box-task');

    // Criar o elemento article para conter o conteúdo da tarefa
    const article = document.createElement('article');
    article.classList.add('task');

    // Criar o elemento header para o título
    const header = document.createElement('header');

    // Criar o elemento título (h1)
    const title = document.createElement('h1');
    title.textContent = newTask.nomeTask.value; // Definir o texto do título

    // Adicionar o título ao header
    header.appendChild(title);

    // Criar o elemento label para a descrição (h2)
    const descriptionLabel = document.createElement('h2');
    descriptionLabel.textContent = 'Descrição:';

    // Criar o elemento parágrafo (p) para a descrição
    const description = document.createElement('p');
    description.textContent = newTask.descriTask.value;

    // Criar o elemento botão
    const button = document.createElement('button');
    button.classList.add('btn-taskV'); // Adicionar a classe "btn-taskV"
    button.textContent = 'Ver Tarefa'; // Definir o texto do botão

    // Construir a estrutura aninhando os elementos
    article.appendChild(header);
    article.appendChild(descriptionLabel);
    article.appendChild(description);
    article.appendChild(button);

    listItem.appendChild(article);

    

    const taskList = document.getElementById('area-task');
    taskList.appendChild(listItem);
        //adicionando a lista
        
        task.push(listItem);
        console.log("nova tarefa inserida"+task);

        
        
        document.getElementById(formAdd).remove();
}else{
        newTask.nomeTask.value=="" ?newTask.nomeTask.style.border="1px solid red":"";
       
 
        newTask.descriTask.value=="" ?newTask.descriTask.style.border="1px solid red":"";
   
}
}

function modeRemove() {
    if (!document.getElementById('excluir')) {

        btnExcluir = document.createElement('button');
        btnExcluir.textContent = "EXCLUIR";
        btnExcluir.setAttribute("Onclick", "excluirTask()");
        btnExcluir.id = 'excluir';
        document.getElementById('body-content').insertAdjacentElement('afterbegin', btnExcluir);

        for (i = 0; i < task.length; i++) {
            const checkBox = document.createElement('input');
            checkBox.type = 'checkbox'
            checkBox.classList = `selection-remove`;
            task[i].insertAdjacentElement('afterbegin', checkBox);
            console.log("checkbox add"+i);

        }
    }
}
function excluirTask() {
    document.querySelector('#excluir').remove();
    let quant = qtdTask();
    const checkBox = document.querySelectorAll('.selection-remove');
    console.log(checkBox);

    const positionDelete=[];

    for (i = 0; i < checkBox.length; i++) {

        if (checkBox[i].checked) {
            positionDelete.push(i);
            
            task[i].remove();
            console.log(task.length)
           
        }

        
    }
    console.log("ha ser deletado:"+positionDelete);
    for(i=0;i<=positionDelete.length;i++){
        
        let indice=positionDelete[i];
        task.splice(indice,1);
    }
    console.log("ULTIMO",task);


    
    }