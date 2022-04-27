import './styles.css'


export function Card(){
    return(
        <div className="card">
            <strong>{name}</strong>
            <small>{time}</small>
        </div>
    );
}