const {createLogger, transports, format} = require("winston");
const {combine,timestamp,printf,label,simple,colorize} = format;
const printFormat = printf(({timestamp, label,level, message})=>{
    return `${timestamp} [${label}] ${level} :  ${message}`;

});


const printLogFormat ={ 
    file : combine(
    label({
        label : "백엔드 맛보기"
    }),
    // colorize(),
    timestamp({
        format : "YYYY-MM-DD HH:mm:dd"
    }),
    printFormat
    ),
    console : combine(
        colorize(),//
        simple()
    )
    
}

const opt = {
    file :  new transports.File({
        filename : "access.log",
        dirname : "./logs",
        level : "info",
        format : printLogFormat.file,
    }),
    console : new transports.Console({
        level : "info",
        format : printLogFormat.console,
    })
};

const logger = createLogger({
    transports : [ opt.file
       
    ]
});
//  개발환경인지 배포인지 
if (process.env.NODE_ENV !== "production"){
    logger.add(opt.console)
}

logger.stream ={
    write : (message) => logger.info(message),
}
module.exports = logger;