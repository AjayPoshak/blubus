export const createScriptTag = script => `<script src=${script}></script>`;

const renderFullPage = (html, preloadedState, styles, bundles) => `<!DOCTYPE html>
	<html lang="en">
	
	<head>
		<meta charset="UTF-8">
		<title>Bus Booking in Africa</title>
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- multiple icons for IE -->
		<meta name="theme-color" content="#2396b0">
		<meta name="msapplication-square310x310logo" content="icon_largetile.png">
		<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
		<meta name="description" content="online bus booking service in Rwanda, 
		book bus online from anywhere">
		<!-- icon in the highest resolution we need it for -->
		<!-- reuse same icon for Safari -->
		<link rel="manifest" href="../public/manifest.json">
		<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
		<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
		<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
		<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
		<link rel="icon" sizes="192x192" href="/public/images/BluBus_192x192.png">
		<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
		<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
		<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
		<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
		<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
		<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
		<link rel="apple-touch-startup-image" href="/public/images/BluBus_192x192.png">
		<link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
		<meta name="msapplication-TileColor" content="#ffffff">
		<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
		${styles}
	</head>
	
	<body>
		<div id="root">${html}</div>
	</body>
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
	<script src=https://cdn.ravenjs.com/3.24.0/raven.min.js
 crossorigin=anonymous></script>
	<script>
		window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
	</script>
	<script src=${bundles.manifest.js}></script>
	<script src=${bundles.main.js}></script>
	<script src=${bundles.vendors.js}></script>
	<script>
		if('serviceWorker' in navigator) {
			window.addEventListener('load', () => {
				navigator.serviceWorker.register('./service-worker.js')
			})
		}
	</script>
	<!-- Third Party CSS for calendar module -->
	<link rel="stylesheet" href="/public/rc-calendar.css">
	</html>`;
export default renderFullPage;
