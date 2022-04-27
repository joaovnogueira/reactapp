import './styles.css'


export function Card(props){
    return(
        <div className="card">
            <strong>{name}</strong>
            <small>{time}</small>
        </div>
    );
}