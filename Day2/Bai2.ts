function func2(): Promise<number> {
    return new Promise((resolve) =>{
      setTimeout(() => {
        resolve(10);
      }, 1000);
    });
}
func2().then(res => console.log(res))