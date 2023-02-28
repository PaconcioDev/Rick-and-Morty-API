import { CharacterListProps } from "../../models/props.model";
import "./character-card-info.css";

function CharacterCardInfo({ character }: CharacterListProps) {
  return (
    <div className="col-md-8">
      <div className="card-body character-card__info">
        <div className="character-card__title">
          <h5 className="me-2 fw-bold character-card__name">
            {character.name}
          </h5>
          <span className={(character.status === "Alive") ? "badge bg-success" : (character.status === "Dead") ? "badge bg-danger" : "badge bg-warning" }>
            {character.status} - {character.species}
          </span>
        </div>
        <p className="card-text  ">
          <small className="text-muted">Planet of Origin</small>
          <br />
          {character.origin.name}
        </p>
        <p className="card-text  ">
          <small className="text-muted">Last known location:</small>
          <br />
          {character.location.name}
        </p>
      </div>
    </div>
  );
}

export { CharacterCardInfo };
