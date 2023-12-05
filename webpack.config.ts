import {BuildEnv, BuildPaths} from "./build/types/webpack";
import {buildWebpackConfig} from "./build/buildWebpackConfig";
import webpack from "webpack";
import path from "path";

export default (env: BuildEnv): webpack.Configuration  => {
    const paths: BuildPaths = {
        html: path.resolve(__dirname, "public", "index.html"),
        entry: path.resolve(__dirname, "src", "index.tsx"),
        output: path.resolve(__dirname, "dist"),
    }

    const mode = env.mode || "development";
    const port = env.port || 5000;
    const isDev = mode === "development";

    return buildWebpackConfig({
        paths,
        mode,
        isDev,
        port
    });
}
