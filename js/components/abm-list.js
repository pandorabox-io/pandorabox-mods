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
                        {{ item.label }}
                    </router-link>
                </td>
				<td>
					<span class="badge badge-primary">{{ item.chance }}</span>
				</td>
				<td>
                    <span class="badge badge-secondary">{{ item.interval }}</span>
				</td>
				<td>
                    <table class="inventory-table">
                        <tr v-for="name in item.nodenames">
                            <td>
                                <item-preview :name="name" size="64"/>
                            </td>
                        </tr>
                    </table>
				</td>
			</template>
		</paged-table>
	</div>
	`
});
