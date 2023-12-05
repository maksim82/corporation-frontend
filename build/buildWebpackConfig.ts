import webpack from "webpack";
import {BuildConfig} from "./types/webpack";
import {buildResolves} from "./buildResolves";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildWebpackDevServer} from "./buildWebpackDevServer";

export function buildWebpackConfig(config: BuildConfig): webpack.Configuration {
    const { port, paths, isDev, mode } = config;

    return {
        mode,
        entry: paths.entry,
        devtool: "inline-source-map",
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolves(paths),
        plugins: buildPlugins(paths),
        devServer: buildWebpackDevServer(port),
        output: {
            filename: "[name].[contenthash].bundle.js",
            path: paths.output
        }
    }
}
