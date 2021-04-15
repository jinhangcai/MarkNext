/**
 * 可捕获系统崩溃异常，输出到标准输出及文件
 */
function logjs() {
    const winston = require('winston');
    const moment = require('moment');

    const myLogFormatter = function (options) {
        const timestamp = options.timestamp();
        const level = options.level.toUpperCase();
        const message = options.message || '';
        let module = 'default';
        if (options.meta && options.meta.module) {
            module = options.meta.module;
        }
        let showMeta = false;
        let metaStr = '';
        if (options.meta && options.meta.stack) {
            showMeta = true;
            metaStr = JSON.stringify(options.meta);
        }
        const formatted = `[${timestamp}] [${level}] ${module} - `;
        if (options.colorize) {
            const colorStr = winston.config.colorize(options.level, formatted);
            if (showMeta) {
                return `${colorStr}${message} stack: ${metaStr}`;
            }
            return `${colorStr}${message}`;
        }
        if (showMeta) {
            return `${formatted}${message} stack: ${metaStr}`;
        }
        return `${formatted}${message}`;
    };

    const timestampFormatter = () => {
        return moment().format('YYYY-MM-DD HH:MM:ss.SSS');
    };

    const transportConsole = new winston.transports.Console({
        json: false,
        prettyPrint: true,
        colorize: true,
        level: 'debug',
        timestamp: timestampFormatter,
        formatter: myLogFormatter,
        handleExceptions: true,
    });
    const errorConsole = new winston.transports.Console({
        json: false,
        prettyPrint: true,
        colorize: true,
        level: 'error',
        timestamp: timestampFormatter,
        formatter: myLogFormatter,
        handleExceptions: true,
    });
    const infoTransportFile = new winston.transports.File({
        name: 'full',
        filename: `./logs/${moment().format('YYYY-MM-DD')}-success.log`,
        json: false,
        level: 'info',
        maxsize: 1024 * 1024 * 10, // 10MB
        timestamp: timestampFormatter,
        handleExceptions: true,
    });

    const errorTransportFile = new winston.transports.File({
        name: 'full',
        filename: `./logs/${moment().format('YYYY-MM-DD')}-Error.log`,
        json: false,
        level: 'error',
        maxsize: 1024 * 1024 * 10, // 10MB
        timestamp: timestampFormatter,
        handleExceptions: true,
    });

    winston.loggers.add('default', {
        transports: [
            transportConsole,
            infoTransportFile
        ],
    });

    winston.loggers.add('Error', {
        transports: [
            errorConsole,
            errorTransportFile,
        ],
    });

    const defaultLog = winston.loggers.get('default');
    const serviceLog = winston.loggers.get('Error');

    const getDefaultLogger = (module) => {
        return {
            debug: (...args) => {
                const meta = {module};
                const fullParams = args.concat(meta);
                defaultLog.debug.apply(defaultLog, fullParams);
            },
            info: (...args) => {
                const meta = {module};
                const fullParams = args.concat(meta);
                defaultLog.info.apply(defaultLog, fullParams);
            },
            warn: (...args) => {
                const meta = {module};
                const fullParams = args.concat(meta);
                defaultLog.warn.apply(defaultLog, fullParams);
            },
            error: (...args) => {
                const meta = {module};
                const fullParams = args.concat(meta);
                defaultLog.error.apply(defaultLog, fullParams);
            }
        };
    };

    const getServiceLogger = (module) => {
        return {
            debug: (...args) => {
                const meta = {module};
                const fullParams = args.concat(meta);
                serviceLog.debug.apply(serviceLog, fullParams);
            },
            info: (...args) => {
                const meta = {module};
                const fullParams = args.concat(meta);
                serviceLog.info.apply(serviceLog, fullParams);
            },
            warn: (...args) => {
                const meta = {module};
                const fullParams = args.concat(meta);
                serviceLog.warn.apply(serviceLog, fullParams);
            },
            error: (...args) => {
                const meta = {module};
                const fullParams = args.concat(meta);
                serviceLog.error.apply(serviceLog, fullParams);
            }
        };
    };
    return { getDefaultLogger, getServiceLogger }
}

export default logjs;
// getDefaultLogger('testDefault1').debug('a', 'b', 'c', 'd');

// 打开下面的注释，new Error('error')是不会被捕获为异常的
/**
 aaa
 **/
