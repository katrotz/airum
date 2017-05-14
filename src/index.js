const WizzairAdapter = require('./adapters/wizzair/index');

module.exports = class Airum {
    constructor() {
        this.adapters = {
            wizzair: null
        };
    }

    get api() {}
};
