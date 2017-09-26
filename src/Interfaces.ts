export interface IResult {
	success?: boolean;      // in case of progress, this is undefined
	log?: ILog;
	info?: ILog;
	warn?: ILog;
	error?: ILog;
	debug?: ILog;
	data?: any;
}

export interface ILog {
	code?: number;
	section?: string;
	message?: string;
	data?: any;
	parent?: IResult;
}

export interface IWarn extends ILog {
}

export interface IInfo extends ILog {
}

export interface IError extends ILog {
}

export interface IDebug extends ILog {
}
