import { addressInfoByPostalCode } from './addressInfoByPostalCode';
import { queries as NASAQueries } from './NASA';

const Query = {
	addressInfoByPostalCode,
	...NASAQueries
};

export default Query;
