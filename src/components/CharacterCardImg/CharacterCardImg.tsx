import { CharacterListProps } from "../../models/props.model";
import "./character-card-img.css"

function CharacterCardImg({character}: CharacterListProps) {
  return (
    <div className="col-md-4">
      <img
        className="img-fluid rounded-start character-card__image"
        src={character.image}
        alt={character.name}
      />
    </div>
  );
}

export { CharacterCardImg };
