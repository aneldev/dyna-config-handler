import {loadJSON, saveJSON, mkdir, getPath, deleteFile} from 'dyna-node-fs';
import {IError} from './interfaces';

export interface ISettings {
  filename?: string;
  defaults?: any;
}

export class DynaConfigHandler {
  constructor(settings: ISettings = {}) {
    this._settings = settings;
    this.setDefaults(this._settings.defaults);
  }

  private _settings: ISettings;

  public _config: any = {};
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
    return this._hasFilenameInSettings('delete')
      .then(() => mkdir(getPath(this._settings.filename)))
      .then(() => saveJSON(this._settings.filename, JSON.stringify(this.config, null, humanReadable ? 2 : 0)));
  }

  public load(): Promise<void> {
    return loadJSON(this._settings.filename)
      .then((data: any) => {
        this._config = data;
        this.setDefaults(this._settings.defaults)
      });
  }

  public delete(): Promise<boolean> {
    return this._hasFilenameInSettings('delete')
      .then(() => deleteFile(this._settings.filename));
  }

  private _hasFilenameInSettings(section: string): Promise<void> {
    return new Promise((resolve: Function, reject: (error: IError) => void) => {
      if (this._settings.filename) {
        resolve();
      }
      else {
        reject({
          section: `DynaConfigHandler/${section}`,
          message: 'filename is not defined in the settings',
          data: {
            settings: this._settings
          }
        } as IError)
      }
    });
  }
}
