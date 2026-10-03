const baseUrl = import.meta.env.DEV
    ? import.meta.env.VITE_API_BASE_URL || 'http://localhost/ModuLeasy/api'
    : '/api';

export function apiUrl(endpoint) {
    return `${baseUrl.replace(/\/+$/, '')}/${endpoint.replace(/^\/+/, '')}`;
}