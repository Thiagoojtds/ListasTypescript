import { listUsers, listMessages } from "../view.js";
import  {listAPiMessages}  from "./apiList-class.js";
import  {User}  from "./user-class.js"


export class Message {
    

    private userFrom!: string;
    private userTo!: string;
    private subject!: string | null;
    private message!: string | null;
    private userToCode!: number | null;
    private userFromCode!: number | null;

    getUserToCode(){
        return this.userToCode
    }

    setUserToCode(userToCode: number){
        this.userToCode = userToCode
    }

    getUserFromCode(){
        return this.userFromCode
    }

    setUserFromCode(userFromCode: number){
        this.userFromCode = userFromCode
    }


    getUserTo(){
        return this.userTo;
    }

    setUserTo(userTo: string){
        this.userTo = userTo;
    }

    getUserFrom(){
        return this.userFrom;
    }

    setUserFrom(userFrom: string){
        this.userFrom = userFrom;
    }

    getMessage() {
        return this.message;
    }

    setMessage(message: string | null) {
        this.message = message;
    }

    getSubject() {
        return this.subject;
    }

    setSubject(subject: string) {
        this.subject = subject;
    }


    sendMessage() {

        //declaração de variáveis
        let messageSubject: string | null = '';
        var messageText: string | null = '';
        let userFrom: string | null = '';
        let userTo: string | null = '';
        let typeOf: string | null= '';
        let UserFrom = new User()
        let UserTo = new User()
    
        //garante um valor de input no prompt para sseguir com a execução
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
    
        //garante um valor de input no prompt para sseguir com a execução
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
        
        //verifica se o remetente e destinatário são iguais
        if(UserTo.getCode() == UserFrom.getCode()){
            alert('Remetente e Destinatário iguais')
            this.sendMessage()
        }
    
        //garante um valor de input no prompt para sseguir com a execução
        while(typeOf == '' || typeOf == null){
            typeOf = prompt('Deseja enviar uma mensagem apimentada?', 'S/N')
        }
    
        if(typeOf == 'S'){
    
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
    
        }else{      
    
            //garante um valor de input no prompt para sseguir com a execução
            while(messageSubject == ''|| messageSubject == null){
                messageSubject = prompt('Digite um Assunto')
            }
        
            //garante um valor de input no prompt para sseguir com a execução
            while(messageText == ''|| messageText == null){
                messageText = prompt('Digite uma mensagem')
            }
        }

        let message = new Message()
        message.setUserFrom(userFrom)
        message.setUserTo(userTo)
        message.setSubject(messageSubject)
        message.setMessage(messageText)
        message.setUserFromCode(UserFrom.getCode())
        message.setUserToCode(UserTo.getCode())

        listMessages.addMessage(message)
    }
}



