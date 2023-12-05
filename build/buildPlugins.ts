import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildPaths} from "./types/webpack";
import webpack from "webpack";

export function buildPlugins(paths: BuildPaths): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        })
    ]
}
