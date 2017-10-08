export interface ISettings<C> {
    filename?: string;
    defaults?: C;
    config?: C;
}
export declare class DynaConfigHandler<C> {
    constructor(settings?: ISettings<C>);
    private _settings;
    private _config;
    readonly config: any;
    readonly c: any;
    private setDefaults(defaults);
    reset(): void;
    save(humanReadable?: boolean): Promise<void>;
    load(): Promise<void>;
    delete(): Promise<boolean>;
}
