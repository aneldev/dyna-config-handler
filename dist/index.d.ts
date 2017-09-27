export interface ISettings {
    filename?: string;
    defaults?: any;
    config?: any;
}
export declare class DynaConfigHandler {
    constructor(settings?: ISettings);
    private _settings;
    _config: any;
    readonly config: any;
    readonly c: any;
    private setDefaults(defaults?);
    reset(): void;
    save(humanReadable?: boolean): Promise<void>;
    load(): Promise<void>;
    delete(): Promise<boolean>;
}
