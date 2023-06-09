import httpService from "./http.serviceBD";

const evEndpoint = "event/";

const eventService = {
    get: async () => {
        const { data } = await httpService.get(evEndpoint);
        return data;
    }
    // create: async (payload) => {
    //     const { data } = await httpService.put(
    //         userEndpoint + payload._id,
    //         payload
    //     );
    //     return data;
    // },
    // update: async (payload) => {
    //     const { data } = await httpService.patch(
    //         userEndpoint + localStorageService.getUserId(),
    //         payload
    //     );
    //     console.log("datfffff", data);
    //     return data;
    // }
};
export default eventService;
