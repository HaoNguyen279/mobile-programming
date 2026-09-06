interface FakeApiResponse {
    id: number;
    data: string;
}
  
function simulateApiCall(id: number, shouldFail: boolean = false): Promise<FakeApiResponse> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (shouldFail) {
            reject(new Error("Error"));
        } else {
            resolve({ id, data: `Dữ liệu API ${id}` });
        }
        }, 1000);
    });
}
  
async function runDemoBai30(): Promise<void> {
    const requests = [
      simulateApiCall(1, false),
      simulateApiCall(2, true),
      simulateApiCall(3, false)
    ];
  
    const results = await Promise.allSettled(requests);
  
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log(`Task ${index + 1} thành công:`, result.value);
      } else {
        console.error(`Task ${index + 1} thất bại:`, (result.reason as Error).message);
      }
    });
}
  
  runDemoBai30();