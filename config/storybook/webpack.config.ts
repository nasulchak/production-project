import webpack from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.plugins?.push(
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
            __API__: JSON.stringify(''),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', 'tsx');

    // eslint-disable-next-line no-param-reassign, no-unused-expressions
    config?.module?.rules && (config.module.rules = config.module.rules.map((rule:any) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    }));

    config.module?.rules?.push(buildCssLoader(true));
    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    return config;
};
