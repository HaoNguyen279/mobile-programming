function simulateTask17(time : number) : Promise<string> {
    return new Promise<string>((res, rej)=>{
        setTimeout(()=>{
            res("Task done 17")
        },time);
    })
}
async function iteratePromises(): Promise<void> {
    const promises: Promise<string>[] = [
        simulateTask17(1000),
        simulateTask17(500),
        simulateTask17(800)
    ];
    for await (const result of promises) {
      console.log(result);
    }
}
iteratePromises()