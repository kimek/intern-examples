define([
	'intern!object',
	'require'
], function (
	registerSuite,
	require
) {
	var url = '../../index.html';

	registerSuite({
		name: 'Sample 2',

		'submit form': function () {
			return this.remote
				.get(require.toUrl(url))
				.sleep(5000);
		}
	});
});