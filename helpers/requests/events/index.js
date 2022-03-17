import { spreadsheetApi } from "../../../services/api"

export const getEvents = async () => {
    const events = await spreadsheetApi.get()

    return events;
}