"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_fs_promise_1 = require("ts-fs-promise");
class DynaConfigHandler {
    constructor(settings = {}) {
        this._config = {};
        this._settings = settings;
        this.setDefaults(this._settings.defaults);
    }
    get config() {
        return this._config;
    }
    get c() {
        return this._config;
    }
    setDefaults(defaults = {}) {
        this._config = Object.assign({}, defaults, this._config);
        return this.config;
    }
    save(humanReadable = true) {
        if (!this._settings.filename)
            return Promise.reject({
                section: 'DynaConfigHandler/Save',
                message: 'filename is not defined ins the settings',
                data: {
                    settings: this._settings
                }
            });
        return ts_fs_promise_1.writeFile(this._settings.filename, JSON.stringify(this.config, null, humanReadable ? 2 : 0));
    }
    load(filename) {
        if (filename)
            this._settings.filename = filename;
        return ts_fs_promise_1.readJSON(this._settings.filename)
            .then((data) => {
            this._config = data;
            this.setDefaults(this._settings.defaults);
        });
    }
}
exports.DynaConfigHandler = DynaConfigHandler;
//# sourceMappingURL=index.js.map