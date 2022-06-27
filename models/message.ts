import {listUsers, listMessages} from "../view.js";
import  {listAPiMessages}  from "./api-list.js";
import  {User}  from "./user.js"


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

    sendMessage(userFrom: string, UserFrom: User, userTo: string, UserTo: User, messageSubject: string, messageText: string) {


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








