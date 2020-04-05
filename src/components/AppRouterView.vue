<template>
  <div>
      <component :is="view"></component>
  </div>
</template>

<script>
let hash = window.location.hash;
if (hash.length && hash.indexOf('route=') > 0) {
    hash = hash.slice(7)
} else {
    hash = ''
}

export default {
    props: {
        slug: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            view: `${hash || this.slug + '-main'}`
        }
    },
    created() {
        if (this.$appRouter && typeof this.$appRouter.onRoute === 'function') {
            this.$appRouter.onRoute((r) => {
                this.view = `${this.slug}-${r}`;
                window.location.hash = `route=${this.view}`;
            })
        }
    }
}
</script>

<style>

</style>