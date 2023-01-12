
import axios from "axios"
export const fetchLogo = async() => {
    try{
        let res = await axios.post("http://localhost:10000/graphql", {
                            query: `{
                                storeConfig{
                                  header_logo_src
                                }
                              }`,
                            },{
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
        return res
    }catch(err){
        console.log(err)
    }
}