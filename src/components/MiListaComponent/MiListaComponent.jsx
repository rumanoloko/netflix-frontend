import './MiListaComponent.css';
import MiSerie from '../Miserie/MiSerie';
import { v4 as uuidv4 } from "uuid";
import React, { useRef, useState, useEffect } from 'react';
import HugeView from "../HugeView/HugeView.jsx";

export function MiListaComponent({series}) {
    const scrollSpeed = 120; // velocidad de desplazamiento
    const edgeThreshold = 100; // distancia desde el borde para activar scroll
    const scrollRef = useRef(null);
    const [selectedId, setSelectedId] = useState(null);
    const [selectedSerie, setSelectedSerie] = useState(null);


    useEffect(() => {
        let mouseX = 0;
        let intervalId = null;
        let isInside = false;
        const container = scrollRef.current;

        const handleMouseEnter = () => {
            isInside = true;
            intervalId = setInterval(() => {
                if (!isInside) return;

                const rect = container.getBoundingClientRect();

                if (mouseX < rect.left + edgeThreshold) {
                    container.scrollLeft -= scrollSpeed;
                } else if (mouseX > rect.right - edgeThreshold) {
                    container.scrollLeft += scrollSpeed;
                }
            }, 30); // cada 30ms revisa la posición
        };

        const handleMouseLeave = () => {
            isInside = false;
            clearInterval(intervalId);
        };

        const trackMouse = (e) => {
            mouseX = e.clientX;
        };

        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);
        container.addEventListener('mousemove', trackMouse);

        return () => {
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
            container.removeEventListener('mousemove', trackMouse);
            clearInterval(intervalId);
        };
    }, []);


    return (
        <>
            <HugeView wallpaperImage='https://wallpapercave.com/wp/wp10279798.jpg'/>
            <h3 className="h3_">Mi lista</h3>
            <div className="mi-lista-component" ref={scrollRef}>
                {Array.isArray(series) && series.length > 0 ? series.map((serie) => (
                    <MiSerie
                        key={serie.id}
                        serie={serie}
                        isSelected={selectedId === serie.id}
                        onSelect={() => {
                            setSelectedId(serie.id);
                            setSelectedSerie(serie);
                        }}
                    />
                ))
                :
                    (<p>No se pudieron cargar los datos necesarios</p>)
                }
                <div className="espacio-final"/>
            </div>

            {selectedSerie && (
                <div className="detalle-serie">
                    <div className="info-serie">
                        <p><strong>{selectedSerie.genero[0]}</strong></p>
                        <p><strong>{selectedSerie.añoLanzamiento}</strong></p>
                        <p><strong>{selectedSerie.numeroEpisodios} episodios</strong></p>
                    </div>
                    <p className="descripcion-serie">{selectedSerie.description}</p>
                </div>
            )}
        </>
    );
}