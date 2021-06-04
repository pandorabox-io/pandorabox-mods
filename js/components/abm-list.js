Vue.component("abm-list", {
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
			return mtinfo.abm;
		}
	},
	template: /*html*/`
	<div>
		<paged-table v-bind:list="list" v-bind:page="page">
			<template v-slot:header>
				<th>Name</th>
				<th>Chance</th>
				<th>Interval</th>
				<th>Nodenames</th>
			</template>
			<template v-slot:row="{ item }">
				<td>
                    <router-link :to="'/abms/' + item.key">
                        {{ item.label || item.key }}
                    </router-link>
                </td>
				<td>
					<span class="badge badge-primary">{{ item.chance }}</span>
				</td>
				<td>
                    <span class="badge badge-secondary">{{ item.interval }}</span>
				</td>
				<td>
                    <ul>
                        <li v-for="name in item.nodenames">
							<item-link :name="name">
                        </li>
                    </ul>
				</td>
			</template>
		</paged-table>
	</div>
	`
});
