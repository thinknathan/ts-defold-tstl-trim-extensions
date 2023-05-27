module.exports = {
	beforeEmit(program, options, emitHost, result) {
		void program;
		void options;
		void emitHost;

		for (const file of result) {
			const fileExtension = file.outputPath.split('.').pop();
			// If the file has the extension ".lua" AND other extensions
			// then delete the final ".lua".
			// Otherwise, leave the ".lua" extension untouched.
			if (fileExtension === 'lua' && file.outputPath.split('.').length > 2) {
				file.outputPath = file.outputPath.slice(0, -(fileExtension.length + 1));
			}
		}
	},
};
