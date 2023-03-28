import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import Loader from '../../components/Loader/index'


const SingleSeries = props => {
    const { id } = useParams();
    const [show, setShow] = useState({});
    console.log(show)
  

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}?embed-episodes`)
        .then(response => response.json())
        .then(json => setShow(json));
    }, [])
   
    return(        
        <div> 
            {
              show === null && <Loader />    
            }
            {
               show !== null 
               &&     
               <div>
                <p style={{fontWeight: "bold", color: "green"}}>{show.name}</p>
                <p>Type - {show.type} </p>
                <p>Language - {show.language}</p>   
                <p>Premiered - {show.premiered}</p>                          
               </div>
            }            
        </div>
    )
}



export default SingleSeries;