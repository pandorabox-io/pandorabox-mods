Vue.component("item-link", {
	props: ["name"],
	methods: {
		getItemLink: function(name){
			if (/^group:/.test(name)){
				// group
				const groupname = name.split([":"])[1];
				return `/groups/${groupname}`;
			} else {
				// plain item
				return `/items/${name}`;
			}
		}
	},
	template: /*html*/`
        <router-link :to="getItemLink(name)">
            {{ name }}
        </router-link>
  `
});
