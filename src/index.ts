import type grapesjs from 'grapesjs';
import { AcceptedPlugin } from 'postcss';
import parser from './parser';

export type ParserPostCSSConfig = {
  plugins: AcceptedPlugin[],
};

const plugin: grapesjs.Plugin = (editor, config = {}) => {
  console.log('grapesjs-parser-postcss config', config);
  const { plugins = [] } = config as ParserPostCSSConfig;
  console.log('grapesjs-parser-postcss plugins', plugins);
  editor.setCustomParserCss((css: string) => {
    console.log('grapesjs-parser-postcss callback');
    return parser(css, editor, plugins)
  });
};

export default plugin;
