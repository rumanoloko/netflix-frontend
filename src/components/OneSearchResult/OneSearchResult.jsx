import './OneSearchResult.scss'

export default function OneSearchResult({serie}) {
    return (
        <div className="resultShow">
            <img src={serie.thumbnail} alt={`imagen de ${serie.title}`} className="result-image"/>
        </div>
    )
}