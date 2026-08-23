export default class User{
    private _name : string;
    constructor(name : string){
        this._name = name;
    }
    get getName(): string{
        return this._name;
    }
    setName(newName : string){
        this._name = newName;
    }
}
// Khi dùng private thì ko thể gọi thẳng thuộc tính name của Object
const user = new User("Thuy Kieu");

console.log(user.getName)

user.setName("new name")
console.log(user.getName)