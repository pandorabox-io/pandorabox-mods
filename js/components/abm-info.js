Vue.component("abm-info", {
	props: ["abm_key"],
	created: function () {
		this.abm = mtinfo.abm_labels[this.abm_key];

		//TODO: debug
		console.log(this.abm, this.abm_key);
	},
	methods: {
		getItemLink: function(name){
			if (/^group:/.test(name)){
				// group
				const groupname = name.split([":"])[1];
				return `/groups/${groupname}`
			} else {
				// plain item
				return `/items/${name}`
			}
		}
	},
	template: /*html*/`
    <div>
			<h4>{{ abm_key }}</h4>
			<p>Chance: {{ abm.chance }}</p>
			<p>Interval: {{ abm.interval }}</p>
			<p>Nodenames</p>
			<ul>
				<li v-for="nodename in abm.nodenames">
					<router-link :to="getItemLink(nodename)">
						{{ nodename }}
					</router-link>
				</li>
			</ul>
			<p>Neighbors</p>
			<ul>
				<li v-for="neighbor in abm.neighbors">
					<router-link :to="getItemLink(neighbor)">
						{{ neighbor }}
					</router-link>
				</li>
			</ul>
    </div>
  `
});
