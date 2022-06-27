import  {User}  from "./user.js";


export class usersList{

    private usuarios = new Array<User>();
    private emptyUser = new User()

    //método para verificar se o usuário já está cadastrado
    isUserAlreadyRegistered(user:User){
        for (let i in this.usuarios) {
            if (this.usuarios[i].getCode() == user.getCode()) {
                alert('Código já cadastrado');
                return true;
            }else{
                return false
            }
        }
    }

    //método para inserir o usuçário na lista
    userRegister(user: User) {
        //adiciona um usuário a lista na primeira execução
        if (this.usuarios.length == 0) {
            this.usuarios.push(user)
            //verififca se o usuário já está cadastrado
        } else if(!this.isUserAlreadyRegistered(user)){
            //insere usuário na lista
            this.usuarios.push(user);
            alert('Usuario Cadastrado!');
        }else{
            //reinicia o processo para cadastrar
            this.emptyUser.registerUser()
        }
    }

    //verififca se a lista está vazia
    isListEmpty(): boolean{
        if (this.usuarios.length == 0) {
            console.log('Lista vazia');
            return true
        }
        return false
    }

    //lista os usuários que estão na lista e mostra na tela
    listUsers(): void {
        if (!this.isListEmpty()) {
            //limpa o console a cada execução
            console.clear();
            for(let i in this.usuarios){
                console.log(this.usuarios[i])
            }
        }

    }

    //verifica se o usuário está cadastrado na lista
    checkUser(user: User):User{
        for(let i in this.usuarios){
            if(this.usuarios[i].getCode() === user.getCode()){
                user.setName(this.usuarios[i].getName())
                console.log('Usuario encontrado')
                return user
            }
        }
        //se não seta os valores vazios para executar novamente
        console.log('Usuario não existe')
        user.setName('')
        user.setCode(0)
        return user
    }

}
