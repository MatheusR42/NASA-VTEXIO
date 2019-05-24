import axios from "axios";
import { GraphQLExtensionError } from "../../exceptions/GraphQLExtensionError";

// tslint:disable-next-line:variable-name
const addressInfoByPostalCode = async (_: any, args: any, ctx: any) => {
    const { postalCode } = args;
    const http = axios.create({
      headers: {
        "Proxy-Authorization": ctx.vtex.authToken
      }
    });

    try {
      const { data } = await http.get(`http://${ctx.header["x-vtex-account"]}.vtexcommercestable.com.br/api/checkout/pub/postal-code/BRA/${postalCode}`);
      return data;
    } catch (e) {
      if (e.response) {
        const { statusText, status, data } = e.response
        throw new GraphQLExtensionError(statusText, status, data)
      }

      throw e;
    }
};

export { addressInfoByPostalCode };
