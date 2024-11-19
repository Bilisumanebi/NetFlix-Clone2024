import React from 'react'
import Row from '../Row/Row'
import requests from '../../../Utils/requests'

const RowList = () => {
      return (
            <>
                  <Row
                        title="Netflix originals"
                        fetchUrl={requests.fetchNetflixOriginals}
                        isLargeRow={true}
                  />
                  <Row
                        title="Trending Now"
                        fetchUrl={requests.fetchTrending}
                        isLargeRow={true}
                  />
                  <Row 
                        title="Commedies"
                        fetchUrl={requests.fetchComedyMovies}
                        isLargeRow={true} 
                  />
                  <Row
                        title="Horror Movies"
                        fetchUrl={requests.fetchHorrorMovies}
                        isLargeRow={true}
                  />
                  <Row
                        title="Top rated"
                        fetchUrl={requests.fetchTopRatedMovies}
                        isLargeRow={true}
                  />
                  <Row 
                        title="Romance Movies"
                        fetchUrl={requests.fetchRomanceMovies}
                        isLargeRow={true}
                  />
                  <Row 
                        title="Documentaries"
                        fetchUrl={requests.fetchDocumentaries}
                        isLargeRow={true}
                  />
            </>
      )
}

export default RowList