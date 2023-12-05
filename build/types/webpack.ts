export type MODE = "development" | "production";

export interface BuildPaths {
    entry: string;
    html: string;
    output: string;
}

export interface BuildEnv {
    mode: MODE;
    port: number;
}

export interface BuildConfig {
    isDev: boolean;
    paths: BuildPaths;
    mode: MODE;
    port: number;
}
