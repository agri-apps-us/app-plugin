<template>
  <a :href="`#?route=${to}`" @click.prevent="handleRoute">
      <slot></slot>
  </a>
</template>

<script>

export default {
    props: {
        to: {
            type: String,
            required: true
        },
        options: {
            type: Object
        }
    },
    methods: {
        handleRoute() {
            console.log('app-link', this, this.$appRouter)
            if (this.$appRouter && typeof this.$appRouter.route === 'function') {
                this.$appRouter.route(this.$props.to, this.$props.options);
            }
        }
    }
}
</script>