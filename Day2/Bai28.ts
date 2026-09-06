function simulateTask99(time : number) : Promise<string> {
    return new Promise<string>((res, rej)=>{
        setTimeout(()=>{
            res("Task done")
        },time);
    })
}

async function batchProcess(): Promise<void> {
    const tasks: Promise<string>[] = Array.from({ length: 5 }, (_, index) =>
       simulateTask99((index + 1) * 500)
    );
    const results = await Promise.all(tasks);
    console.log(results);
}
batchProcess()