function simulateTask13(time : number) : Promise<string> {
    return new Promise<string>((res, rej)=>{
        setTimeout(()=>{
            rej("Someting wong bradar")
        },time);
    })
}

async function func13(){
    try {
        const a = await simulateTask13(2000);
        console.log(a)
    } catch (error) {
        console.log(error)
    }
}
func13()
