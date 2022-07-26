const logger = require('./logger')
// we dont need to instiance the logger because un ./logger we already did
logger.log('This an info message')

const customLogger = new logger.constructor("CUSTOM")
customLogger.log('Info message from second class import instance')