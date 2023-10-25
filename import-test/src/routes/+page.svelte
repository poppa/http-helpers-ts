<script lang="ts">
	import { getStatusText } from '@poppanator/http-constants';
	import { MultiStatus } from '@poppanator/http-constants/codes';
	import { Get, Head } from '@poppanator/http-constants/methods';
	import { ContentType } from '@poppanator/http-constants/headers';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<p>Multistatus: {MultiStatus}</p>
<p>Get: {Get}</p>
<p>Head: {Head}</p>
<p>Content-Type header is: {ContentType}</p>
<p>Status Text for MultiStatus is: {getStatusText(MultiStatus)}</p>
