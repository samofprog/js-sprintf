/**
 *
 * @param {String} str
 * @param {String} format
 * @param {Array} args
 */
function smprintf(str, format = `%`, ...args) {
    return !(args.length) ? str : smprintf(str.replace(format, args.shift()), format, ...args)
}