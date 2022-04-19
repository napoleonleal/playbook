const Logger = require('./logger') // invocas el modulo que contiene la clase

// Creacion de un objeto
const dbLogger = new Logger('DB') // Creas un objeto nuevo, esto llama por default el constructor de la clase
// Invocacion del metodo
dbLogger.info('This is an informational message')

// Creacion de otro objeto
const accessLogger = new Logger('ACCESS')
accessLogger.verbose('This is a verbose message')