import httpServiceBD from "./http.serviceBD";

const cityEndpoint = "city/";

const cityService = {
    get: async () => {
        const { data } = await httpServiceBD.get(cityEndpoint);
        return data;
    },
    create: async (payload) => {
            const { data } = await httpServiceBD.patch(
            cityEndpoint + payload.name,
            payload
        );
        return data;
    },
    remove: async (citiId) => {
        const { data } = await httpServiceBD.delete(cityEndpoint + citiId);
        return data;
    }
};
export default cityService;
