import webpack from "webpack";
import {BuildPaths} from "./types/webpack";

export function buildResolves(paths: BuildPaths): webpack.ResolveOptions {
    return {
        extensions: [ '.tsx', '.ts', '.js' ],
        modules: [paths.src, 'node_modules'],
    }
}
