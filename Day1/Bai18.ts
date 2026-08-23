class MathUtil {
    static add(a: number, b: number): number {
      return a + b;
    }
    static subtract(a: number, b: number): number {
      return a - b;
    }
    static multiply(a: number, b: number): number {
      return a * b;
    }
    static divide(a: number, b: number): number {
      if (b === 0) throw new Error("Không thể chia cho 0.");
      return a / b;
    }
}
// static method giups ta có thể gọi thẳng Class.method mà ko cần new MathUtil() tạo 1 object mới
console.log(MathUtil.add(1,2))
console.log(MathUtil.subtract(1,2))
console.log(MathUtil.multiply(1,2))
console.log(MathUtil.divide(1,2))