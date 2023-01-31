import { BuildMode, BuildPaths } from './config';

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
    apiURL: string,
    project: 'storybook' | 'frontend' | 'jest';
}
