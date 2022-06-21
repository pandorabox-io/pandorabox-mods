
Vue.component("stairsplus-list", {
	data: function(){
		return {
			page: +this.$route.query.page || 1
		};
	},
	watch: {
		$route: function(){
			this.page = +this.$route.query.page || 1;
		}
	},
	computed: {
		list: function(){
			return Object.keys(mtinfo.items)
            .map(name => mtinfo.items[name])
			.filter(item => item.new_circular_saw);
		}
	},
	template:`
    <div>
        <h3>Circular saw compatible nodes</h3>
        <paged-table v-bind:list="list" v-bind:page="page">
            <template v-slot:header>
                <th>Mod</th>
                <th>Type</th>
                <th>Image</th>
                <th>Nodename</th>
            </template>
            <template v-slot:row="{ item }">
                <td>{{ item.name.substring(0, item.name.indexOf(":")) }}</td>
                <td>
                    <span class="badge badge-secondary">{{ item.type }}</span>
                </td>
                <td>
                    <item-preview :name="item.name" size="32"/>
                </td>
                <td>
                    <router-link :to="'/items/' + item.name">
                    {{ item.name }}
                    </router-link>
                </td>
            </template>
        </paged-table>
    </div>
    `
});
