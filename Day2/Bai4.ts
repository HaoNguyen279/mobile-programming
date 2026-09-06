const randomPromis = new Promise<number>((res, rej)=>{
    const randomNum = Math.random();
    res(randomNum);
})
randomPromis.then(res => console.log(res)).catch(err => console.log(err))