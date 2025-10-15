import Constants from 'expo-constants';
const { apiUrl } = Constants.expoConfig?.extra || {};

export async function getCatalog() : Promise<any[]> {
  try {
    const response = await fetch(`${apiUrl}/api/catalog`);
    const data = await response.json();
    console.log(data);
    return data.catalog;
  } 
  catch (error) {
    console.error(error);
    return Promise.reject('Produto não encontrado');
  }
}