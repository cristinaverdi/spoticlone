const React = require('react');
const Layout = require('./Layout');

function ArtistSearchResult(props) {
  return (
    <Layout>
      <div>
          {props.items.map((artist, i) => {
            console.log(artist)
            /*console.log(artist)
              if(!artist.images[1]) {
                  return (
                  <div key = {i} >
                    <h5>{artist.name}</h5>
                    <a href={`/albums/${artist.id}`}>View Albums</a>   
                  </div>
                  )
              }*/

              return ( 
                <div key = {i} >
                  {!(artist.images.length > 0)? null : (<img src={artist.images[1].url} width="200" alt="" />)} 
                  <h5>{artist.name}</h5>
                  <a href={`/albums/${artist.id}`}>View Albums</a>   
                </div>
              )
          }) }         
      </div> 
    </Layout>  
  );
}



module.exports = ArtistSearchResult