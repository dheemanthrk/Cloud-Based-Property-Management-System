import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "../../components/agents/Card";
import { agentRooms } from "../../constants/constants";

function AgentDashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header color="#471AA0" />
      <div className="flex flex-1">
        <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center border-b border-indigo-200 pb-6 pt-24">
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-[#471AA0]">
              Room management
            </h1>

            <div className="flex items-center">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add Room
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <ul className="space-y-6">
              {agentRooms.map((room) => (
                <li key={room.id}>
                  <Card room={room} />
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AgentDashboard;
