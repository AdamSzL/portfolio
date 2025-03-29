<script>
	import MailIcon from '$lib/components/icons/MailIcon.svelte';
	import GitHubIcon from '$lib/components/icons/GitHubIcon.svelte';
	import LinkedinIcon from '$lib/components/icons/LinkedinIcon.svelte';
	import GoogleIcon from '$lib/components/icons/GoogleIcon.svelte';
	import FacebookIcon from '$lib/components/icons/FacebookIcon.svelte';

	const mail = 'adam@szlosarczyk.dev';
	const copyMailHint = 'Click to copy the e-mail';

	function copyMail() {
		navigator.clipboard.writeText(mail);
	}
</script>
<div class="flex flex-row gap-5">
	<button on:click={copyMail} title={copyMailHint}>
		<MailIcon />
	</button>
	<GitHubIcon link="https://github.com/AdamSzL" />
	<LinkedinIcon link="https://www.linkedin.com/in/adam-szl%C3%B3sarczyk-34891025b/" />
	<GoogleIcon link="https://g.dev/adamszl" />
	<FacebookIcon link="https://www.facebook.com/adam.szlosarczyk.5/" />
</div>
