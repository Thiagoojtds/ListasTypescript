import { data } from "jquery";
import axios from "./node_modules/axios/index";

class Usuario {

    private nome: string | null = '';
    private codigo: number = 0;


    public getNome() {
        return this.nome;
    }

    public setNome(nome: string | null) {
        this.nome = nome;
    }

    public getCodigo() {
        return this.codigo;
    }

    public setCodigo(codigo: number) {
        this.codigo = codigo;
    }



}

export class usersList{

    private usuarios = new Array<Usuario>();

    userRegister(user: Usuario) {
        if (this.usuarios.length == 0) {
            this.usuarios.push(user)
        } else {
            for (let i in this.usuarios) {
                if (this.usuarios[i].getCodigo() == user.getCodigo()) {
                    alert('Código já cadastrado');
                    cadastrarUsuario();
                }else{
                    this.usuarios.push(user);
                    alert('Usuario Cadastrado!');
                }
            }
        }

    }

    listUsers(): void {
        if (this.usuarios.length == 0) {
            console.log('Lista vazia');
        }
        console.clear();
        for(let i in this.usuarios){
            
            console.log(this.usuarios[i])
        }

    }

    checkUser(user: Usuario):Usuario{
        for(let i in this.usuarios){
            if(this.usuarios[i].getCodigo() === user.getCodigo()){
                user.setNome(this.usuarios[i].getNome())
                console.log('Usuario encontrado')
                return user
            }
        }
        console.log('Usuario não existe')
        user.setNome('')
        user.setCodigo(0)
        return user
    }

}

class Mensagem {

    private userFrom: Usuario;
    private userFromName: string;
    private userTo: Usuario;
    private userToName: string;
    private assunto: string | null ;
    private mensagem: string | null;
    private userFromCode: number;
    private userToCode: number;
    
    constructor(userTo: Usuario,userFrom: Usuario, assunto: string| null, mensagem: string| null){
        this.userTo = userTo
        this.userFrom = userFrom
        this.assunto = assunto
        this.mensagem = mensagem
        this.userFromName = String(this.userFrom.getNome())
        this.userToName = String(this.userTo.getNome())
        this.userFromCode = Number(this.userFrom.getCodigo())
        this.userToCode = Number(this.userTo.getCodigo())
    }

    getUserFromName(){
        return this.userFromName;
    }

    getUserToName(){
        return this.userToName;
    }

    getUserFromCode(){
        return this.userFromCode;
    }
    
    getUserToCode(){
        return this.userToCode;
    }

    getUserTo(){
        return this.userTo;
    }

    setUserTo(userTo: Usuario){
        this.userTo = userTo;
    }

    getUserFrom(){
        return this.userFrom;
    }

    setUserFrom(userFrom: Usuario){
        this.userFrom = userFrom;
    }

    getMensagem() {
        return this.mensagem;
    }

    setMensagem(mensagem: string) {
        this.mensagem = mensagem;
    }

    getAssunto() {
        return this.assunto;
    }

    setAssunto(assunto: string) {
        this.assunto = assunto;
    }
}

class messageList{

    private messages = new Array<Mensagem>()

    addMessage(msg: Mensagem):void{
        this.messages.push(msg)
    }


    showMessage(userCode: Usuario){
        let user = userCode.getCodigo()
        for(let i in this.messages){
            if(this.messages[i].getUserToCode() == user || this.messages[i].getUserFromCode() == user){
                // [Assunto] - [Recebida/Enviada]
                // Enviado por: [Nome do enviador] | Recebida por: [Nome do recebedor]
                // [Mensagem]
                console.log(`Mensagens de ${userCode.getNome()}:\n Assunto: ${this.messages[i].getAssunto()}
                Enviado por: ${this.messages[i].getUserToName()} | Recebida por: ${this.messages[i].getUserFromName()}
                ${this.messages[i].getMensagem()}`)
            }
        }
    }
}


export function sendMessage() {
    //2.1 - Escolha um código de usuário remetente:
    //2.1 - Apresenta a lista dos usuários cadastrados com código e nome
    //2.2 - Escolha um código de usuário destinatário:
    //2.2 - Apresenta a lista dos usuários cadastrados com código e nome
    //2.3 - Digite um assunto:
    //2.4 - Digite uma mensagem:
    // Regras: Caso não possua nenhum usuário cadastrado o sistema deverá apresentar a
    // mensagem “Nenhum usuário cadastrado”
    // O sistema deverá validar se o código do usuário remetente e destinatário existem
    // O sistema não deve permitir que o código de remetente e destinatário sejam iguais
    // O sistema não deve permitir códigos, assunto e mensagem em branco


    
    let messageAssunto: string | null = '';
    let messageText: string | null = '';
    let userFrom: string | null = '';
    let userTo: string | null = '';
    let typeOf: string | null= '';
    let usuarioFrom = new Usuario()
    let usuarioTo = new Usuario()

    while (userFrom == '' || userFrom == null) {
        listaUsuarios.listUsers()
        userFrom = prompt('Escolha um código de usuário remetente')
        usuarioFrom.setCodigo(Number(userFrom))
        usuarioFrom.setNome('')
        usuarioFrom = listaUsuarios.checkUser(usuarioFrom);
        if(usuarioFrom.getCodigo() == 0){
            alert('Usuario não existe');
            userFrom = ''
        }
        userFrom = usuarioFrom.getNome()
    }
    
    //let confirmacao = prompt(`Enviar mensagem de: ${userFrom}`)

    while (userTo == ''|| userTo == null) {
        listaUsuarios.listUsers()
        userTo = prompt('Escolha um código de usuário destinatário')
        usuarioTo.setCodigo(Number(userTo))
        usuarioTo.setNome('')
        usuarioTo = listaUsuarios.checkUser(usuarioTo)
        if(usuarioTo.getCodigo() == 0){
            alert('usuario não existe')
            userTo = ''
        }
        userTo = usuarioTo.getNome()
    }
    

    if(usuarioFrom.getCodigo() == usuarioTo.getCodigo()){
        alert('Remetente e Destinatário iguais')
        sendMessage()
    }

    while(typeOf == '' || typeOf == null){
        typeOf = prompt('Deseja enviar uma mensagem apimentada?', 'S/N')
    }

    /*
    if(typeOf == 'S'){
            
        const getMessage = async (userFrom: string, userTo: string) =>{
            const response = await fetch(`https://foaas.com/bday/${userFrom}/${userTo}`)
            const data = await response.json()
            return JSON.stringify(data.menssage)
        }
        getMessage(userFrom,userTo).then(message => messageText = message)
            
    //processamento sincrono e assincrono js, async await, promise*/


        while(messageAssunto == ''|| messageAssunto == null){
            messageAssunto = prompt('Digite um Assunto')
        }
    
        while(messageText == ''|| messageText == null){
            messageText =  prompt('Digite uma mensagem')
        }
    
        let message = new Mensagem(usuarioFrom, usuarioTo, messageAssunto, messageText)
        listMessages.addMessage(message)


}
var listMessages = new messageList()
var listaUsuarios = new usersList()

export function cadastrarUsuario() {
    // Ao escolher a opção 1 (cadastrar usuário) o sistema apresenta:
    // 1.1 - Digite um nome:
    // 1.2 - Digite um código:
    // Regras: Após digitar o nome e em seguida o código o sistema deverá validar se o código já
    // não foi cadastrado
    // Caso esteja correto, o sistema deverá armazenar o usuário em uma lista e apresentar que o
    // usuário foi cadastrado.

    const user = new Usuario();
    let userName: string | null = '';
    let userCode: string | null = '';

    while (userName == ''|| userName == null) {
        userName = prompt('Digite o nome');
    }
    while (userCode == '' || userCode == null) {
        userCode = prompt('Digite um código')
    }
    user.setCodigo(Number(userCode));
    user.setNome(userName)
    listaUsuarios.userRegister(user)
    listaUsuarios.listUsers()

    
}

export function seeHistory(){
    // Ao escolher a opção 3 (ver histórico de mensagens) o sistema apresenta:
    // 3.1 - Escolha de qual usuário deseja ver o histórico de mensagem:
    // 3.2 - Apresenta a lista de usuários cadastrados com o código e nome
    // 3.3 - O usuário escolhe um código (o sistema deverá validar se o código existe)
    // 3.4 - O sistema apresenta todas as mensagens que ele enviou e recebeu:

    let userMessage: string | null = '';
    let usuario = new Usuario();

    listaUsuarios.listUsers();
    while(userMessage == ''|| userMessage == null){
       userMessage = prompt('Escolha de qual usuário deseja ver o histórico de mensagem') 
    }

    usuario.setCodigo(Number(userMessage))
    usuario.setNome('')
    usuario = listaUsuarios.checkUser(usuario)
    listMessages.showMessage(usuario);

}

/*
class listAPiMessages{

    private messagesAPI = new Array<string>()

    constructor(){
        this.messagesAPI.push('/because/:from')
        this.messagesAPI.push('/absolutely/:company/:from')
        this.messagesAPI.push('/absolutely/:company/:from')
        this.messagesAPI.push('/absolutely/:company/:from')
        this.messagesAPI.push('/bday/:name/:from')
        this.messagesAPI.push('/bye/:from')
        this.messagesAPI.push('/cocksplat/:name/:from')
        this.messagesAPI.push('/deraadt/:name/:from')
        this.messagesAPI.push('/dosomething/:do/:something/:from')
        this.messagesAPI.push('/everyone/:from')
        this.messagesAPI.push('/fewer/:name/:from')
        this.messagesAPI.push('/flying/:from')
        this.messagesAPI.push('/fyyff/:from')

    }

    sortMessage(){
        const random = Number(Math.floor(Math.random() * this.messagesAPI.length))


    }

}*/

