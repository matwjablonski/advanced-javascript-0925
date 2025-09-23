function initializeApp({ theme, language, ...rest } = {}) {
    return {
        theme: theme ?? 'light',
        language: language ?? 'en',
        showNotifications: rest.showNotifications ?? true,
        autoSaveInterval: rest.autoSaveInterval ?? 5,
        ...rest,
    }
}

console.log(initializeApp({ theme: 'dark', language: 'fr' }));

// {
//   theme: 'dark',
//   language: 'fr',
//   showNotifications: true,
//   autoSaveInterval: 5
// }

console.log(initializeApp({}));

// {
//   theme: 'light',
//   language: 'en',
//   showNotifications: true,
//   autoSaveInterval: 5
// }