import './EdgeProfileComponent.css'

export default function EdgeProfileComponent({option, image}) {
    return (
        <div className="edgeProfileOption">
            {image}
            <span className="edgeOptionSpan">{option}</span>
        </div>
    );
}