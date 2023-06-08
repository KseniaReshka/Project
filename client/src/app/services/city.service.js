import httpServiceBD from "./http.serviceBD";

const cityEndpoint = "city/";

const cityService = {
    get: async () => {
        const { data } = await httpServiceBD.get(cityEndpoint);
        return data;
    }
};
export default cityService;
