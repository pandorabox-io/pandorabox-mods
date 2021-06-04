Vue.component("abm-info", {
	props: ["abm_key"],
	created: function () {
		this.abm = mtinfo.abm_labels[this.abm_key];

		//TODO: debug
		console.log(this.abm, this.abm_key);
	},
	template: /*html*/`
    <div>
			<h4>{{ abm_key }}</h4>
			<p>Chance: {{ abm.chance }}</p>
			<p>Interval: {{ abm.interval }}</p>
			<p>Nodenames</p>
			<ul>
				<li v-for="nodename in abm.nodenames">
					<item-link :name="nodename">
				</li>
			</ul>
			<p>Neighbors</p>
			<ul>
				<li v-for="neighbor in abm.neighbors">
					<item-link :name="neighbor">
				</li>
			</ul>
    </div>
  `
});
