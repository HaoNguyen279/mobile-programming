async function downloadFile(fileName: string): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(`File ${fileName} downloaded successfully`);
}
downloadFile("tai_lieu_hoc_tap.mp4")