import{ useEffect } from 'react';
import GetSpotifyToken from '../Auth/getSpotifyToken';
 

const Artist = () => {

    useEffect(() => {
        GetSpotifyToken();
      }, []);
    
    
  return (
    <section>
        <div className="w-24 h-24">
OnBoarding
        </div>
    </section>
  )
}

export default Artist