import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
    // const paths: BuildPaths = {
    //     build: '',
    //     entry: '',
    //     html: '',
    //     src: path.resolve(__dirname, '..', '..', 'src'),
    //     locales: '',
    //     buildLocales: '',
    // };

    // config.plugins!.push(
    //     new webpack.DefinePlugin({
    //         __IS_DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    //         __API__: JSON.stringify('http://127.0.0.1:8000'),
    //         __PROJECT__: JSON.stringify('storybook'),
    //     }),
    // );

    // config.resolve?.modules?.push(paths.src);
    // config.resolve?.extensions?.push('.ts', 'tsx');
    // config!.resolve!.alias = {
    //     ...config!.resolve!.alias,
    //     '@': paths.src,
    // };

    // // eslint-disable-next-line no-param-reassign, no-unused-expressions
    // config?.module?.rules && (config.module.rules = config.module.rules.map((rule:any) => {
    //     if (/svg/.test(rule.test as string)) {
    //         return { ...rule, exclude: /\.svg$/i };
    //     }

    //     return rule;
    // }));

    // config.module?.rules?.push(buildCssLoader(true));
    // config.module?.rules?.push({
    //     test: /\.svg$/,
    //     use: ['@svgr/webpack'],
    // });
    // return config;
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: '',
    };
    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push('.ts', '.tsx');
    config!.resolve!.alias = {
        ...config!.resolve!.alias,
        '@': paths.src,
    };

    // eslint-disable-next-line no-param-reassign
    // @ts-ignore
    config!.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config!.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config!.module!.rules.push(buildCssLoader(true));

    config!.plugins!.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('http://127.0.0.1:8000'),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );

    return config;
};
