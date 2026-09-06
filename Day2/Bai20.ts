interface User {
    id: number;
    name: string;
}
async function fetchUser20(id: number): Promise<User> {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // với thời gian call api là 3000ms thì hàm phía dưới sẽ reject
    return {
      id,
      name: `User_${id}`
    };
}
async function fetchWithTimeout<T>(promise: Promise<T>, timeoutMs: number = 2000): Promise<T> {
    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => {
        reject(new Error("Request timed out"));
      }, timeoutMs);
    });
    return Promise.race([promise, timeoutPromise]);
}
fetchWithTimeout(fetchUser20(23686691));