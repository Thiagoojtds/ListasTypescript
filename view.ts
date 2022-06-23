import {usersList} from "./models/users-list.js"
import  {messageList}  from "./models/message-list.js";
import  {Message}  from "./models/message-class.js";
import  {User}  from "./models/user-class.js";

//instância duas listas a serem usadas durante a execução do código
export var listMessages = new messageList()
export var listUsers = new usersList()

//cria uma nova mensagem e insere na lista
export let user = new User()
let message = new Message()

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
            message.sendMessage()
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