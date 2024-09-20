import { CharacterListProps } from '../../types/props';
import { CharacterCardImg } from "../CharacterCardImg/CharacterCardImg";
import { CharacterCardInfo } from "../CharacterCardInfo/CharacterCardInfo";

import "./character-card.css";

function CharacterCard ({ character }: CharacterListProps) {
  return (
    <div className="card mb-3 text-light card-container">
      <div className="row g-0">
        <CharacterCardImg character={character} />
        <CharacterCardInfo character={character} />
      </div>
    </div>
  );
}

export { CharacterCard };
