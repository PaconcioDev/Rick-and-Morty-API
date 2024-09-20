import { LocationCard } from '../LocationCard/LocationCard';
import { Layout } from '../Layout/Layout';
import { useFetch } from '../../hooks/useFetch';
import { LocationApiResult } from '../../types/location';

function LocationList () {
  const {
    data: locations,
    apiInfo,
    loading,
    page,
    setPage
  } = useFetch<LocationApiResult>('location');

  return (
    <Layout
      loading={loading}
      page={page}
      pages={apiInfo.pages}
      setPage={setPage}
    >
      {locations.map((location) => {
        return (
          <div className="col-lg-6 col-md-12" key={location.id}>
            <LocationCard location={location} />
          </div>
        );
      })}
    </Layout>

  );
}

export { LocationList };