class ExecptionError {
    Errortype;
    passed;

    constructor(Errortype, passed) {
        this.Errortype = Errortype;
        this.passed = passed;
    }

    callError() {
        if (this.Errortype === `string`) {
            return `Wrong Exception error string type required ${this.passed} passed`
        }
    }
}

/**
 *
 * @param {String} str
 * @param {String} format
 * @param {Array} args
 */
function smprintf(str, format, ...args) {
    if (typeof str !== "string") {
        throw  new ExecptionError(`string`, typeof str)
    }else if (typeof format!=="string"){
        throw  new ExecptionError(`string`, typeof format)
    }
    return !(args.length) ? str : smprintf(str.replace(format, args.shift()), format, ...args)
}
