// Removed unused axios import
import axiosInstance from '../Components/helpers/axiosInstance';

export async function fetchCoinDetails(id) {
	try {
		const response = await axiosInstance.get(`/coins/${id}`);
		return response.data;
	} catch (error) {
		console.error('Error fetching coin data:', error);
		throw error;
	}
}