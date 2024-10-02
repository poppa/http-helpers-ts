<script lang="ts">
	import { getStatusText } from '@poppanator/http-constants';
	import { MultiStatus, Ok } from '@poppanator/http-constants/codes';
	import { Get, Head } from '@poppanator/http-constants/methods';
	import { ContentType } from '@poppanator/http-constants/headers';
	import { isHttpError, HttpError } from '@poppanator/http-error';

	const err = new HttpError(Ok, 'Cool as a pistol');
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<p>Multistatus: {MultiStatus}</p>
<p>Get: {Get}</p>
<p>Head: {Head}</p>
<p>Content-Type header is: {ContentType}</p>
<p>Status Text for MultiStatus is: {getStatusText(MultiStatus)}</p>
<p>Error is HttpError? {isHttpError(err)}</p>
