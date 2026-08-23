class Repository<T> {
    private items: T[] = [];
    // Thêm một item vào kho
    add(item: T): void {
      this.items.push(item);
    }
    // Lấy danh sách toàn bộ items
    getAll(): T[] {
      return this.items;
    }
}
const stringRepo = new Repository<string>();
stringRepo.add("TypeScript");
stringRepo.add("NodeJS");
console.log("Danh sách string:", stringRepo.getAll());

const numRepo = new Repository<number>();
numRepo.add(10);
numRepo.add(25);
console.log("Danh sách number:", numRepo.getAll());