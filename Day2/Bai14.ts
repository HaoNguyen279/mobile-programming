async function multiplyByThree(num: number): Promise<number> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return num * 3;
}
// async function bai14() {
//     const data = await multiplyByThree(3)
//     console.log(data)
// }

// bai14()

const data =  multiplyByThree(3).then(res => res)
console.log(data)
