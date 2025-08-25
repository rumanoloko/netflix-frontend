import './PulsableComponent.scss'
import {useState, useEffect, useRef} from 'react'
export function BotonComponent({letra, onClick}) {
    return (
        <button className='tecla-boton' onClick={() => {onClick({letra})}}>{letra}</button>
    );
}


export function CategoriaComponent({ categoria, onClick }) {
    const textRef = useRef(null);
    const [translateX, setTranslateX] = useState(0);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const el = textRef.current;
        if (el) {
            const overflow = el.scrollWidth - el.offsetWidth;
            setTranslateX(overflow > 0 ? overflow : 0);
        }
    }, [categoria]);

    return (
        <button
            className="categoria-button"
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
      <span
          ref={textRef}
          className="categoria-text"
          style={{
              transform: hovered && translateX > 0 ? `translateX(-${translateX}px)` : 'translateX(0)',
              transition: hovered && translateX > 0 ? 'transform 6s ease' : 'none',
          }}
      >
        {categoria}
      </span>
        </button>
    );
}
