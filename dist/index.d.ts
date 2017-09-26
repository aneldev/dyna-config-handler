export interface ISettings {
    filename?: string;
    defaults?: any;
}
export declare class DynaConfigHandler {
    constructor(settings?: ISettings);
    private _settings;
    _config: any;
    readonly config: any;
    readonly c: any;
    private setDefaults(defaults?);
    private save(humanReadable?);
    private load(filename);
}
