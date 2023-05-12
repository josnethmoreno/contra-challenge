module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['standard', 'prettier'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	rules: {
		semi: ['off', 'always'],
		quotes: ['error', 'single'],
		indent: [2, 'tab'],
		'no-tabs': 0
	}
}
