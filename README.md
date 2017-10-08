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

# Constructor, configuration of the `dyna-config-handler`

The constructor accepts one configuration object of this interface:
```
IConfiguration<C> {		// where C is your interface of your configuration
  filename?: string;
  defaults?: C;
  config?: C;
}
```

# Methods

## reset(): void

Set the configuration to `defaults` or to `{}` if defaults are not defined.

## save(humanReadable: boolean = true): Promise<void> 

Saves the configuration.

## load(): Promise<void>

Loads the configuration from the `filename` defined in the constructor.

You in the `IConfiguration` you defined `filename` you habe to call this in order to load the configuration.

Note: the `config` object is replaced with this.

## delete(): Promise<boolean>

Returns Promise boolean if the file is really deleted. It will return false if there is no file. In case of disk error the Promise.reject will be called _so catch it_.

# Properties

## config (shorthand `c`)

This is your configuration. You are free to change it. You can save it at any time you want. `dyna-config-handler` is not changing anything from it.
