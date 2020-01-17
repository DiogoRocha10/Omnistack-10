module.exports = function ParserStringAsArray(arrayAsString) {
    return arrayAsString.split(',').map(tech.trim())
}