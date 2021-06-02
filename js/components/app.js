Vue.component("app", {
  template: /*html*/`
    <div>
      <nav-bar/>
      <br>
      <div class="container-fluid">
        <router-view></router-view>
      </div>
    </div>
  `
});
