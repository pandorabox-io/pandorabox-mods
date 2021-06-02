
Vue.component("item-detail", {
	props: ["item"],
	created: function(){
		let abms = [];
		if (mtinfo.abm_nodenames[this.name]){
			abms.push(mtinfo.abm_nodenames[this.name]);
		}
		if (this.item.groups){
			Object.keys(this.item.groups).forEach(function(group){
				const name = "group:" + group;
				if (mtinfo.abm_nodenames[name]){
					abms.push(mtinfo.abm_nodenames[name]);
				}
			});
		}

		this.abms = abms;

		//TODO: debug
		console.log("abms", this.abms);
		console.log("abm_neighbors", this.abm_neighbors);
	},
	template: /*html*/`
		<div>
			<h3>
				{{ item.description }}
				<small class="text-muted">{{ item.name }}</small>
				<span class="badge badge-secondary">{{ item.type }}</span>
			</h3>
			<p>
				Item features:
				<span v-if="item.buildable_to" class="badge badge-success">Buildable-to</span>
				<span v-if="item.diggable" class="badge badge-success">Diggable</span>
				<span v-if="item.pointable" class="badge badge-success">Pointable</span>
				<span v-if="item.airlike" class="badge badge-success">Airlike</span>
				<span v-if="item.walkable" class="badge badge-success">Walkable</span>
				<span v-if="item.cnc" class="badge badge-primary">CNC compatible</span>
			</p>
			<p>
				Mod integrations:
				<a v-if="item.circular_saw" class="btn btn-xs btn-secondary" href="#/moreblocks">
					<i class="fa fa-th-large"></i> Circular-saw
				</a>
				<a v-if="item.cnc" class="btn btn-xs btn-secondary" href="#/cnc">
					<i class="fa fa-th"></i> Technic CNC
				</a>
			</p>
			<p>Stack-max: <span class="badge badge-primary">{{ item.stack_max }}</span></p>
			<p v-if="item.light_source">Light-source: <span class="badge badge-primary">{{ item.light_source }}</span></p>
			<p v-if="item.damage_per_second">Damage per second: <span class="badge badge-warning">{{ item.damage_per_second }}</span></p>
			<p v-if="item.drop">
				Drops: <item-preview :name="item.drop" size="32"/>
			</p>
			<p>Mod: <router-link :to="'/mods/' + item.mod_origin + '/items'">{{ item.mod_origin}}</router-link></p>
			<p>Groups</p>
			<ul v-if="item.groups">
				<li v-for="group in Object.keys(item.groups)">
					<router-link :to="'/groups/' + group">
						{{ group }}
					</router-link>
					
					{{ item.groups[group] }}
				</li>
			</ul>
			<p>ABMS</p>
			<ul>
				<li v-for="abm in abms">
					<router-link :to="'/abms/' + abm.key">
						{{ abm.key }}
					</router-link>
				</li>
			</ul>
		</div>
	`
});
