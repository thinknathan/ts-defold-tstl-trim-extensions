module.exports = {
	beforeEmit(program, options, emitHost, result) {
		void program;
		void options;
		void emitHost;

		for (const file of result) {
			const pathParts = file.outputPath.split(/[/\\]/);
			const fileName = pathParts.pop();
			const fileExtension = fileName.split('.').pop();

			if (fileName.split('.').length > 2) {
				const newFileName = fileName.slice(0, -(fileExtension.length + 1));
				pathParts.push(newFileName);
				file.outputPath = pathParts.join('/');
			}
		}
	},
};
