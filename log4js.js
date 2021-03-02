const log4js = require('log4js')
// 初始化log4js时 会先生成appenders下对应的日志文件
//log4js.getLogger 调用这个方法时 会在categories中找到对应的值，找不到就会默认使用default对应的appenders
log4js.configure({
    appenders: {
        logFile: {
            type: "dateFile",
            filename: "./logs/logFile", // 你要写入日志文件的路径
            alwaysIncludePattern: true, // 将模式包含在当前日志文件的名称及其备份中
            pattern: "yyyy-MM-dd-hh.log",
            encoding: "utf-8",
            maxLogSize: 10240, // 文件最大存储空间
        },
        logErrorFile: {
            type: "dateFile",
            filename: "./logs/logFile", // 你要写入日志文件的路径
            alwaysIncludePattern: true, // 将模式包含在当前日志文件的名称及其备份中
            pattern: "yyyy-MM-dd-hh.error.log",
            encoding: "utf-8",
            maxLogSize: 10240, // 文件最大存储空间
        },
        apiLogFile: {
            type: "dateFile",
            filename: "./logs/apiLogFile", // 你要写入日志文件的路径
            alwaysIncludePattern: true, // 将模式包含在当前日志文件的名称及其备份中
            pattern: "yyyy-MM-dd-hh.log",
            encoding: "utf-8",
            maxLogSize: 10240, // 文件最大存储空间
        },
        apiLogErrorFile: {
            type: "dateFile",
            filename: "./logs/apiLogFile", // 你要写入日志文件的路径
            alwaysIncludePattern: true, // 将模式包含在当前日志文件的名称及其备份中
            pattern: "yyyy-MM-dd-hh.error.log",
            encoding: "utf-8",
            maxLogSize: 10240, // 文件最大存储空间
        },
        logConsole: {
            type: "console",
        },
    },
    categories: {
        default: {
            appenders: ["logFile"],
            level: "all",
        },
        info: {
            appenders: ["logFile"],
            level: "all",
        },
        error: {
            appenders: ["logErrorFile"],
            level: "error",
        },
        apiInfo: {
            appenders: ["apiLogFile"],
            level: "all",
        },
        apiError: {
            appenders: ["apiLogErrorFile"],
            level: "error",
        },
        console: {
            appenders: ["logConsole"],
            level: log4js.levels.ALL.levelStr,
        }
    },
});

module.exports = {
    info: (msg, ...args) => {
        const logger = log4js.getLogger(process.env.NODE_ENV !== "production" ? "info": "console")
        logger.info(msg, ...args)
    },
    debug: (msg, ...args) => {
        const logger = log4js.getLogger(process.env.NODE_ENV === "production" ? "info": "console")
        logger.debug(msg, ...args)
    },
    error: (msg, ...args) => {
        const logger = log4js.getLogger(process.env.NODE_ENV === "production" ? "error": "console")
        logger.error(msg, ...args)
    },
    apiInfo: (msg, ...args) => {
        const logger = log4js.getLogger(process.env.NODE_ENV === "production" ? "apiInfo": "console")
        logger.info(msg, ...args)
    },
    apiDebug: (msg, ...args) => {
        const logger = log4js.getLogger(process.env.mode === "production" ? "apiInfo": "console")
        logger.debug(msg, ...args)
    },
    apiError: (msg, ...args) => {
        const logger = log4js.getLogger(process.env.mode === "production" ? "apiError": "console")
        logger.error(msg, ...args)
    },
}
