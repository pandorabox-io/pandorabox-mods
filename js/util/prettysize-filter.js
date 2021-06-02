
Vue.filter("prettysize", function(value) {
	const ranges = [{
		size: 1000*1000,
		suffix: "mb"
	},{
		size: 1000,
		suffix: "kb"
	}];

	let bytes = +value;
	for (let i=0; i<ranges.length; i++){
		let range = ranges[i];
		if (bytes > range.size){
			return (Math.floor(bytes / range.size * 100) / 100) + " " + range.suffix;
		}
	}

	return bytes + " bytes";
});
