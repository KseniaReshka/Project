import httpService from "./http.serviceBD";

const evEndpoint = "event/";

const eventService = {
    get: async () => {
        const { data } = await httpService.get(evEndpoint);
        return data;
    }
};
export default eventService;
