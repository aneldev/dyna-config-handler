import {loadJSON, saveJSON, deleteFile} from 'dyna-node-fs';

export interface IConfiguration<C> {
  filename?: string;
  defaults?: C;
  config?: C;
}

export class DynaConfigHandler<C> {
  constructor(settings: IConfiguration<C> = {}) {
    this._settings = settings;
    this._config= this._settings.config || ({} as C);
    this._setDefaults(this._settings.defaults);
  }

  private _settings: IConfiguration<C>;

  private _config: C;
  public get config(): any {
    return this._config;
  }
  public get c(): any {
    return this._config;
  }

  private _setDefaults(defaults: C): C {
    this._config = {
      ...(defaults || {}),
      ...(this._config as any),
    };
    return this.config;
  }

  public reset(): void {
    this._config = this._settings.defaults || ({} as C);
  }

  public save(humanReadable: boolean = true): Promise<void> {
    if (!this._settings.filename) return Promise.resolve();

    return saveJSON(this._settings.filename, this.config, true);
  }

  public load(): Promise<void> {
    if (!this._settings.filename) return Promise.resolve();

    return loadJSON(this._settings.filename)
      .then((data: any) => {
        this._config = data;
        this._setDefaults(this._settings.defaults)
      });
  }

  public delete(): Promise<boolean> {
    if (!this._settings.filename) return Promise.resolve(false);

    return deleteFile(this._settings.filename);
  }
}
