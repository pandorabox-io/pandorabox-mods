
Vue.component("item-preview", {
	props: {
		name: { type: "string" },
		link: { type: "boolean", default: true },
		size: { type: "number", default: 300 }
	},
	computed: {
		item: function () {
			return mtinfo.items[this.name];
		},
		previewType: function () {
			if (!this.item) {
				return "unknown";
			}
			if (this.item.inventory_image) {
				return "invimage";
			}
			switch (this.item.drawtype) {
				case "normal": return "normal";
				case "glasslike": return "normal";
				case "allfaces_optional": return "normal";
				case "glasslike_framed_optional": return "normal";
				case "plantlike": return "invimage";
				default: return "invimage";
			}
		},
		isGroup: function () {
			return /^group:/.test(this.name);
		},
		groupname: function(){
			return this.name.split(":")[1];
		},
		link: function () {
			if (this.isGroup) {
				return `/groups/${this.groupname}`;
			} else {
				return `/items/${this.name}`;
			}
		}
	},
	template: /*html*/`
	<router-link :to="link" :title="name">
		<item-preview-group
			v-if="isGroup"
			:group="groupname"
			:size="size">
		</item-preview-group>
		<item-preview-inventoryimage
			v-else-if="previewType == 'invimage'"
			:item="item"
			:size="size">
		</item-preview-inventoryimage>
		<item-preview-normal
			v-else-if="previewType == 'normal'"
			:item="item"
			:size="size">
		</item-preview-normal>
	</router-link>
  `
});

Vue.component("item-preview-group", {
	props: ["group", "size"],
	template: /*html*/`
	<div class="text-center">
		<span class="badge badge-success">
			<i class="fas fa-layer-group"></i> {{ group }}
		</span>
	</div>
`
});

Vue.component("item-preview-inventoryimage", {
	props: ["item", "size"],
	computed: {
		imgsrc: function () {
			if (this.item.inventory_image)
				return `textures/${mtinfo.stripimagetransforms(this.item.inventory_image)}`;
			else
				return "pics/unknown_node.png";
		}
	},
	template: /*html*/`
		<img :src="imgsrc" :width="size" :height="size" style="image-rendering: crisp-edges;"/>
  `
});

Vue.component("cube-face", {
	props: ["rotateX", "rotateY", "translateZ", "img", "size"],
	computed: {
		style: function () {
			return {
				position: "absolute",
				width: this.size + "px",
				height: this.size + "px",
				"backface-visibility": "hidden",
				"image-rendering": ["crisp-edges", "-webkit-optimize-contrast"],
				"background-size": "cover",
				"transform": `rotateX(${this.rotateX}) rotateY(${this.rotateY}) translateZ(${this.translateZ})`,
				"background-image": `url(${this.img})`
			};
		}
	},
	template: /*html*/`
		<div v-bind:style="style"></div>
	`
});

Vue.component("item-preview-normal", {
	props: ["item", "size"],
	data: function () {
		return {
			front: [],
			back: [],
			left: [],
			right: [],
			top: [],
			bottom: []
		};
	},
	created: function () {
		this.prepareTextures();
	},
	watch: {
		"item": "prepareTextures"
	},
	methods: {
		prepareTextures: function () {
			this.front = [];
			this.back = [];
			this.left = [];
			this.right = [];
			this.top = [];
			this.bottom = [];

			let texture = "pics/unknown_node.png";
			if (typeof (this.item.tiles) == "string") {
				// one texture for all sides
				// TODO: parse and apply transformations
				texture = mtinfo.stripimagetransforms(this.item.tiles);
				this.front.push(texture);
				this.back.push(texture);
				this.left.push(texture);
				this.right.push(texture);
				this.top.push(texture);
				this.bottom.push(texture);

			} else {
				// +Y, -Y, +X, -X, +Z, -Z
				let tiles = this.item.tiles;

				if (tiles.length >= 1)
					this.top = mtinfo.parseimagetransforms(tiles[0]);
				if (tiles.length >= 2)
					this.bottom = mtinfo.parseimagetransforms(tiles[1]);
				if (tiles.length >= 3)
					this.front = mtinfo.parseimagetransforms(tiles[2]);
				if (tiles.length >= 4)
					this.back = mtinfo.parseimagetransforms(tiles[3]);
				if (tiles.length >= 5)
					this.right = mtinfo.parseimagetransforms(tiles[4]);
				if (tiles.length >= 6)
					this.left = mtinfo.parseimagetransforms(tiles[5]);

				// populate missing tiles
				if (this.bottom.length == 0)
					this.bottom = this.top;
				if (this.front.length == 0)
					this.front = this.bottom;
				if (this.back.length == 0)
					this.back = this.front;
				if (this.right.length == 0)
					this.right = this.back;
				if (this.left.length == 0)
					this.left = this.right;
			}
		}
	},
	computed: {
		translateZ: function () {
			return (this.size / 2) + "px";
		},
		scene_style: function () {
			return {
				height: this.size + "px",
				width: this.size + "px",
				perspective: (this.size * 3) + "px"
			};
		},
		cube_style: function () {
			return {
				width: "100%",
				height: "100%",
				position: "relative",
				"transform-style": "preserve-3d",
				"transform": `translateZ(-${this.size * 3}px) rotateX(-30deg) rotateY(45deg)`
				/*
				"animation-name": "spinner",
				"animation-timing-function": "linear",
				"animation-iteration-count": "infinite",
				"animation-duration": "6s"
				*/
			};
		}
	},
	template: /*html*/`
		<div v-bind:style="scene_style">
			<div v-bind:style="cube_style">
				<cube-face v-for="t in front" rotateY="0deg" rotateX="0deg" :size="size" :translateZ="translateZ" :img="t"></cube-face>
				<cube-face v-for="t in back" rotateY="180deg" rotateX="0deg" :size="size" :translateZ="translateZ" :img="t"></cube-face>
				<cube-face v-for="t in right" rotateY="90deg" rotateX="0deg" :size="size" :translateZ="translateZ" :img="t"></cube-face>
				<cube-face v-for="t in left" rotateY="-90deg" rotateX="0deg" :size="size" :translateZ="translateZ" :img="t"></cube-face>
				<cube-face v-for="t in top" rotateY="0deg" rotateX="90deg" :size="size" :translateZ="translateZ" :img="t"></cube-face>
				<cube-face v-for="t in bottom" rotateY="0deg" rotateX="-90deg" :size="size" :translateZ="translateZ" :img="t"></cube-face>
	    </div>
		</div>
  `
});
