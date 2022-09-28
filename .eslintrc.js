// eslint-disable-next-line no-undef
module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:@typescript-eslint/recommended'
	],
	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'rules': {
		'indent': [ 'error', 'tab' ],
		'linebreak-style': [ 'error', 'unix' ],
		'quotes': [ 'error', 'single' ],
		'semi': [ 'error', 'always' ],

		// typescript rules
		'@typescript-eslint/member-delimiter-style': 'error',
		'@typescript-eslint/type-annotation-spacing': 'warn',
		'space-infix-ops': 'off',
		'@typescript-eslint/space-infix-ops': 'warn',
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		'space-before-blocks': 'off',
		'@typescript-eslint/space-before-blocks': 'warn',
		'object-curly-spacing': 'off',
		'@typescript-eslint/object-curly-spacing': ['warn', 'always'],
		'@typescript-eslint/naming-convention': [ 'warn',
			{ 'selector': 'interface', 'format': ['PascalCase'], 'custom': { 'regex': '^I[A-Z]', 'match': true } },
			{ 'selector': 'enum', 'format': ['PascalCase'], 'custom': { 'regex': '^E[A-Z]', 'match': true } },
			{ 'selector': 'typeLike', 'format': ['PascalCase'], 'custom': { 'regex': '^T[A-Z]', 'match': true } }
		]
	}
};
