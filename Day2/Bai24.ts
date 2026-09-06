async function postData(): Promise<void> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
    });
    const data = await response.json();
    console.log(data);
}
postData()