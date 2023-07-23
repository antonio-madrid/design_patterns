async function loadLibrary(): Promise<void> {
    // Loading an external library
    const module = await import('../../../init');
    // executing a external library function
    module.lazy_load();
}

loadLibrary().catch(error => {
    console.error('Failed to load the library:', error);
})