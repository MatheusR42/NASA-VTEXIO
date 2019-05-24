import axios from 'axios';
import { GraphQLExtensionError } from '../../exceptions/GraphQLExtensionError';

const ENDPOINT = 'https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos';
const API_KEY = 'DEMO_KEY';

export const queries = {
    marsPhotos: async (_: any, args: any, ctx: any) => {
        try {
            const { sol, camera, rover } = args;

            const params = {
                api_key: API_KEY,
                sol,
                rover,
                camera
            }

            const http = axios.create({
                headers: {
                  "X-Vtex-Use-Https": true,
                  "Proxy-Authorization": ctx.vtex.authToken
                }
            });

            const { data } = await http.get(ENDPOINT, {
                params
            });

            return data;
        } catch (e) {
            if (e.response) {
                const { statusText, status, data } = e.response;
                throw new GraphQLExtensionError(statusText, status, data);
            }

            throw e
        }
    }
}