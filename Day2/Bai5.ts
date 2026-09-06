function simulateTask(time : number) : Promise<string> {
    return new Promise<string>((res, rej)=>{
        setTimeout(()=>{
            res("Task done")
        },time);
    })
}

simulateTask(200).then(res => console.log(res));

