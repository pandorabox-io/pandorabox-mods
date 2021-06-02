
const router = new VueRouter({
	routes: [{
		path: "/",
		component: { template: `<start-page/>` }
	}, {
		path: "/items",
		component: { template: `<item-list/>` }
	}, {
		path: "/abms",
		component: { template: `<abm-list/>` }
	}, {
		path: "/mods",
		component: { template: `<mod-list/>` }
	}, {
		path: "/moreblocks",
		component: { template: `<moreblocks-list/>` }
	}, {
		path: "/cnc",
		component: { template: `<cnc-list/>` }
	}, {
		path: "/mods/:modname/items",
		component: { template: `<item-list :modname="$route.params.modname"/>` }
	}, {
		path: "/items/:name",
		component: { template: `<item-info v-bind:name="$route.params.name"/>` }
	}, {
		path: "/groups/:name",
		component: { template: `<group-info v-bind:name="$route.params.name"/>` }
	}, {
		path: "/abms/:abm_key",
		component: { template: `<abm-info v-bind:abm_key="$route.params.abm_key"/>` }
	}, {
		path: "/search",
		component: { template: `<item-search/>` }
	}]
});

new Vue({
	el: "#app",
	router: router
});
