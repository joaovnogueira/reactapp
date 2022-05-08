import './styles.css'

type CardProps = {
    name: string;
}

export function Card(props){
    return(
        <div className="card">
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    );
}