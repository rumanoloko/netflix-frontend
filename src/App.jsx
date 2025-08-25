import Navbar from './components/Navbar/Navbar.jsx';
import {MiListaComponent} from './components/MiListaComponent/MiListaComponent.jsx';
import {useState, useEffect} from 'react';
import SearchPage from './pages/SearchPage/SearchPage.jsx';
function App() {
    const [showSearchMenu, setShowSearchMenu] = useState(false);
    const [series, setSeries] = useState(null);
    useEffect(() => {
        async function obtenerSeries() {
            try{
                const res = await fetch('http://localhost:5000/api/series');
                if(!res.ok) throw new Error('Eroor al intentar obtener las series');
                const data = await res.json();
                setSeries(data)
            }catch(error){
                console.error(`Se produjo el error ${error}`)
            }
        }
        obtenerSeries();
    }, []);
    return (
        <>
            <Navbar onBuscar = {() => {setShowSearchMenu(true)}} onInicio = {() => setShowSearchMenu(false)}/>
            {showSearchMenu ? <SearchPage series={series}/> : <MiListaComponent series={series}/>}
        </>
    );
}
export default App;

