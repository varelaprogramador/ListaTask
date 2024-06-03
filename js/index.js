let qtdTask = 2;

function formAddTask(){
    // Criar a div com o ID "box-addTask"
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
document.getElementById('global').insertAdjacentElement('afterbegin',boxAddTask);
}

function criaTask(event) {
    event.preventDefault();
    

    const newTask = {
        nomeTask: document.getElementById('nomeTask-inpt').value,
        descriTask: document.getElementById('descriTask-inpt').value
    }

    

    // Criar o elemento base da lista
    const listItem = document.createElement('li');
    listItem.id = `task-${qtdTask}`; // Definir o ID

    // Criar o elemento article para conter o conteúdo da tarefa
    const article = document.createElement('article');
    article.classList.add('task');

    // Criar o elemento header para o título
    const header = document.createElement('header');

    // Criar o elemento título (h1)
    const title = document.createElement('h1');
    title.textContent = newTask.nomeTask; // Definir o texto do título

    // Adicionar o título ao header
    header.appendChild(title);

    // Criar o elemento label para a descrição (h2)
    const descriptionLabel = document.createElement('h2');
    descriptionLabel.textContent = 'Descrição:';

    // Criar o elemento parágrafo (p) para a descrição
    const description = document.createElement('p');
    description.textContent = newTask.descriTask;

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
    if (taskList.appendChild(listItem)) {
        qtdTask++;
        form=document.getElementById('box-addTask');
        form.remove();
        console.log(qtdTask)
    }
}

function selectionTask() {
    const btnExc=document.createElement('button');
    btnExc.textContent="EXCLUIR";
    btnExc.setAttribute("Onclick","excluirTask()");
    btnExc.id='excluir';
    document.getElementById('body-content').insertAdjacentElement('afterbegin', btnExc);

    for (i = 1; i <= qtdTask; i++) {

        const selectionTask = document.getElementById(`task-${i}`);
        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox')
        checkBox.id=`checkBox-${i}`;
        selectionTask.appendChild(checkBox);

    }
}
function excluirTask(){
    let qtdExclusao=0;
    for(i = 1; i <= qtdTask; i++){
       
        const v=document.getElementById(`checkBox-${i}`);
        if(v.checked){ 
            const selectionTask = document.getElementById(`task-${i}`);
            selectionTask.remove();
            console.log(`task-${i}`);
            qtdExclusao++;
        }

        
    }
    qtdTask-=qtdExclusao;

    let btn = document.getElementById('excluir');
    btn.remove();
}
