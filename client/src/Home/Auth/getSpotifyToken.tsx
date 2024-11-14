const GetSpotifyToken = async () => {
    const client_id = 'your-client-id';
    const client_secret = 'your-client-secret';
  
    const token = btoa(`${client_id}:${client_secret}`); // Base64 encode client credentials
  
    try {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${token}`,
        },
        body: 'grant_type=client_credentials',
      });
  
      if (!response.ok) {
        throw new Error('Failed to get token');
      }
  
      const data = await response.json();
      console.log('Token:', data.access_token); // Use this token for future requests
  
      return data.access_token;
    } catch (error) {
      console.error(error);
    }
  };
  
  export default GetSpotifyToken;