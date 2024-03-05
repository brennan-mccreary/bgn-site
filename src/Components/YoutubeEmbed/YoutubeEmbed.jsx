import React from 'react';

const YoutubeEmbed = () => {
    return ( 
        <div className='flex justify-center'>
            <iframe 
                src="https://www.youtube.com/embed/UY5Kwueghc0?si=zb4yKuZoEdIkiAtF" 
                title="YouTube video player" 
                frameborder="0" 
                className='rounded-xl w-3/4 aspect-video border-4 border-bgngreen-400'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
        </div>
     );
}
 
export default YoutubeEmbed;