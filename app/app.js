var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class User {
    constructor() {
        this.nome = '';
        this.codigo = 0;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getCodigo() {
        return this.codigo;
    }
    setCodigo(codigo) {
        this.codigo = codigo;
    }
}
export class usersList {
    constructor() {
        this.usuarios = new Array();
    }
    //método para verificar se o usuário já está cadastrado
    isUserAlreadyRegistered(user) {
        for (let i in this.usuarios) {
            if (this.usuarios[i].getCodigo() == user.getCodigo()) {
                alert('Código já cadastrado');
                //reinicia o processo para cadastrar
                registerUser();
            }
            else {
                return false;
            }
        }
    }
    //método para inserir o usuçário na lista
    userRegister(user) {
        //adiciona um usuário a lista na primeira execução
        if (this.usuarios.length == 0) {
            this.usuarios.push(user);
            //verififca se o usuário já está cadastrado
        }
        else if (!this.isUserAlreadyRegistered(user)) {
            //insere usuário na lista
            this.usuarios.push(user);
            alert('Usuario Cadastrado!');
        }
    }
    isListEmpty() {
        if (this.usuarios.length == 0) {
            console.log('Lista vazia');
            return true;
        }
        return false;
    }
    //lista os usuários que estão na lista e mostra na tela
    listUsers() {
        if (!this.isListEmpty()) {
            //limpa o console a cada execução
            console.clear();
            for (let i in this.usuarios) {
                console.log(this.usuarios[i]);
            }
        }
    }
    //verifica se o usuário está cadastrado na lista
    checkUser(user) {
        for (let i in this.usuarios) {
            if (this.usuarios[i].getCodigo() === user.getCodigo()) {
                user.setNome(this.usuarios[i].getNome());
                console.log('Usuario encontrado');
                return user;
            }
        }
        //se não seta os valores vazios para executar novamente
        console.log('Usuario não existe');
        user.setNome('');
        user.setCodigo(0);
        return user;
    }
}
class Message {
    constructor(userTo, userFrom, subject, message) {
        this.userTo = userTo;
        this.userFrom = userFrom;
        this.subject = subject;
        this.message = message;
        //pega os dados do objeto recebido e converte em String/Number
        this.userFromName = String(this.userFrom.getNome());
        this.userToName = String(this.userTo.getNome());
        this.userFromCode = Number(this.userFrom.getCodigo());
        this.userToCode = Number(this.userTo.getCodigo());
    }
    getUserFromName() {
        return this.userFromName;
    }
    getUserToName() {
        return this.userToName;
    }
    getUserFromCode() {
        return this.userFromCode;
    }
    getUserToCode() {
        return this.userToCode;
    }
    getUserTo() {
        return this.userTo;
    }
    setUserTo(userTo) {
        this.userTo = userTo;
    }
    getUserFrom() {
        return this.userFrom;
    }
    setUserFrom(userFrom) {
        this.userFrom = userFrom;
    }
    getMessage() {
        return this.message;
    }
    setMessage(message) {
        this.message = message;
    }
    getSubject() {
        return this.subject;
    }
    setSubject(subject) {
        this.subject = subject;
    }
}
class messageList {
    constructor() {
        this.messages = new Array();
    }
    //adiciona uma mensagem a lista
    addMessage(msg) {
        this.messages.push(msg);
    }
    //mostra a mensagem formatada no console
    showMessage(userCode) {
        let user = userCode.getCodigo();
        for (let i in this.messages) {
            if (this.messages[i].getUserToCode() == user || this.messages[i].getUserFromCode() == user) {
                // [Assunto] - [Recebida/Enviada]
                // Enviado por: [Nome do enviador] | Recebida por: [Nome do recebedor]
                // [Mensagem]
                console.log(`Mensagens de ${userCode.getNome()}:\n Assunto: ${this.messages[i].getSubject()}
                Enviado por: ${this.messages[i].getUserToName()} | Recebida por: ${this.messages[i].getUserFromName()}
                ${this.messages[i].getMessage()}`);
            }
        }
    }
}
export function sendMessage() {
    //declaração de variáveis
    let messageSubject = '';
    var messageText = '';
    let userFrom = '';
    let userTo = '';
    let typeOf = '';
    let UserFrom = new User();
    let UserTo = new User();
    //garante um valor de input no prompt para sseguir com a execução
    while (userFrom == '' || userFrom == null) {
        listaUsuarios.listUsers();
        userFrom = prompt('Escolha um código de usuário remetente');
        UserFrom.setCodigo(Number(userFrom));
        UserFrom.setNome('');
        //verifica se o usuário exise e retorna vazio ou não
        UserFrom = listaUsuarios.checkUser(UserFrom);
        if (UserFrom.getCodigo() == 0) {
            alert('Usuario não existe');
            userFrom = '';
        }
        userFrom = UserFrom.getNome();
    }
    //garante um valor de input no prompt para sseguir com a execução
    while (userTo == '' || userTo == null) {
        listaUsuarios.listUsers();
        userTo = prompt('Escolha um código de usuário destinatário');
        UserTo.setCodigo(Number(userTo));
        UserTo.setNome('');
        //verifica se o usuário exise e retorna vazio ou não
        UserTo = listaUsuarios.checkUser(UserTo);
        if (UserTo.getCodigo() == 0) {
            alert('usuario não existe');
            userTo = '';
        }
        userTo = UserTo.getNome();
    }
    //verifica se o remetente e destinatário são iguais
    if (UserTo.getCodigo() == UserFrom.getCodigo()) {
        alert('Remetente e Destinatário iguais');
        sendMessage();
    }
    //garante um valor de input no prompt para sseguir com a execução
    while (typeOf == '' || typeOf == null) {
        typeOf = prompt('Deseja enviar uma mensagem apimentada?', 'S/N');
    }
    if (typeOf == 'S') {
        //cria uma nova lista com urls da API e preenche com o usuário destinatário
        let listMessage = new listAPiMessages(userTo);
        //sorteia uma url da lista
        let messageSort = listMessage.sortMessage();
        //busca a mensagem na API     
        function getAPIMessage(message) {
            return __awaiter(this, void 0, void 0, function* () {
                let url = `https://foaas.com${message}`;
                let response = yield fetch(url, {
                    method: 'GET',
                    headers: { 'Accept': 'application/json' }
                });
                //aguardam a resposta da API para seguir com a execução
                var data = yield response.json();
                data = data.message;
                //seta o dado no localStorage para utilizar fora da função
                localStorage.setItem('msg', data);
            });
        }
        //executa o método e passa uma url para fazer a requisição
        getAPIMessage(messageSort);
        //pega o dado do localStorage
        messageText = localStorage.getItem('msg');
    }
    else {
        //garante um valor de input no prompt para sseguir com a execução
        while (messageSubject == '' || messageSubject == null) {
            messageSubject = prompt('Digite um Assunto');
        }
        //garante um valor de input no prompt para sseguir com a execução
        while (messageText == '' || messageText == null) {
            messageText = prompt('Digite uma mensagem');
        }
    }
    //cria uma nova mensagem e insere na lista
    let message = new Message(UserFrom, UserTo, messageSubject, messageText);
    listMessages.addMessage(message);
}
//instância duas listas a serem usadas durante a execução do código
var listMessages = new messageList();
var listaUsuarios = new usersList();
//função para registrar um usuário
export function registerUser() {
    const user = new User();
    let userName = '';
    let userCode = '';
    //garante um valor de input no prompt para sseguir com a execução
    while (userName == '' || userName == null) {
        userName = prompt('Digite o nome');
    }
    //garante um valor de input no prompt para sseguir com a execução
    while (userCode == '' || userCode == null) {
        userCode = prompt('Digite um código');
    }
    //seta no objeto atual os dados
    user.setCodigo(Number(userCode));
    user.setNome(userName);
    //insere um novo usuário na lista
    listaUsuarios.userRegister(user);
    //lista os usuários
    listaUsuarios.listUsers();
}
export function seeHistory() {
    //declaração de variáveis
    let userMessage = '';
    let usuario = new User();
    //lista os usuários
    listaUsuarios.listUsers();
    //garante um valor de input no prompt para sseguir com a execução
    while (userMessage == '' || userMessage == null) {
        userMessage = prompt('Escolha de qual usuário deseja ver o histórico de mensagem');
    }
    //seta um códgio para buscar na lista
    usuario.setCodigo(Number(userMessage));
    usuario.setNome('');
    //verifica se o usuário existe na lista
    usuario = listaUsuarios.checkUser(usuario);
    //mostra a mensagem caso encontrado o usuário
    listMessages.showMessage(usuario);
}
class listAPiMessages {
    //incializa a lista com alguns urls da API
    constructor(userTo) {
        this.messagesAPI = new Array();
        this.messagesAPI.push(`/bday/${userTo}/:from`);
        this.messagesAPI.push(`/blackadder/${userTo}/:from`);
        this.messagesAPI.push(`/dalton/${userTo}/:from`);
        this.messagesAPI.push(`/donut/${userTo}/:from`);
        this.messagesAPI.push(`/bday/${userTo}/:from`);
        this.messagesAPI.push(`/equity/${userTo}/:from`);
        this.messagesAPI.push(`/cocksplat/${userTo}/:from`);
        this.messagesAPI.push(`/deraadt/${userTo}/:from`);
        this.messagesAPI.push(`/fewer/${userTo}/:from`);
        this.messagesAPI.push(`/fts/${userTo}/:from`);
        this.messagesAPI.push(`/fewer/${userTo}/:from`);
        this.messagesAPI.push(`/keep/${userTo}/:from`);
        this.messagesAPI.push(`/linus/${userTo}/:from`);
    }
    //sorteia um numero da lista e retorna o url da posição sorteada
    sortMessage() {
        const random = Number(Math.floor(Math.random() * this.messagesAPI.length));
        return this.messagesAPI[random];
    }
}
