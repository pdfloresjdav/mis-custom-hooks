import {useEffect,useState,useRef} from 'react';

export const useFetch = (url) => {
    const isMounted = useRef(true)
    const [state, setState] = useState({data:null,loading:true,error:null})
    useEffect(() => {
        return () => {
            isMounted.current=false
        }
    }, [])
    useEffect(() => {
        setState({data:null,loading:true,error:null})
        fetch(url)
        .then(resp=>resp.json())
        .then(data=>{
          
                if(isMounted.current){
                    setState({
                        loading:false,
                        error:null,
                        data
                    })
                }
                else{
                    console.log(`nose llamo`)
                }
                

            
        })
        .catch(()=>{
            setState({
                data:null,
                loading:false,
                error: 'no se cargo la info'
            })
        })
    }, [url])
    return state
}
