import { CharacterListProps } from '../../types/props';
import "./character-card-info.css";

function CharacterCardInfo ({ character }: CharacterListProps) {
  return (
    <div className="col-md-8">
      <div className="card-body py-3">
        <div className="d-flex mb-2 align-items-center justify-content-between">
          <span className="me-2 fw-bold fs-5 overflow-hidden character-card__name">
            {character.name}
          </span>
          <span className={(character.status === "Alive") ? "badge bg-success" : (character.status === "Dead") ? "badge bg-danger" : "badge bg-warning"}>
            {character.species} - {character.status}
          </span>
        </div>
        <p className="mb-0">
          <small className="text-muted">Planet of Origin</small>
          <br />
          {character.origin.name}
        </p>
        <p className="mb-0">
          <small className="text-muted">Last known location:</small>
          <br />
          {character.location.name}
        </p>
      </div>
    </div>
  );
}

export { CharacterCardInfo };
