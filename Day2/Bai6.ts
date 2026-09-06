function simulateTask2(time : number, taskName : string) : Promise<string> {
    return new Promise<string>((res, rej)=>{
        setTimeout(()=>{
            res("Task done" + taskName);
        },time);
    })
}

Promise.all([
    simulateTask2(200, "task a"),
    simulateTask2(1200, "task b"),
    simulateTask2(2200, "task c"),
]).then(res => console.log(res))

// có 3 task với 3 thời gian khác nhau
// khi chạy song song thì nếu toàn bộ task xong sẽ in ra text, với TH này thì sau khi đợi 2200ms thì sẽ in ra đủ 3 task