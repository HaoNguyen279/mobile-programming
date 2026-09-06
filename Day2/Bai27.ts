async function fetchWithRetry(url: string, retries: number): Promise<Response> {
    for (let attempt = 0; attempt <= retries; attempt++) {
    try {
        const response = await fetch(url);
        if(!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        return response;
    }catch (error) {
        if (attempt === retries) {
            throw error;
        }
    }
    }
    throw new Error("Failed after maximum retries");
}

fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1",2).then(data => console.log(data))