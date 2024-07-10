export default function RoomCard({ room }) {
  return (
    <div className="bg-white">
      <a key={room.id} href={room.href} className="group text-sm">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
          <img
            alt={room.imageAlt}
            src={room.imageSrc}
            className="h-full w-full max-h-96 object-cover object-center"
          />
        </div>
        <div className="flex flex-row justify-between items-end">
          <div>
            <h3 className="mt-4 font-medium text-gray-900">{room.name}</h3>
            <p className="italic text-gray-500">{room.availability}</p>
            <p className="mt-2 font-medium text-gray-900">{room.price}</p>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full mt-4 justify-center rounded-md bg-indigo-600 px-4 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Details
            </button>
          </div>
        </div>
      </a>
    </div>
  );
}
