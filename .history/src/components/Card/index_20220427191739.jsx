import './styles.css'


export function Card({name, time}){
    return(
        <div className="card">
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    );
}