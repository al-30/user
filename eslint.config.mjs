import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-restricted-syntax': [
        'warn',
        {
          selector: "CallExpression[callee.object.name='console']:not([arguments.0.value = 'Servidor online']) ",
          message: 'Evite utilizar console',
        },
      ],
    },
  },
];
