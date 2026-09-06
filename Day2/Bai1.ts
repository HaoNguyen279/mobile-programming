const func1 = new Promise<string>((resolve)=>{
    setTimeout(() =>{
        resolve("Hello Async");
    }, 2000);
})
func1.then(res => console.log(res))