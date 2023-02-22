export let SYSTEM = window.origin


if (SYSTEM.search('localhost') >= 0) {
    const DOMAIN = 'http://127.0.0.1:8000'
} else {
    // TODO: Replace with PROD domain
    const DOMAIN = 'http://127.0.0.1:8000'
}