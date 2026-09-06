interface User {
    id: number;
    name: string;
}
async function fetchUser1(id: number): Promise<User> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      id,
      name: `User_${id}`
    };
}
async function fetchUsers(ids: number[]): Promise<User[]> {
    const promises = ids.map(item => fetchUser1(item)) // map lại mảng ids thành 1 mảng promises
    return Promise.all(promises); // promise .all để chạy song song fetch toàn bộ promise
}
fetchUsers([1,2,3,4,5]).then(data =>{
    console.log(data)
})