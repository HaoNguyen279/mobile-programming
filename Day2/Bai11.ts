const func11 = new Promise<string>((resolve)=>{
    setTimeout(() =>{
        resolve("Hello Async");
    }, 2000);
})


async function funcAwait11() {
    const messgae = await func11; // await sẽ đợi resolve promise nên các thành phần code phía dưới phải đợi await xong
    console.log(messgae)
}
funcAwait11()