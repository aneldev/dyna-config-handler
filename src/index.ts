import {loadJSON, saveJSON} from 'dyna-node-fs';
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

  private save(humanReadable: boolean = true): Promise<void> {
    if (!this._settings.filename) return Promise.reject({
      section: 'DynaConfigHandler/Save',
      message: 'filename is not defined ins the settings',
      data: {
        settings: this._settings
      }
    } as IError);


    return saveJSON(this._settings.filename, JSON.stringify(this.config, null, humanReadable ? 2 : 0))
  }

  private load(filename: string): Promise<void> {
    if (filename) this._settings.filename = filename;

    return loadJSON(this._settings.filename)
      .then((data: any) => {
        this._config = data;
        this.setDefaults(this._settings.defaults)
      });
  }
}
