import { cadastrarUsuario } from "./app.js";
import { sendMessage } from "./app.js";
import { seeHistory } from "./app.js";
function showPanel() {
    var opcao = prompt("1 - Cadastrar Usuário\n2 - Enviar Mensagem\n3 - Ver histórico de mensagens\n4 - Sair");
    if (opcao == null) {
        return 4;
    }
    return Number(opcao);
}
var choose = showPanel();
do {
    switch (choose) {
        case 1:
            //funcao cadastrar usuario
            cadastrarUsuario();
            choose = showPanel();
            break;
        case 2:
            //função enviar mensagem
            sendMessage();
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
} while (choose != 4);
