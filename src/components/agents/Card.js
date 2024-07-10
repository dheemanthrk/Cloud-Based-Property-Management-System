export default function Card({ room, onEdit, onDelete }) {
    return (
      <div className="overflow-hidden bg-white p-4 min-h-36 shadow shadow-gray-400 sm:rounded-md sm:p-6 flex flex-col sm:flex-row flex-wrap">
        <div className="w-full sm:w-2/6">
          <img src={room.image} alt={`Room ${room.id}`} className="w-full h-full object-cover rounded-md" />
        </div>
        <div className="w-full sm:w-4/6 pl-0 sm:pl-4 flex flex-col">
          <h2 className="text-xl font-semibold mt-4 sm:mt-0">Room {room.id}</h2>
          <p className="text-gray-600 mt-2">{room.description}</p>
          <div className="flex flex-wrap mt-2">
            <div className="w-1/2 lg:w-1/3 mt-2">
              <span className="text-gray-600">Bedrooms: </span>{room.bedroomCount}
            </div>
            <div className="w-1/2 lg:w-1/3 mt-2">
              <span className="text-gray-600">Bathrooms: </span>{room.bathroomCount}
            </div>
            <div className="w-1/2 lg:w-1/3 mt-2">
              <span className="text-gray-600">Location: </span>{room.location}
            </div>
            <div className="w-1/2 lg:w-1/3 mt-2">
              <span className="text-gray-600">Price per night: </span>${room.pricePerNight}
            </div>
            <div className="w-1/2 lg:w-1/3 mt-2">
              <span className="text-gray-600">Rating: </span>{room.rating} / 5
            </div>
          </div>
          <div className="mt-4">
            <span className="text-gray-600">Amenities:</span>
            <ul className="list-disc list-inside mt-1 flex flex-wrap">
              {room.amenities.map((amenity, index) => (
                <li key={index} className="w-1/3 md:w-1/2 lg:w-1/3">{amenity}</li>
              ))}
            </ul>
          </div>
          <div className="mt-8 flex justify-end space-x-2">
            <button
              onClick={() => onEdit(room.id)}
              className="bg-indigo-600 font-semibold text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-500"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(room.id)}
              className="bg-red-500 font-semibold text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
  