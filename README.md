# About

The `dyna-config-handler` simplifies the configuration handling in json files for node-js applications.

Written in Typescript, runs everywhere, universal and in non Typscript projects.  

# Usage

```
import {} from "";

interface IMyConfig {
	databaseName: string;
	bufferSize: number;
}

const ch = new DynaConfigHandler<IMyConfig>({
	filename: './myConfigFile.json',
	defaults: {
		databaseName: 'superChat-20',
		bufferSize: 2000000,
	},
});

ch.load()
.then(() => {
	// configuration is loaded
	ch.config.databaseName; // == 'superChat-20'
})
.catch((error: IError) => {
	// system error loading this file
});

// later in the code

ch.save(); // return promise

```

# Methods

## reset(): void

Set the configuration to `defaults` or to `{}` if defaults are not defined.

## save(humanReadable: boolean = true): Promise<void> 

Saves the configuration.

## load(): Promise<void>

Loads the configuration from the `filename` defined in the constructor.

_Why to load really? It is already loaded from constructor._
_But for any reason, if you want to re-load it this is the method._

Note: the `config` object is replaced with this.

## delete(): Promise<boolean>

Returns Promise boolean if the file is really deleted. It will return false if there is no file. In case of disk error the Promise.reject will be called _so catch it_.

# Properties

## config (shorthand `c`)

This is your configuration. You are free to change it. You can save it at any time you want. `dyna-config-handler` is not changing anything from it.
