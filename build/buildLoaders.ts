import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
    const tsLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            "style-loader",
            {
                loader: "css-loader",
                options: {
                    modules: {auto: ((path: string) => path.includes(".module."))},
                },
            },
            "sass-loader",
        ],
    };

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    }

    return [
        tsLoader,
        cssLoader,
        svgLoader
    ];
}
