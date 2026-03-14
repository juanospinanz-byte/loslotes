import { useEffect, useState } from "react"
import sqliteService from '../src/services/sqliteService'
import { View } from "react-native";

const AppProvider =({children}) =>{
    const [ready, setready] = useState(false);

    useEffect(()=>{
        let mounted = true;
        const init = async() =>{
            try {
                await sqliteService
            } catch (e) {
                console.warn('mensaje con el error')
            }finally{
                if(mounted) setready(true);
            }
        }
        init();
        return ()=>{mounted= false}
    },[]);

    if (!ready){
        return(
            <View style ={{flex: 1, alignItemns: 'center', justifyContent: 'center'}}>
                <ActivityIndicator size = "large"/>
            </View>
        )
    }
    return children;
}

export default AppProvider