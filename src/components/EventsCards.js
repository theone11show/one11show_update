import React from "react";

const events = [
  {
    id: 1,
    title: "Band One",
    img: "/FakiaraImage.webp", 
    link: "/event/1"
  },
  {
    id: 2,
    title: "Band Two",
    img: "CactusImage.webp",
    link: "/event/2"
  },
  {
    id: 3,
    title: "Coming Soon",
    img: "CatusImage.webp",
    link: "/event/3"
  }
];

const EventsSection = () => {
  return (
    <section className="py-12 px-6 text-white bg-[#1c1c1e]">
      <h2 className="text-3xl font-bold text-center mb-10"></h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-black rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={event.img}
              alt={event.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 flex justify-between items-center">
              {/* Info button LEFT */}
              <a
                href={event.link}
                className="text-white-500 font-bold hover:underline"
              >
                Info &gt;
              </a>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
