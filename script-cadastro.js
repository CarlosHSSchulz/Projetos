

function verSenha(){
    
    let inputSenha = document.querySelector('#password')

    if(inputSenha.getAttribute('type') === 'password'){
    inputSenha.setAttribute('type', 'text')
    } else {
    inputSenha.setAttribute('type', 'password')
    }         
}
function verConfirmSenha(){
    
    let inputSenha = document.querySelector('#confirm_password')

    if(inputSenha.getAttribute('type') === 'password'){
    inputSenha.setAttribute('type', 'text')
    } else {
    inputSenha.setAttribute('type', 'password')
    }         
}
