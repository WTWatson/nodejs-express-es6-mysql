/* Execute Application */

/* Configure babel to compile es2015 preset */
require('babel-register')({
	presets: ['es2015']
});

/* Core files will automatically compiled on the fly */
require('./src');
