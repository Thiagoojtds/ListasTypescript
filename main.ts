//importação das funções necesárias par aexecução do menu
import { registerUser } from "app";
import { sendMessage } from "app";
import { seeHistory } from "app"


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
            registerUser();
            choose = showPanel();
            break;
    
        case 2:
            //função enviar mensagem
            sendMessage()
            choose = showPanel();
        break;
    
        case 3:
            seeHistory();
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


