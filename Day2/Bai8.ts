Promise.resolve(2)
    .then(num => num * num)
    .then(num => num * 2)
    .then(num => num + 5)
    .then(num => console.log(num))

    // promise chain lồng các promise chạy tiếp tục
    // lấy kết quả của then() trước truyền vào then sau
    // các then chạy tuần tự ko chạy song song 