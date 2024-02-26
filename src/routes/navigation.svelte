<script lang="ts">
  import { onNavigate } from "$app/navigation";

  onNavigate((navigation) => {
    // @ts-ignore
    if ( document.startViewTransition === undefined || document.startViewTransition === null ) return

    return new Promise(resolve => {
      // @ts-ignore
      document.startViewTransition(async () => {
        resolve()
        await navigation.complete
      })
    })
  })
</script>



<style>
</style>

