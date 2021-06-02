Vue.component("start-page", {
  template: /*html*/`
    <div>
      <h3>
        MTInfo
        <small class="text-muted">Minetest web info system</small>
      </h3>
      <router-link to="/mods" class="btn btn-sm btn-primary">
        <i class="fa fa-question"></i> Mods
      </router-link>
      <a class="btn btn-sm btn-secondary" href="https://github.com/BuckarooBanzay/mtinfo">
        <i class="fab fa-github"></i> Github source
      </a>
      <stats/>
    </div>
  `
});
