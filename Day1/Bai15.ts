import Book from "./Bai6.ts"
import User from "./Bai7.ts"
class Library {
    public books: Book[] = [];
    public users: User[] = [];

    addBook(book: Book): void {
      this.books.push(book);
      console.log(`Đã thêm sách: ${book.title}`);
    }
    addUser(user: User): void {
      this.users.push(user);
    }
}
const thuVienPro = new Library();
const sach1 = new Book("jack ma", "elon musk", 887)
const userPro = new User("ok name")
thuVienPro.addBook(sach1);
thuVienPro.addUser(userPro);
console.log(thuVienPro.books, thuVienPro.users)
