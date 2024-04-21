<script>
	import { page } from "$app/stores";
</script>

{@html $page.url.searchParams.get("component")}
