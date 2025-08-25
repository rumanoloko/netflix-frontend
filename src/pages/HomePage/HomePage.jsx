import {useEffect} from 'react'
import styles from './HomePage.module.scss'

export default function HomePage(){

    useEffect(() => {
        document.body.classList.add('home-active');
        return () => {document.body.classList.remove('home-active');};
    }, []);
    return (
        <div className={styles['start-div']}>
            <h1 className={styles['hello-h1']}>Hola mundo</h1>
        </div>
    );
}