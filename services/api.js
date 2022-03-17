import axios from 'axios'
import * as cheerio from 'cheerio';

const getDataFromElement = element => {
    const children = element.children;

    const dataElement = children.slice().shift();

    const text = dataElement.data;

    if (text) return text;

    const dataChildren = dataElement.children.slice().shift().data;

    if (dataChildren) return dataChildren;

    const imageLinkData = dataElement.children.slice().shift().children.slice().shift().data;

    if (imageLinkData) return imageLinkData;

    return "";
}

export const spreadsheetsResponseInterceptor = async (response) => {

    try {
        const $ = cheerio.load(response.data);

        const elements = Array.from($('tr td[class^="s"]'))

        const count = Array.from($('tbody').children("tr").first().children()).slice(1).length;

        const dataRaw = elements.slice().reverse().reduce((acc, item, index) => {

            if (!acc[0]) acc[0] = []
            const [currentColumn = []] = acc;
            const value = getDataFromElement(item);
            if (currentColumn.length === (count)) {
                acc.unshift([value]);
                return acc;
            }
            acc[0].push(value);
            return acc;

        }, []).reduce((acc, item, index) => {
            const isColumn = index === 0;
            if (isColumn) {
                acc.columns.push(item.flat());
                return acc;
            };
            acc.values.push(item);
            return acc;

        }, {
            columns: [],
            values: [],
        });

        const values = [];

        dataRaw.columns.flat().forEach((column, indexColumn) => {
            dataRaw.values.forEach((value, indexValues) => {
                if (!values[indexValues]) values[indexValues] = {}
                values[indexValues][column] = value.slice(indexColumn).shift()
            })

        });

        return values
    } catch (error) {
        console.log(error);
    }
    return [];
}


const spreadsheetApi = axios.create({
    baseURL: "https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vRiXI6vrtdF12CJ08Jxh9V9BCr4kitR10V7bsbWxUT4jwlP1dDhGiG8kgbUPiGNVQZyXecjxQPHxcei/pubhtml",
})


spreadsheetApi.interceptors.response.use(
    spreadsheetsResponseInterceptor,
    error => Promise.reject(error)
);

export {
    spreadsheetApi
}