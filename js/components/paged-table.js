
Vue.component("paged-table", {
	data: function(){
		return {
			itemcount: 20
		};
	},
	computed: {
		items: function(){
			const start = (this.page-1) * this.itemcount;
			const end = start + this.itemcount;
			return this.list.slice(start, end);
		},
		pages: function(){
			const count = Math.ceil(this.list.length / this.itemcount);
			const pages = [];
			for (let i=1; i<=count; i++){
				pages.push({
					number: i,
					active: this.page == i
				});
			}
			return pages;
		}
	},
	props: ["list", "page"],
	template: /*html*/`
		<table class="table table-striped table-condensed">
			<thead>
				<tr>
					<slot name="header"></slot>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in items" v-bind:key="item.name">
					<slot v-bind:item="item" name="row"></slot>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td colspan="4">
						<nav>
							<ul class="pagination">
								<li v-bind:class="{ 'page-item': true, 'active': page.active }" v-for="page in pages">
									<router-link :to="(this.$route ? this.$route.path : '') + '?page=' + page.number" class="page-link">
									{{ page.number }}
									</router-link>
								</li>
							</ul>
						</nav>
					</td>
				</tr>
			</tfoot>
		</table>
	`
});
