function simulateTask3(time : number, taskName : string) : Promise<string> {
    return new Promise<string>((res, rej)=>{
        setTimeout(()=>{
            res("Task done" + taskName);
        },time);
    })
}
Promise.race([
    simulateTask3(200, "task a"),
    simulateTask3(1200, "task b"),
    simulateTask3(50000, "task c"),
]).then(firstRes => console.log(firstRes))

// với promise race, nó sẽ in ra cái promise resolve đầu tiên trong list, ở ví dụ này là task a
// đặc biệt promise.race sẽ ko ngưng các promise chưa chạy xong, nó sẽ vẫn chạy tiếp các promise cho đến khi xong