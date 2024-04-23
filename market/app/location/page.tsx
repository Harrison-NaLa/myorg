interface LocationDataInterface {
  name: string;
  address: string;
  id: number;
  country: string;
}
const LOCATIONS_LIST: LocationDataInterface[] = [
  {
    name: 'Coca-Cola FEMSA',
    address:
      'Calle Doctor José María Vértiz 168, Colonia Doctores, Cuauhtémoc, 06720 Ciudad ',
    id: 0,
    country: 'Mexico',
  },
  {
    name: 'Coca-Cola Canada',
    address: '335 King St E, Toronto, ON M5A 1L1, Canadá',
    id: 1,
    country: 'Canadá',
  },
  {
    name: 'The Coca-Cola Company',
    address: '1 Coca-Cola Plaza, Atlanta, Georgia, 30313, Estados Unidos ',
    id: 2,
    country: 'EE.UU',
  },
  {
    name: 'Coca-Cola Andina Chile',
    address: 'Camino Lo Boza 1201, Pudahuel, Región Metropolitana, Chile',
    id: 3,
    country: 'Chile',
  },
];
export default function Location() {
  const locations: LocationDataInterface[] = LOCATIONS_LIST;
  return (
    <div className="location">
      <h1 className="text-2xl text-center font-bold my-4">Nuestras sedes</h1>
      <div className="flex gap-3 p-4">
        {locations.map((itemData) => (
          <div
            key={itemData.id}
            className="location_card w-72 p-3 rounded-md border border-gray-700 grid items-center bg-teal-50"
          >
            <section className="grid ">
              <strong>Nombre:</strong>
              <span>{itemData.name}</span>
            </section>
            <section>
              <strong>Dirección:  </strong>
              <span>{itemData.address}</span>
            </section>
            <section className="flex gap-2">
              <strong>País:</strong>
              <span>{itemData.country}</span>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}
