declare interface Device {
    id: string;
    type: string;
    path?: string;
    model?: string;
    brand?: string;
}

declare interface Forwards {
    id: string;
    local: number;
    remote: number;
}

declare interface Tracker {
    on(event: 'add', listener: (device: Device) => void): this;
    on(event: 'remove', listener: (device: Device) => void): this;
    on(event: 'change', listener: (device: Device) => void): this;
    on(event: 'end', listener: () => void): this;
    on(event: string, listener: Function): this;
}


declare interface StartOptions {
    debug?: boolean;
    wait?: boolean;
    user?: number;
    action?: string;
    data?: string;
    mimeType?: string;
    category?: string | Array<string>;
    component?: string;
    flags?: number;
    extras?: Object;
	foreground?: number;
}


declare interface InstallOptions {
    apk: string;
    args?: Array<string>
}


declare class Client {

    listDevices(callback?: (err: Error, devices: Array<Device>) => void): Promise<any>;

    getFeatures(id: string, callback?: (err: Error, feature: Array<boolean>) => boolean): Promise<any>;

    getProperties(id: string, callback?: (err: Error, properties: Array<boolean>) => boolean): Promise<any>;

    install(id: string, options: InstallOptions, callback?: (err: Error) => void): Promise<any>;

    trackDevices(callback?: (err: Error, tracker: Tracker) => void): Promise<any>;

    isInstalled(id: string, pkg: string, callback?: (err: Error, installed: boolean) => boolean): Promise<any>;

    listForwards(id: string, callback?: (err: string, forwards: Forwards) => void): Promise<any>;

    forward(id: string, local: string, remote: string, callback?: (err: Error) => void): Promise<any>;

    startActivity(id: string, options: StartOptions, callback?: (err: Error) => void): Promise<any>;

    startService(id: string, options: StartOptions, callback?: (err: Error) => void): Promise<any>;

    shell(id: string, command: string, callback?: (err: Error, output: object) => void): Promise<any>;

    version(callback?: (err: Error, version: number) => void): Promise<any>;

    kill(callback?: (err: Error) => void): Promise<any>;
}


declare interface Options {
    host?: string;
    port?: number;
    bin?: string;
}


declare class Util {
    readAll(stream: any, callback?: (err: Error) => void): Promise<any>;
}


declare module 'adbkit' {
    export function createClient(options?: Options): Client;
    export var util: Util;
}
