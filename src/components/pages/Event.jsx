import Navbar from "../Navbar";
import Footer from "../Footer";
import FAQSection from "../FAQSection";
import EventSlider from "../EventSlider";
import diceVid3 from "/public/assets/DiceVid3.mp4";
import events_upcoming from "../../data/events_upcoming.json";

export default function Event() {
  return (
    <div className="Events">
      <Navbar />
      <div className="container mx-auto pt-40 py-8 p-4">

        <h1 className="text-4xl font-semibold mb-12 sm:text-5xl text-center">
          Upcoming Events
        </h1>


        <div className="bg-black text-white py-6 overflow-hidden">
          <div className="relative w-full">
            <div className="flex animate-marquee space-x-12">
              <span className="text-lg font-semibold whitespace-nowrap">
                Participation in IISF 2025 | Workshop on Arduino |  Workshop on python |  Workshop on Networking |
              </span>
              <span className="text-lg font-semibold whitespace-nowrap">
                Participation in IISF 2025 | Workshop on Arduino |  Workshop on python |  Workshop on Networking |
              </span>
            </div>
          </div>
        </div>

        {events_upcoming.length === 0 ? (
          <p className="text-2xl pt-10 text-center">
            For Parctipation in the following events you may contact Ms. Navneet ( Ph no: 8146939181 )
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events_upcoming.map((event, index) => (
              <div
                key={index}
                className="border border-black hover:shadow-blue-300 shadow-xl rounded-lg p-6 duration-500 hover:scale-105"
              >
                <div className="h-[450px] sm:h-[400px]">
                  <h2 className="text-xl font-semibold mb-4">
                    {event.eventName}
                  </h2>
                  <p className="text-3xl mb-2">
                    <strong>{event.name}</strong>
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>Date:</strong> {event.eventDate}
                  </p>
                  <p className="text-gray-600 mb-2">{event.eventDetail}</p>
                </div>
                <div className="mt-8">
                  <a
                    href={event.EventFormLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white py-2 px-8 rounded"
                  >
                    Register
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="container mx-auto pt-40">
        <h1 className="text-4xl font-semibold mb-12 sm:text-5xl text-center">
          Events
        </h1>
        <div>
          <EventSlider />
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-center mb-28">
          <div className="md:w-1/2 p-4">
            <h1 className="text-3xl sm:text-4xl font-semibold mb-8">
              Some glimpse of our past events
            </h1>
            <p className="text-gray-500 text-md sm:text-lg">
              Embark on a visual journey through our past events, presented in a
              captivating video. Each scene offers a glimpse into our history,
              unfolding like a storybook. Experience our triumphs, setbacks, and
              the unfolding of time through dynamic imagery and narration. Dive
              into our narrative, where every frame reveals a piece of our
              collective heritage. Showcasing vibrant collaboration among
              students and faculty from diverse fields. Through projects,
              competitions, and industry engagements, DICE fosters innovation
              and cross-disciplinary learning, preparing students for dynamic
              career paths aligned with the evolving demands of the industry.
            </p>
          </div>
          <div className="md:w-1/2 flex items-center justify-center p-2">
            <video
              src={diceVid3}
              className="rounded-full w-[320px] h-[520px] object-cover shadow-2xl"
              autoPlay
              muted
              loop
            ></video>
          </div>
        </div>
      </div>

      {/* Removed Ongoing Events */}



      <FAQSection />
      <Footer />
    </div>
  );
}