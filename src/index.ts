import {loadJSON, saveJSON, mkdir, getPath, deleteFile} from 'dyna-node-fs';
import {IError} from './interfaces';

export interface ISettings {
  filename?: string;
  defaults?: any;
  config?: any;
}

export class DynaConfigHandler {
  constructor(settings: ISettings = {}) {
    this._settings = settings;
    this._config= this._settings.config || {};
    this.setDefaults(this._settings.defaults);
  }

  private _settings: ISettings;

  public _config: any;
  public get config(): any {
    return this._config;
  }
  public get c(): any {
    return this._config;
  }

  private setDefaults(defaults: any = {}): any {
    this._config = {
      ...defaults,
      ...this._config,
    };
    return this.config;
  }

  public reset(): void {
    this._config = this._settings.defaults || {};
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
        this.setDefaults(this._settings.defaults)
      });
  }

  public delete(): Promise<boolean> {
    if (!this._settings.filename) return Promise.resolve(false);

    return deleteFile(this._settings.filename);
  }
}
