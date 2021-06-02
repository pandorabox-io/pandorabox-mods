Vue.component("mod-list", {
	computed: {
		modlist: function(){
			const modmap = {};
			Object
				.keys(mtinfo.items)
				.map(itemname => itemname.split(":")[0])
				.forEach(modname => modmap[modname] = true);

			return Object.keys(modmap).sort();
		}
	},
	template: `
		<div>
			<h3>Mod list</h3>
			<ul>
				<li v-for="modname in modlist">
					<router-link :to="'/mods/' + modname + '/items'">
						{{ modname }}
					</router-link>
				</li>
			</ul>
		</div>
	`
});
