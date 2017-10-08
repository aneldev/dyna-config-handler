export interface IConfiguration<C> {
    filename?: string;
    defaults?: C;
    config?: C;
}
export declare class DynaConfigHandler<C> {
    constructor(settings?: IConfiguration<C>);
    private _settings;
    private _config;
    readonly config: C;
    readonly c: C;
    private _setDefaults(defaults);
    reset(): void;
    save(humanReadable?: boolean): Promise<void>;
    load(): Promise<void>;
    delete(): Promise<boolean>;
}
