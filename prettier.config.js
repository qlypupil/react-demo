// prettier.config.js
/**
 * @type {import('prettier').Config}
 * @see https://www.prettier.cn/docs/options.html
 */
export default {
  // 尾随逗号
  trailingComma: 'all',
  // 单引号
  singleQuote: true,
  // 分号
  semi: false,
  // 打印宽度
  printWidth: 80,
  // 箭头函数参数
  arrowParens: 'always',
  // 换行
  proseWrap: 'always',
  // 行尾
  endOfLine: 'lf',
  // 实验性三元运算符
  experimentalTernaries: false,
  // 缩进
  tabWidth: 2,
  // 使用空格
  useTabs: false,
  // 属性一致性
  quoteProps: 'consistent',
  // jsx单引号
  jsxSingleQuote: false,
  // 大括号风格
  bracketSpacing: true,
  // 大括号换行
  bracketSameLine: false,
  // jsx大括号换行
  jsxBracketSameLine: false,
  // vue缩进
  vueIndentScriptAndStyle: false,
  // 单属性换行
  singleAttributePerLine: false,
}
