import { Clock } from "lucide-react";

const UpcomingFestivalsSection = () => {
  const events = [
    { name: "Losar Festival", date: "February 10, 2024" },
    { name: "Buddha Jayanti", date: "May 8, 2024" },
    { name: "Saga Dawa", date: "June 15, 2024" },
    { name: "Drukpa Kunley", date: "August 22, 2024" },
    { name: "Dassain Festival", date: "October 12, 2024" },
    { name: "Tihar Festival", date: "November 3, 2024" }
  ];

  return (
    <section className="monastery-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold monastery-text-primary mb-4">
            Upcoming Festivals & Events
          </h2>
          <p className="text-xl monastery-text-secondary max-w-2xl mx-auto">
            Join authentic spiritual celebrations and cultural events
          </p>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {events.concat(events).map((event, index) => (
              <div key={index} className="monastery-card p-6 min-w-[300px] flex-shrink-0">
                <div className="mb-4" style={{ color: 'var(--link-hover)' }}>
                  <Clock size={32} />
                </div>
                <h3 className="text-xl font-semibold monastery-text-primary mb-2">
                  {event.name}
                </h3>
                <p className="monastery-text-secondary">
                  {event.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingFestivalsSection;