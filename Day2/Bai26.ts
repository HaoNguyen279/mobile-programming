function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function waitFiveSeconds(): Promise<void> {
    await delay(5000);
}

waitFiveSeconds()