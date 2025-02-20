export const API_CONSTANTS = {

    API_ALL_PLACES:"https://nijin-server.vercel.app/api/explorer",
    API_SPECIFIC_PLACE:(city: any) => `https://nijin-server.vercel.app/api/explorer/places/${city}`,

}
export default API_CONSTANTS;