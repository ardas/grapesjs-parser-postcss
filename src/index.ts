import type grapesjs from 'grapesjs';
import { AcceptedPlugin } from 'postcss';
import parser from './parser';

export type ParserPostCSSConfig = {
  plugins: AcceptedPlugin[],
};

const plugin: grapesjs.Plugin = (editor, config = {}) => {
  const { plugins = [] } = config as ParserPostCSSConfig;
  editor.setCustomParserCss((css: string) => parser(css, editor, plugins));
};

export default plugin;
