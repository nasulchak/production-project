import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import webpack from "webpack";
import path from "path";
import { BuildOptions, BuildPaths } from "./types/config";

export function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {

    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
    ]
} 