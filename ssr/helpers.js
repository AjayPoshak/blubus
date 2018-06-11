const renderFullPage = (html, preloadedState, styles) => `<!DOCTYPE html>
	<html>
	
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>Bus Booking in Africa</title>
		${styles}
		<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
	</head>
	
	<body>
		<div id="root">${html}</div>
	</body>
	<script>
		window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
	</script>
	<script src='/build/client/main.bundle.js'></script>
	</html>`;
export default renderFullPage;
