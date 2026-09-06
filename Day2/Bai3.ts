function rejectWithError() : Promise<never>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            reject(new Error('Something went wrong'))
        },1000);
    })
}
rejectWithError();