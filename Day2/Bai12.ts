function simulateTask12(time : number) : Promise<string> {
    return new Promise<string>((res, rej)=>{
        setTimeout(()=>{
            res("Task done")
        },time);
    })
}

async function func12(){
    const a = await simulateTask12(2000);
    console.log(a)
}
func12()
