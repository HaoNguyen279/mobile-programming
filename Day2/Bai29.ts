function simulateTask100(time: number, name: string): Promise<string> {
    return new Promise<string>((res) => {
      setTimeout(() => {
        res(`${name} done`);
      }, time);
    });
}
  
  async function queueProcess<T>(tasks: (() => Promise<T>)[]): Promise<T[]> {
    const results: T[] = [];
    for (const task of tasks) {
      const result = await task();
      results.push(result);
    }
    return results;
}
const tasksToRun = [
    () => simulateTask100(100, "Task 1"),
    () => simulateTask100(300, "Task 2"),
    () => simulateTask100(200, "Task 3")
];
  
queueProcess(tasksToRun).then((results) => {
    console.log("Resultt:", results);
});