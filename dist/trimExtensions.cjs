// @ts-check
'use strict';

module.exports = {
	beforeEmit(program, options, emitHost, result) {
		void program;
		void options;
		void emitHost;

		for (const file of result) {
			/**
			 * @type {string[]}
			 */
			const pathParts = file.outputPath.split(/[/\\]/);
			const fileName = pathParts.pop();

			if (fileName && fileName.endsWith('_script.lua')) {
				const newFileName = fileName
					.replace('_gui_script.lua', '.gui_script')
					.replace('_render_script.lua', '.render_script')
					.replace('_script.lua', '.script');
				pathParts.push(newFileName);
				file.outputPath = pathParts.join('/');
			}
		}
	},
};
