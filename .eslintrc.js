module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: 'tsconfig.json',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		camelcase: 'error',
		// 'complexity': ['warn', { 'max': 3 }],
		'consistent-return': 'error', // immer return am Ende des Aufrufs
		curly: 'error',
		'default-case': 'error',
		'eol-last': 'error',
		eqeqeq: 'error',
		// 'import/export': 'error',, // TODO checken
		// 'import/no-unresolved': 'off', // TODO checken
		// 'import/no-duplicates': 'error',, // TODO checken
		// 'max-classes-per-file': 'error',
		'max-len': [
			'error',
			{
				code: 180,
				comments: 180,
			},
		],
		'no-console': 'error',
		// 'no-constructor-return': 'error', // brauchen wir bei dto zu model
		// 'no-duplicate-imports': 'off', // TODO checken
		'no-multi-spaces': 'error',
		'no-promise-executor-return': 'error',
		'no-template-curly-in-string': 'error',
		'no-unreachable': 'error',
		'require-await': 'off',
		semi: 'error',
		'no-unused-expressions': 'off',
		'@typescript-eslint/array-type': 'error',
		'@typescript-eslint/await-thenable': 'error',
		'@typescript-eslint/ban-types': 'error',
		'@typescript-eslint/consistent-generic-constructors': 'error',
		'@typescript-eslint/consistent-type-imports': 'error',
		'@typescript-eslint/explicit-function-return-type': [
			'error',
			{
				allowExpressions: false,
				allowTypedFunctionExpressions: true,
				allowHigherOrderFunctions: false,
				allowDirectConstAssertionInArrowFunctions: false,
				allowConciseArrowFunctionExpressionsStartingWithVoid: false,
			},
		],
		'@typescript-eslint/explicit-member-accessibility': [
			'error',
			{
				accessibility: 'no-public',
			},
		],
		'@typescript-eslint/member-ordering': 'off',
		'@typescript-eslint/no-empty-interface': 'error',
		'@typescript-eslint/no-empty-function': 'error',
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/no-floating-promises': ['error', { ignoreIIFE: true }],
		'@typescript-eslint/no-inferrable-types': 0,
		'@typescript-eslint/no-non-null-assertion': 'error',
		// '@typescript-eslint/no-misused-promises': 'error',
		'@typescript-eslint/no-unused-expressions': [
			'error',
			{
				allowTernary: true,
				allowShortCircuit: true,
			},
		],
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				varsIgnorePattern: '^T',
				argsIgnorePattern: '^T',
			},
		],
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/require-await': 'error',
		'@typescript-eslint/typedef': [
			'error',
			{
				arrayDestructuring: false,
				arrowParameter: false,
				memberVariableDeclaration: true,
				objectDestructuring: false,
				parameter: true,
				propertyDeclaration: true,
				variableDeclaration: true,
				variableDeclarationIgnoreFunction: true,
			},
		],
	},
};
