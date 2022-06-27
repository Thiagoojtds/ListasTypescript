import {usersList} from "./models/user-list.js"
import  {messageList}  from "./models/message-list.js";
import  {Message}  from "./models/message.js";
import  {User}  from "./models/user.js";
import {listAPiMessages} from "./models/api-list.js";

//instância duas listas a serem usadas durante a execução do código
export var listMessages = new messageList()
export var listUsers = new usersList()
export var user = new User()
let UserFrom = new User()
let UserTo = new User()
let message = new Message()
let userFrom: string | null = '';
let userTo: string | null = '';
let messageSubject: string | null = '';
let messageText: string | null = '';
let typeOf: string | null= '';

//mostra o painel e retorna a escolha do usuário
function showPanel(){
    var option = prompt("1 - Cadastrar Usuário\n2 - Enviar Mensagem\n3 - Ver histórico de mensagens\n4 - Sair")
    if(option == null){
        return 4
    }
    return Number(option);
}

var choose = showPanel();

do{
    switch(choose){
        case 1:
            //funcao cadastrar usuario 
            user.registerUser();
            choose = showPanel();
            break;
    
        case 2:
            //função enviar mensagem
            userFrom = addUserFrom(userFrom, UserFrom);
            userTo = addUserTo(userTo, UserTo);
            while(typeOf == '' || typeOf == null){
                typeOf = prompt('Deseja enviar uma mensagem apimentada?', 'S/N')
            }
            //verifica se o remetente e destinatário são iguais
            if(UserTo.getCode() == UserFrom.getCode()){
                alert('Remetente e Destinatário iguais')
                choose = 2;
                break;
            }

            if(typeOf == 'S'){
                createAPIMessage(userTo)
            }else{
                createMessage()
            }
            message.sendMessage(userFrom, UserFrom, userTo, UserTo, messageSubject, messageText); 
            choose = showPanel();
        break;
    
        case 3:
            listMessages.seeHistory();
            //função ver histórico  
            choose = showPanel();
        break;
    
        case 4:
            break;
        default:
            showPanel();
            break;
    }

}while(choose != 4);


function addUserFrom(userFrom: string|null, UserFrom: User){

    while (userFrom == '' || userFrom == null) {
        listUsers.listUsers()
        userFrom = prompt('Escolha um código de usuário remetente')
        UserFrom.setCode(Number(userFrom))
        UserFrom.setName('')
        //verifica se o usuário exise e retorna vazio ou não
        UserFrom = listUsers.checkUser(UserFrom);
        if(UserFrom.getCode() == 0){
            alert('Usuario não existe');
            userFrom = ''
        }
        userFrom = UserFrom.getName()
    }
    return userFrom;
}

function addUserTo(userTo: string|null, UserTo: User){
    while (userTo == ''|| userTo == null) {
        listUsers.listUsers()
        userTo = prompt('Escolha um código de usuário destinatário')
        UserTo.setCode(Number(userTo))
        UserTo.setName('')
        //verifica se o usuário exise e retorna vazio ou não
        UserTo = listUsers.checkUser(UserTo)
        if(UserTo.getCode() == 0){
            alert('usuario não existe')
            userTo = ''
        }
        userTo = UserTo.getName()
    }

    return userTo;
}

function createAPIMessage(userTo: string){
    //garante um valor de input no prompt para sseguir com a execução
    
        //cria uma nova lista com urls da API e preenche com o usuário destinatário
        let listMessage = new listAPiMessages(userTo)
        //sorteia uma url da lista
        let messageSort = listMessage.sortMessage()
    
    
        //busca a mensagem na API     
        async function getAPIMessage(message: string) {
            let url = `https://foaas.com${message}`
            let response = await fetch(url,{
                method: 'GET',
                headers:{'Accept': 'application/json'}
            })
            //aguardam a resposta da API para seguir com a execução
            var data = await response.json()
            data = data.message
            //seta o dado no localStorage para utilizar fora da função
            localStorage.setItem('msg', data)
        }
        //executa o método e passa uma url para fazer a requisição
        getAPIMessage(messageSort)
        //pega o dado do localStorage
        messageText = localStorage.getItem('msg')
     
}

function createMessage(){

    //garante um valor de input no prompt para sseguir com a execução
    while(messageSubject == ''|| messageSubject == null){
        messageSubject = prompt('Digite um Assunto')
    }
    
    //garante um valor de input no prompt para sseguir com a execução
    while(messageText == ''|| messageText == null){
        messageText = prompt('Digite uma mensagem')
    }
}



