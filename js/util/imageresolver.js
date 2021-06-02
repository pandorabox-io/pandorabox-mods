
mtinfo.stripimagetransforms = function(imgSrc){
	if (!imgSrc || typeof(imgSrc) != "string") {
		return "textures/unknown_node.png";
	} else if (imgSrc.indexOf("^")){
		return imgSrc.split("^")[0];
	} else {
		return imgSrc;
	}
};

mtinfo.parseimagetransforms = function(str){
	if (!str || typeof(str) != "string")
		return ["textures/unknown_node.png"];

	let parts = str.split("^");
	return parts
	.map(function(part){
		if (part && part[0] == "[")
			return;
		// prefix
		return "textures/" + part;
	})
	.filter(function(part){
		return !!part;
	});
};

mtinfo.imageresolver = function(node){
	var imgSrc = "textures/unknown_node.png";
	if (node.inventory_image){
		imgSrc = "textures/" + node.inventory_image;
	} else if (node.tiles && node.tiles.length > 0) {
		var tile = node.tiles[0];
		if (node.tiles.length == 6){
			tile = node.tiles[5];
		}

		if (typeof(tile) == "string"){
			imgSrc = "textures/" + tile;
		} else if (typeof(tile) == "object" && tile.name) {
			imgSrc = "textures/" + tile.name;
		}
	}

	if (imgSrc.indexOf("^")){
		return imgSrc.split("^")[0];
	} else {
		return imgSrc;
	}
};
