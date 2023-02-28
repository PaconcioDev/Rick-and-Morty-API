import { api } from "../../service/axios";
import { useEffect, useState } from "react";
import { CharacterCard } from "../CharacterCard/CharacterCard";
import { CharacterApi, CharacterApiResult } from "../../models/character.model";
import { NavPage } from "../NavPage/NavPage";

function CharacterList() {
  const [characters, setCharacters] = useState<CharacterApiResult[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  
  useEffect(() => {
    async function fetchData() {
      const { data }: CharacterApi = await api(`character?page=${page}`);
      console.log(data);
      setCharacters(data.results);
      setLoading(false);
    }

    fetchData();
  }, [page]);

  return (
    <div className="container">
      {loading ? (
        <h1 className="text-center pb-4">Loading...</h1>
      ) : (
        <>
          <div className="row">
            {characters.map((character) => {
              return (
                <div className="col-lg-6 col-md-12" key={character.id}>
                  <CharacterCard character={character} />
                </div>
              );
            })}
          </div>
          <NavPage page={page} setPage={setPage}/>
        </>
      )}
    </div>
  );
}

export { CharacterList };
