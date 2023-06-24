export const fetchData = async () => {
    try {
        const response = await fetch(
            'https://s2ju1fj7u1.execute-api.us-east-2.amazonaws.com/Prod/api/practices',
            { mode: 'no-cors' }
        );

        if (!response.ok) {
            throw new Error('Error fetching data');
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

export default fetchData;
