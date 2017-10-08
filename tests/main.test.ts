import {IError} from "dyna-node-fs";

declare let jasmine: any, describe:any, expect:any, it: any;

const STRESS_TEST: boolean = false;
const ITEM_TIMEOUT_MS: number = 10;
const NORMAL_ITEMS_COUNT: number = 20;
const STRESS_ITEMS_COUNT: number = 200;

const ITEMS_COUNT: number = STRESS_TEST && STRESS_ITEMS_COUNT || NORMAL_ITEMS_COUNT;
const timeout = (STRESS_TEST && STRESS_ITEMS_COUNT || 1) * ITEM_TIMEOUT_MS;
if (typeof jasmine !== 'undefined') jasmine.DEFAULT_TIMEOUT_INTERVAL = timeout;

import {DynaConfigHandler} from './../src';

describe('DynaConfigHandler module test', () => {
  const ch = new DynaConfigHandler({
    filename: './temp/myConfiguration.json',
    defaults: {
      lang: 'en',
    },
  });

  it('should create the instance', () => {
    expect(ch).not.toBe(undefined);
  });

  it('should have the default value', () => {
    expect(ch.config.lang).toBe('en');
  });

  it('should save modifications', () => {
    ch.config.clientId = 400;
    ch.save()
      .then(() => {
        expect(true).toBe(true);
      })
      .catch((error: IError) => {
        expect(error).toBe(undefined);
      });
  });

  it('should load the file, ignoring changes', () => {
    ch.config.lang = 'de';
    ch.config.provider = 'provider';
    ch.load()
      .then(() => {
        expect(ch.config.lang).toBe('en');
        expect(ch.config.provider).toBe(undefined);
      })
      .catch((error: IError) => {
        expect(error).toBe(undefined);
      });
  });
});

describe('DynaConfigHandler error handling', () => {
  const ch = new DynaConfigHandler({
    filename: './temp/myConfigurationXXXX.json',
    defaults: {
      lang: 'en',
    },
  });

  it('should not load not existed config files', (done: Function) => {
    ch.load()
      .then(() => {
        expect(false).toBe(true);
        done();
      })
      .catch((error: IError) => {
        expect(error).not.toBe(null);
        done();
      });
  });
});

describe('DynaConfigHandler error handling with specific interface', () => {
  interface IPerson {
    name: string;
    age: number;
  }

  const ch = new DynaConfigHandler<IPerson>({
    filename: './temp/myConfigurationXXXX.json',
    defaults: {
      name: 'Lory',
      age: 33,
    },
  });

  it('should not load not existed config files', (done: Function) => {
    ch.load()
      .then(() => {
        expect(false).toBe(true);
        done();
      })
      .catch((error: IError) => {
        expect(error).not.toBe(null);
        done();
      });
  });

  it('shoult have the default values', () => {
    expect(ch.c.name).toBe('Lory');
    expect(ch.c.age).toBe(33);
  });

});
