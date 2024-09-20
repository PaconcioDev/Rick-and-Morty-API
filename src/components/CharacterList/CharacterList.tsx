import { CharacterCard } from "../CharacterCard/CharacterCard";
import { Layout } from '../Layout/Layout';
import { useFetch } from '../../hooks/useFetch';
import { CharacterApiResult } from '../../types/character';

function CharacterList () {
  const {
    data: characters,
    apiInfo,
    loading,
    page,
    setPage
  } = useFetch<CharacterApiResult>('character');

  return (
    <Layout
      loading={loading}
      page={page}
      pages={apiInfo.pages}
      setPage={setPage}
    >
      {characters.map((character) => {
        return (
          <div className="col-lg-6 col-md-12" key={character.id}>
            <CharacterCard character={character} />
          </div>
        );
      })}
    </Layout >
  );
}

export { CharacterList };
