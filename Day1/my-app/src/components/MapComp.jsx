import LocationMap from './LocationMap';

export default function MapComp() {
  const latitude = 12.9716;
  const longitude = 77.5946;

  return (
    <div>
      <LocationMap lat={latitude} lng={longitude} />
    </div>
  );
}
