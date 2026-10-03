const baseUrl = import.meta.env.VITE_API_BASE_URL || (
    import.meta.env.DEV
        ? 'http://localhost/ModuLeasy/api'
        : '/api'
);

export function apiUrl(endpoint) {
    return `${baseUrl.replace(/\/+$/, '')}/${endpoint.replace(/^\/+/, '')}`;
}