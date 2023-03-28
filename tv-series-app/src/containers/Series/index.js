import React, { useState } from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader/index'
import Intro from '../../components/Intro/index';

const Series = () => {
    const [series, setSeries] = useState([]); 
    const [seriesName, setName] = useState('')
    const [isFetching, setFetching] = useState(false)
  
    const onInputChange = e => {
      setName(e.target.value);
      setFetching(true);

      setTimeout (() => {  
        fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response => response.json())
        .then(json => setSeries(json), setFetching(false))
        }, 500)  
    }

    return ( 
    <div>
      <Intro message="Here you can find your all most loved series!"/>  
      <div>
        <input value={seriesName} type="text" onChange={onInputChange}/>
      </div>
      {
        !isFetching && series.length === 0 && seriesName.trim() === '' && <p>Please, enter series name</p>
      }
      {
        !isFetching && series.length === 0 && seriesName.trim() !== '' && <p>No TV Series have been found with this name</p>
      }
      {
        isFetching && <Loader />
      }
      {
        !isFetching &&  <SeriesList list={ series } />   
      }   
    </div> )
}

export default Series;