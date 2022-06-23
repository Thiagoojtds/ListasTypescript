import { listUsers, listMessages } from "../view.js"
import  {Message}  from "./message-class.js"
import  {User}  from "./user-class.js"

export class messageList{

    private messages = new Array<Message>()

    //adiciona uma mensagem a lista
    addMessage(msg: Message):void{
        this.messages.push(msg)
    }
    //mostra a mensagem formatada no console
    showMessage(userCode: User){
        let user = userCode.getCode()
        for(let i in this.messages){
            if(this.messages[i].getUserToCode() == user || this.messages[i].getUserFromCode() == user){
                // [Assunto] - [Recebida/Enviada]
                // Enviado por: [Nome do enviador] | Recebida por: [Nome do recebedor]
                // [Mensagem]
                console.log(`Mensagens de ${userCode.getName()}:\n Assunto: ${this.messages[i].getSubject()}
                Enviado por: ${this.messages[i].getUserFrom()} | Recebida por: ${this.messages[i].getUserTo()}
                ${this.messages[i].getMessage()}`)
            }
        }
    }

    seeHistory(){

        //declaração de variáveis
        let userMessage: string | null = '';
        let user = new User();
    
        //lista os usuários
        listUsers.listUsers();
    
        //garante um valor de input no prompt para sseguir com a execução
        while(userMessage == ''|| userMessage == null){
           userMessage = prompt('Escolha de qual usuário deseja ver o histórico de mensagem') 
        }
    
        //seta um códgio para buscar na lista
        user.setCode(Number(userMessage))
        user.setName('')
        //verifica se o usuário existe na lista
        user = listUsers.checkUser(user)
        //mostra a mensagem caso encontrado o usuário
        listMessages.showMessage(user);

    }
}

