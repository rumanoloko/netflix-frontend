import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import './MiSerie.css';

export default function MiSerie({ serie, isSelected, onSelect }) {
    const [showVideo, setShowVideo] = useState(false);
    const itemRef = useRef(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        if (isSelected && itemRef.current) {
            itemRef.current.scrollIntoView({ behavior: 'smooth', inline: 'start' });
            console.log(`Se pulsó la serie con ID: ${serie.id}`);

            // Reinicia el temporizador si se selecciona otra serie
            clearTimeout(timeoutRef.current);
            setShowVideo(false);

            // Espera 5 segundos antes de mostrar el video
            timeoutRef.current = setTimeout(() => {
                setShowVideo(true);
            }, 5000);
        } else {
            // Si deja de estar seleccionada, restauramos la imagen
            clearTimeout(timeoutRef.current);
            setShowVideo(false);
        }

        // Limpieza del timeout si el componente se desmonta
        return () => clearTimeout(timeoutRef.current);
    }, [isSelected]);
    const embedUrl = `https://www.youtube.com/embed/${serie.videoID}?autoplay=1&mute=1`
    return (
        <div
            ref={itemRef}
            onClick={onSelect}
            className={`serie-container ${isSelected ? 'active' : ''}`}
            id={serie.id}
        >
            {showVideo ? (
                <iframe
                    width="100%"
                    height="100%"
                    src={embedUrl}
                    title={`Video de ${serie.video}`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            ) : (
                <img className="serie-image" src={serie.thumbnail} alt={serie.title} />
            )}
        </div>
    );
}
