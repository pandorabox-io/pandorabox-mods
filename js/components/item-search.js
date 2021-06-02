
// global store
mtinfo.search_store = {
	term: ""
};

Vue.component("item-search", {
	data: function() {
		return {
			search_store: mtinfo.search_store
		};
	},
	template: /*html*/`
		<div>
			<h3>Item search</h3>
			<input class="form-control"
				v-model="search_store.term"
				type="text"
				placeholder="Search term"
				/>
				<item-list :search="search_store.term"/>
		</div>
	`
});
