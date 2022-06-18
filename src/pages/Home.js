import React,{useState,useEffect} from 'react'
import { options,fetchStories } from '../util/axiosClient'
import PaginatedItems from '../components/PaginatedItems'

const Home = () => {

   const[stories,setStories]=useState([])
    const[shown,setShown] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
   
    useEffect(()=>{
       fetchStories('https://free-football-soccer-videos1.p.rapidapi.com/v1/',options) 
         .then(data => {
           setStories(data)           
            setLoading(false)
         })
            .catch(err => {
                setError(true)
                setLoading(false)
            })
    },[])

  return (
    <>
     {loading && <div className='text-center'>Loading...</div>}
        {error && <div className='text-center'>Error...</div>}
        
    <PaginatedItems stories={stories} />
    </>
  )
}

export default Home