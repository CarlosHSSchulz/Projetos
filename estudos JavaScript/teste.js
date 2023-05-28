function clicou() {
    const teste = document.querySelector('#teste');
    const ul = document.querySelector('ul');

    //para adicionar itens ao redor do elemento
    //para adicionar um item depois do elemento selecionado
    ul.after("Texto adicionado")

    //para adicionar um item antes do elemento selecionado
    ul.before("Texto adicionado")

    //*** os comandos acima serem apenas para adicionar textos ***/

    //para utilizar uma tag devemos primeiro criar a tag
    let newUl = document.createElement("ul");

    for(let i = 0; i < 5; i++) {
        let newLi = document.createElement("li");
        newLi.innerHTML = "novo item " + (i + 1);
        newUl.append(newLi);
    }

    ul.after(newUl)
    
};