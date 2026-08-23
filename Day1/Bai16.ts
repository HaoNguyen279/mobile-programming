class Box<T>{
    constructor( private content : T){}
    getContent(): T {
        return this.content;
    }
    setContent(newContent: T): void {
        this.content = newContent;
    }
}

const box1 = new Box("jackckkc")
const box2 = new Box(432774);
// Giải thích : vì là generic class thì có chèn bất cứ TYPE nào vào cũng đc, nên có thể cho số number hoặc 
// string đều được
console.log(box1.getContent());
console.log(box2.getContent());