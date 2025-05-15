// Removed unused axios import
import axiosInstance from '../Components/helpers/axiosInstance';

export async function fetchCoinData() {
	try {
		const response = await axiosInstance.get('/coins/markets?vs_currency=usd');
		return response;
	} catch (error) {
		console.error('Error fetching coin data:', error);
		throw error;
	}
}