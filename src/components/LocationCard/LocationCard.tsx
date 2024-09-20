import { LocationListProps } from '../../types/props';

function LocationCard ({ location }: LocationListProps) {
  return (
    <h1>
      {location.name}
    </h1>
  );
}

export { LocationCard };