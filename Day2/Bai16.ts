function simulateTask16(time : number) : Promise<string> {
    return new Promise<string>((res, rej)=>{
        setTimeout(()=>{
            res("Task done")
            console.log("Task done")
        },time);
    })
}

Promise.all([
    simulateTask16(1000),
    simulateTask16(1000),
    simulateTask16(1000), 
])// với promise.all các promise sẽ đc chạy song song với nhau, dẫn đến kết quả là in ra 3 task done cùng 1 lượt thay vì tuần tự 