import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildWebpackDevServer(port: number): DevServerConfiguration {
    return {
        port,
        hot: true,
        historyApiFallback: true,
    }
}
