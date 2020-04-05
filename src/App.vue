<template>
  <div id="app">
    <header id="top-head" class="uk-position-fixed">
      <div class="uk-container uk-container-expand uk-app-background">
        <nav class="uk-navbar" data-uk-navbar="mode:click; duration: 250">
          <div class="uk-navbar-left">
            <div class="uk-navbar-item uk-hidden@m uk-text-center custom-logo-wrap">
							<a class="uk-logo" href="#"><img class="custom-logo" src="./assets/logo.svg" alt=""></a>
						</div>
						<ul class="uk-navbar-nav uk-visible@m">
							<li><a href="#">Accounts</a></li>
							<li>
								<a href="#">Settings <span data-uk-icon="icon: triangle-down"></span></a>
								<div class="uk-navbar-dropdown">
									<ul class="uk-nav uk-navbar-dropdown-nav">
										<li class="uk-nav-header">YOUR ACCOUNT</li>
										<li><a href="#"><span data-uk-icon="icon: info"></span> Summary</a></li>
										<li><a href="#"><span data-uk-icon="icon: refresh"></span> Edit</a></li>
										<li><a href="#"><span data-uk-icon="icon: settings"></span> Configuration</a></li>
										<li class="uk-nav-divider"></li>
										<li><a href="#"><span data-uk-icon="icon: image"></span> Your Data</a></li>
										<li class="uk-nav-divider"></li>
										<li><a href="#"><span data-uk-icon="icon: sign-out"></span> Logout</a></li>
									</ul>
								</div>
							</li>
						</ul>
          </div>
          <div class="uk-navbar-right">
            <ul class="uk-navbar-nav">
							<li><a href="#" data-uk-icon="icon: settings" title="Settings" data-uk-tooltip></a></li>
							<li><a href="#" data-uk-icon="icon:  sign-out" title="Sign Out" data-uk-tooltip></a></li>							
						</ul>
          </div>
        </nav>
      </div>
    </header>
    <aside id="left-col" class="uk-light scrollbar">
      <div class="left-logo uk-flex uk-flex-middle">
        <slot name="logo"></slot>
      </div>
      <div class="left-content-box content-box-dark">
        <slot name="appImage"
          ><img
            :src="$plugin.imageUrl"
            alt=""
            class="uk-border-circle profile-img"
        /></slot>
        <h4 class="uk-text-center uk-margin-remove-vertical text-light">
          {{$plugin.name}}
        </h4>
        <p class="uk-text-center uk-margin-remove-vertical uk-text-small">&copy; Agri Apps 2020</p>
      </div>
      <div class="left-nav-wrap">
        <component :is="leftNavComponent" />
      </div>
    </aside>
    <div id="content" data-uk-height-viewport="expand: true">
      <app-router-view :slug="$plugin.slug" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    leftNavComponent() {
      return `${this.$plugin.slug}-left-nav`
    },
    mainComponent() {
      return `${this.$plugin.slug}-main`
    }
  }
};
</script>
