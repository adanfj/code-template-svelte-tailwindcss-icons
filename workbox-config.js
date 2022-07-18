module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{css,html,svelte,js}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};