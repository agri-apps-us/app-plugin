<template>
  <div>
    <ul class="uk-nav uk-nav-default uk-nav-parent-icon" data-uk-nav>
      <!--<li class="uk-nav-header">ACTIONS</li>-->
      <li>
        <app-router-link to="dashboard"
          ><span data-uk-icon="icon: album" class="uk-margin-small-right"></span
          >Dashboard</app-router-link
        >
      </li>
      <li class="uk-parent">
        <a href="#"
          ><span
            data-uk-icon="icon: thumbnails"
            class="uk-margin-small-right"
          ></span
          >Data</a
        >
        <ul class="uk-nav-sub">
          <li>
            <app-router-link
                to="time-period"
              title="Time Period"
              href="#"
              >Time Period</app-router-link
            >
          </li>
          <li>
            <app-router-link
                to="inventory"
              title="Inventory"
              href="#"
              >Inventory</app-router-link
            >
          </li>
        </ul>
      </li>
      <li class="uk-parent">
        <a href="#"
          ><span
            data-uk-icon="icon: comments"
            class="uk-margin-small-right"
          ></span
          >Reports</a
        >
        <ul class="uk-nav-sub">
          <li><app-router-link to="report-one">Report One</app-router-link></li>
          <li><app-router-link to="report-two">Report Two</app-router-link></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
