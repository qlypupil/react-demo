// 导入 ESLint 的基础JavaScript规则集
import js from '@eslint/js'
// 导入全局变量定义
import globals from 'globals'
// 导入React的ESLint插件
import reactPlugin from 'eslint-plugin-react'
// 导入React Hooks的ESLint插件
import reactHooks from 'eslint-plugin-react-hooks'
// 导入React Refresh的ESLint插件（用于热重载）
import reactRefresh from 'eslint-plugin-react-refresh'
// 导入TypeScript的ESLint插件
import tseslint from 'typescript-eslint'
// 导入stylistic的ESLint插件
import stylistic from '@stylistic/eslint-plugin'
// 导入eslint-plugin-prettier的ESLint插件
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
// 导入 import 插件
import importPlugin from 'eslint-plugin-import'

// 导出ESLint配置
export default tseslint.config(
  // 忽略dist目录下的文件
  { ignores: ['dist', 'node_modules', 'public'] },
  {
    // 扩展推荐的规则集
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked , // 升级为类型检查的推荐规则集
      reactPlugin.configs.flat.recommended,
      eslintPluginPrettierRecommended,
      stylistic.configs.customize({
        // 缩进
        indent: 2,
        // 引号
        quotes: 'single',
        // 分号
        semi: false,
        // jsx
        jsx: true,
        // 大括号风格
        braceStyle: '1tbs',
        // 箭头函数参数总是使用括号包裹
        arrowParens: 'always',
      }),
    ],

    // 指定应用规则的文件类型
    files: ['**/*.{ts,tsx}'],
    // 语言选项设置
    languageOptions: {
      // 指定ECMAScript版本
      ecmaVersion: 2020,
      // 指定源代码类型
      sourceType: 'module',
      // 指定解析器选项
      parserOptions: {
        // 指定ECMAScript功能
        ecmaFeatures: {
          jsx: true,
        },
        // 指定项目配置文件
        project: ['./tsconfig.app.json', './tsconfig.node.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // 添加浏览器环境的全局变量
      globals: {
        ...globals.browser,
        // 添加自定义的全局变量
        wx: true,
      },
    },
    // 配置使用的插件
    plugins: {
      // React规则插件
      'react': reactPlugin,
      // React Hooks规则插件
      'react-hooks': reactHooks,
      // React Refresh插件（用于保持组件状态的热重载）
      'react-refresh': reactRefresh,
      // import 插件
      'import': importPlugin,
    },
    settings: {
      react: {
        // 自动检测 React 版本
        version: 'detect',
      },
    },
    // 自定义规则配置
    rules: {
      // 应用React Hooks推荐的所有规则
      ...reactHooks.configs.recommended.rules,
      // 热重载相关规则
      'react-refresh/only-export-components': [
        'warn', // 警告级别
        { allowConstantExport: true }, // 允许导出常量
      ],
      'react/react-in-jsx-scope': 'off',

      // 类型安全规则
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': ['warn', {
        allowExpressions: true,
        allowTypedFunctionExpressions: true
      }],
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],

      // import 排序规则
      "import/order": [
      "error",
      {
        "groups": [
          "builtin", "external", "internal", "parent", "sibling", "index"
        ],
        "pathGroups": [
          { "pattern": "react", "group": "external", "position": "before" },  // react 排在最前
          { "pattern": "react-*", "group": "external", "position": "before" }, // react-* 排在最前
          { "pattern": "react-dom/client", "group": "external", "position": "before" },  // react-dom/client 排在最前
          { "pattern": "antd/locale/zh_CN", "group": "external", "position": "after" }, // antd/locale/zh_CN 在 antd 后面
        ],
        "pathGroupsExcludedImportTypes": ["builtin"],
        "alphabetize": { "order": "asc", "caseInsensitive": true }
      }
    ]
    },
  },
)
