
export class listAPiMessages{

    private messagesAPI = new Array<string>()

    //incializa a lista com alguns urls da API
    constructor(userTo: string){
        this.messagesAPI.push(`/bday/${userTo}/:from`)
        this.messagesAPI.push(`/blackadder/${userTo}/:from`)
        this.messagesAPI.push(`/dalton/${userTo}/:from`)
        this.messagesAPI.push(`/donut/${userTo}/:from`)
        this.messagesAPI.push(`/bday/${userTo}/:from`)
        this.messagesAPI.push(`/equity/${userTo}/:from`)
        this.messagesAPI.push(`/cocksplat/${userTo}/:from`)
        this.messagesAPI.push(`/deraadt/${userTo}/:from`)
        this.messagesAPI.push(`/fewer/${userTo}/:from`)
        this.messagesAPI.push(`/fts/${userTo}/:from`)
        this.messagesAPI.push(`/fewer/${userTo}/:from`)
        this.messagesAPI.push(`/keep/${userTo}/:from`)
        this.messagesAPI.push(`/linus/${userTo}/:from`)

    }

    //sorteia um numero da lista e retorna o url da posição sorteada
    sortMessage():string{
        const random = Number(Math.floor(Math.random() * this.messagesAPI.length))
        return this.messagesAPI[random]
    }

}
