import { listUsers } from "../view.js";

export class User {

    private name: string | null = '';
    private code: number = 0;


    public getName() {
        return this.name;
    }

    public setName(name: string | null) {
        this.name = name;
    }

    public getCode() {
        return this.code;
    }

    public setCode(code: number) {
        this.code = code;
    }

    registerUser() {

        let user = new User();
        let userName: string | null = '';
        let userCode: string | null = '';
    
    
        //garante um valor de input no prompt para sseguir com a execução
        while (userName == ''|| userName == null) {
            userName = prompt('Digite o nome');
        }
    
        //garante um valor de input no prompt para sseguir com a execução
        while (userCode == '' || userCode == null) {
            userCode = prompt('Digite um código')
        }
        //seta no objeto atual os dados
        user.setCode(Number(userCode));
        user.setName(userName)
        //insere um novo usuário na lista
        listUsers.userRegister(user)
        //lista os usuários
        listUsers.listUsers()
    
    }    
}
