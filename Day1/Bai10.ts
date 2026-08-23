class Account{
    public name : string;
    private phone : string;
    readonly birthdate : Date;
    constructor( name : string,  phone : string,  birthdate: Date){
        this.name = name;
        this.phone = phone;
        this.birthdate = birthdate;
    }
}
// Có thể thấy ta ko thể lấy ra thuộc tính private trực tiếp mà ko thông qua getter
// Vaf ko thể thay đổi thuộc tính readonly
const pro = new Account("Jack Ma", "09999999", new Date())
console.log(pro.name)
console.log(pro.birthdate)
// console.log(pro.phone) Lỗi
pro.name = "alo";
// pro.birthdate = new Date() lỗi
