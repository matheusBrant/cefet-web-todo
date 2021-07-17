const tarefas = [
  {
    nome: "estudar",
    categoria: "estudos",
    realizada: false
  },
  {
    nome: "viajar",
    categoria: "lazer",
    realizada: false
  }
]
inputCategoria = document.querySelector('#nova-tarefa-categoria');
incluirTarefa = document.querySelector('#incluir-nova-tarefa');
listaTarefa = document.querySelector('#lista-tarefas');
inputNome = document.querySelector('#nova-tarefa-nome');
inputFiltroCategoria = document.querySelector('#filtro-de-categoria');

function insereTarefaNaPagina(tarefa) {
  let tarefas = document.createElement('li');
  let listaEl = document.querySelector('#lista-tarefas');
  tarefas.classList.add('item-tarefa');
  tarefas.innerText = tarefa.nome;
  tarefas.classList.add('marcado');
  listaEl.appendChild(tarefas);
}

function addExistentes() {
  let listaEl = document.querySelector('#lista-tarefas');
  listaEl.innerHTML = '';
  for(let tarefa of tarefas){
    insereTarefaNaPagina(tarefa);
  }
}