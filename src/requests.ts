import axios, { AxiosResponse } from 'axios';

export const reqPage = async ( url: string ): Promise<AxiosResponse> =>
	await axios.get(url);
