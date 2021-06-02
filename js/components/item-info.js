
Vue.component("item-info", {
	props: ["name"],
	computed: {
		item: function () {
			console.log("item", mtinfo.items[this.name]);
			return mtinfo.items[this.name];
		},
		recipes: function () {
			console.log("recipes", mtinfo.recipes[this.name]);
			return mtinfo.recipes[this.name];
		}
	},
	template: /*html*/`
		<div>
			<div class="row">
				<div class="col-md-3">
					<div class="card">
						<div class="card-header">
							Preview
						</div>
						<div class="card-body">
							<item-preview :name="name"/>
						</div>
					</div>
				</div>
				<div class="col-md-9">
					<div class="card">
						<div class="card-header">
							Details
						</div>
						<div class="card-body">
							<item-detail :item="item"/>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="card">
						<div class="card-header">
							Recipes
						</div>
						<div class="card-body">
							<div class="row">
								<div v-for="recipe in recipes" class="col-md-2">
									<recipe-info :recipe="recipe"/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    </div>
  `
});
