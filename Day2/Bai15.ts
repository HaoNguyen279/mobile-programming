function simulateTask15(time : number) : Promise<string> {
    return new Promise<string>((res, rej)=>{
        setTimeout(()=>{
            res("Task done")
        },time);
    })
}

async function runSequentially(): Promise<void> {
    const result1 = await simulateTask15(1000);
    console.log(result1);
    const result2 = await simulateTask15(1000);
    console.log(result2);
    const result3 = await simulateTask15(1000);
    console.log(result3);
}
runSequentially()// ở func chạy tuần tự này các lần in ra task done sẽ xuất hiện tuần tự vì nó ko chạy song song
// sau mỗi lần await resolve xong sẽ mới bắt đầu tiếp tục chạy các code block tiếp 