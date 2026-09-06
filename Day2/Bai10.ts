function filterEvenNumber2(nunbers : number[]) : Promise<number[]>{
    return new Promise<number[]>((res, rej)=>{
        setTimeout(()=>{
            const evens = nunbers.filter(item => item % 2 === 0);
            res(evens);
        }, 1000)
    })
}

filterEvenNumber([1,2,3,4,5,6,7]).then(res => console.log(res)).finally(() => console.log("Done"))