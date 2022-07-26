const logger1 = require('./logger_1')
const logger2 = require('./logger_2')

logger1('Este mensaje se imprimra porque llama a logger1')
logger2.verbose('Este igual pero tiene nombre la propiedad "Verbose".')