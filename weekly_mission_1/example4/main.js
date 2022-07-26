const Logger = require('./logger')

const dbLogger = new Logger("DB")
dbLogger.info('This is and info message')

const accessLogger = new Logger('ACCESS')
accessLogger.verbose('Verbose message')