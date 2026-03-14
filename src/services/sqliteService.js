import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabaseSync('nombre_de>-su_base_de_datos');

// Dentro de este archivo iran las sentencias y queries sql

const init = ()=>{
    //logica para arrancar la bd
}

const actualizarLotes=()=>{
    const result = db.runSync(
        //consulta sql para update
    )

}

export default{
    init,
    actualizarLotes
}