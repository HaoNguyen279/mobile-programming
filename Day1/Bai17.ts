class Logger {
    private static instance: Logger;
    // private lại constructor ngăn chặn tạo mới new Logger
    private constructor() {}
    public static getInstance(): Logger {
      if (!Logger.instance) {
        Logger.instance = new Logger();
      }
      return Logger.instance;
    }
    log(message: string): void {
      console.log(`[LOG - ${new Date().toISOString()}]: ${message}`);
    }
}
// với singleton pattern ta ko thể tạo instance/object 1 cách tùy tiện như new Logger được
// mà chỉ có thể getInstance, instance này là duy nhất trong 1 class và ko thế tạo thêm 
// vì vậy với class ta cần cung cấp method lấy instance duy nhất đó ra thay vì new, đó là getInstance
const SingletonPattern = Logger.getInstance()
SingletonPattern.log(" log log log log ok");