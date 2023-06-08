import httpServiceBD from "./http.serviceBD";
// import localStorageService from "./localStorage.service";

const holidayEndpoint = "holiday/";

const holidayService = {
    get: async () => {
        const { data } = await httpServiceBD.get(holidayEndpoint);
        return data;
    }
};
export default holidayService;
