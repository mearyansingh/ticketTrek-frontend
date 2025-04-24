const getBaseUrl = () => {
    return import.meta.env.VITE_SERVER_URL || "http://localhost:8000";
}
export { getBaseUrl }