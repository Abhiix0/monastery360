import { useState } from "react";
import { Calendar, MapPin, Clock, Users, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  monastery: string;
  description: string;
  price: number;
  capacity: number;
  booked: number;
  image: string;
  category: "festival" | "meditation" | "workshop" | "ceremony";
}

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    participants: 1,
    notes: ""
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const events: Event[] = [
    {
      id: 1,
      title: "Tibetan New Year Festival",
      date: "2024-02-24",
      time: "09:00 AM",
      location: "Dharamshala, India",
      monastery: "Namgyal Monastery",
      description: "Join us for the vibrant celebration of Losar, the Tibetan New Year. Experience traditional dances, prayers, and festive foods in an authentic monastery setting.",
      price: 75,
      capacity: 50,
      booked: 23,
      image: "https://images.unsplash.com/photo-1544531586-fbb6cf2d4e29?w=400&h=250&fit=crop",
      category: "festival"
    },
    {
      id: 2,
      title: "Mindfulness Meditation Retreat",
      date: "2024-03-15",
      time: "06:00 AM",
      location: "Kyoto, Japan",
      monastery: "Ginkaku-ji Temple",
      description: "A three-day silent meditation retreat focusing on mindfulness and inner peace. Includes guided sessions, walking meditation, and dharma talks.",
      price: 180,
      capacity: 20,
      booked: 15,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      category: "meditation"
    },
    {
      id: 3,
      title: "Sacred Art Workshop",
      date: "2024-03-22",
      time: "02:00 PM",
      location: "Meteora, Greece",
      monastery: "Great Meteoron",
      description: "Learn the ancient art of Byzantine icon painting from master monks. All materials provided. No prior experience necessary.",
      price: 95,
      capacity: 15,
      booked: 8,
      image: "https://images.unsplash.com/photo-1555993539-1732b0258c5f?w=400&h=250&fit=crop",
      category: "workshop"
    },
    {
      id: 4,
      title: "Full Moon Ceremony",
      date: "2024-04-05",
      time: "07:30 PM",
      location: "Bhutan",
      monastery: "Tiger's Nest",
      description: "Participate in a traditional Buddhist ceremony under the full moon. Includes chanting, butter lamp offerings, and blessings.",
      price: 65,
      capacity: 30,
      booked: 12,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
      category: "ceremony"
    },
    {
      id: 5,
      title: "Zen Calligraphy Master Class",
      date: "2024-04-20",
      time: "10:00 AM",
      location: "Mount Fuji, Japan",
      monastery: "Shinto Shrine",
      description: "Master the meditative art of Japanese calligraphy with Zen monks. Learn about the spiritual aspects of brush and ink.",
      price: 120,
      capacity: 12,
      booked: 6,
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&h=250&fit=crop",
      category: "workshop"
    },
    {
      id: 6,
      title: "Vesak Day Celebration",
      date: "2024-05-12",
      time: "08:00 AM",
      location: "Kandy, Sri Lanka",
      monastery: "Temple of the Tooth",
      description: "Celebrate the birth, enlightenment, and death of Buddha with traditional ceremonies, lantern processions, and communal meals.",
      price: 45,
      capacity: 100,
      booked: 67,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
      category: "festival"
    }
  ];

  const handleBookNow = (event: Event) => {
    setSelectedEvent(event);
    setShowBookingModal(true);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
    // In a real app, this would send the booking to a server
  };

  const closeModal = () => {
    setShowBookingModal(false);
    setBookingConfirmed(false);
    setSelectedEvent(null);
    setBookingForm({ name: "", email: "", participants: 1, notes: "" });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "festival": return { backgroundColor: 'var(--highlight)', color: 'var(--text-primary)' };
      case "meditation": return { backgroundColor: 'var(--link-hover)', color: 'var(--bg)' };
      case "workshop": return { backgroundColor: 'var(--accent-green)', color: 'var(--bg)' };
      case "ceremony": return { backgroundColor: 'var(--stone)', color: 'var(--text-primary)' };
      default: return { backgroundColor: 'var(--text-accent)', color: 'var(--bg)' };
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="text-white py-16"
        style={{ 
          background: 'var(--gradient-primary)'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sacred Events & Experiences
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ 
              color: 'var(--bg)', 
              opacity: 0.9 
            }}>
              Participate in authentic monastery events, festivals, and spiritual practices from around the world
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="monastery-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.map(event => (
              <div key={event.id} className="monastery-card overflow-hidden">
                <div className="aspect-video overflow-hidden rounded-t-xl">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(event.category)}`}>
                      {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                    </span>
                    <div className="text-right">
                      <div className="text-2xl font-bold monastery-text-primary">
                        ${event.price}
                      </div>
                      <div className="text-sm monastery-text-secondary">per person</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold monastery-text-primary mb-3">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center monastery-text-secondary">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{new Date(event.date).toLocaleDateString()} at {event.time}</span>
                    </div>
                    <div className="flex items-center monastery-text-secondary">
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm">{event.monastery}, {event.location}</span>
                    </div>
                    <div className="flex items-center monastery-text-secondary">
                      <Users size={16} className="mr-2" />
                      <span className="text-sm">{event.booked}/{event.capacity} participants</span>
                    </div>
                  </div>

                  <p className="monastery-text-secondary text-sm leading-relaxed mb-6">
                    {event.description}
                  </p>

                  {/* Availability Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="monastery-text-secondary">Availability</span>
                      <span className="monastery-text-primary font-medium">
                        {Math.round((event.capacity - event.booked) / event.capacity * 100)}% available
                      </span>
                    </div>
                    <div 
                      className="w-full rounded-full h-2" 
                      style={{ backgroundColor: 'rgba(74, 74, 74, 0.2)' }}
                    >
                      <div 
                        className="h-2 rounded-full transition-all"
                        style={{ 
                          backgroundColor: 'var(--highlight)',
                          width: `${(event.booked / event.capacity) * 100}%` 
                        }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => handleBookNow(event)}
                    disabled={event.booked >= event.capacity}
                    className={`w-full font-semibold py-3 rounded-xl transition-all ${
                      event.booked >= event.capacity
                        ? "cursor-not-allowed"
                        : "monastery-btn-primary"
                    }`}
                    style={event.booked >= event.capacity ? {
                      backgroundColor: 'rgba(74, 74, 74, 0.2)',
                      color: 'var(--text-accent)',
                      cursor: 'not-allowed'
                    } : {}}
                  >
                    {event.booked >= event.capacity ? "Fully Booked" : "Book Now"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingModal && selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto" style={{ backgroundColor: 'var(--bg)' }}>
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold monastery-text-primary">
                  {bookingConfirmed ? "Booking Confirmed!" : "Book Your Experience"}
                </h3>
                <button
                  onClick={closeModal}
                  className="p-2 rounded-lg transition-colors"
                  style={{ color: 'var(--text-accent)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(74, 74, 74, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              {bookingConfirmed ? (
                <div className="text-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: 'var(--highlight)' }}
                  >
                    <Calendar className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold monastery-text-primary mb-2">
                    Thank you for your booking!
                  </h4>
                  <p className="monastery-text-secondary mb-4">
                    You'll receive a confirmation email with all the details shortly.
                  </p>
                  <div 
                    className="p-4 rounded-xl"
                    style={{ backgroundColor: 'rgba(214, 211, 206, 0.2)' }}
                  >
                    <p className="text-sm monastery-text-secondary">
                      <strong>Event:</strong> {selectedEvent.title}<br/>
                      <strong>Date:</strong> {new Date(selectedEvent.date).toLocaleDateString()}<br/>
                      <strong>Participants:</strong> {bookingForm.participants}
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmitBooking}>
                  <div className="mb-4">
                    <h4 className="font-semibold monastery-text-primary mb-2">
                      {selectedEvent.title}
                    </h4>
                    <p className="text-sm monastery-text-secondary">
                      {selectedEvent.monastery}, {selectedEvent.location}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium monastery-text-primary mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                        className="w-full px-3 py-2 rounded-lg outline-none"
                        style={{
                          border: '1px solid var(--stone)',
                          backgroundColor: 'var(--bg)',
                          color: 'var(--text-primary)'
                        }}
                        placeholder="Enter your full name"
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = 'var(--highlight)';
                          e.currentTarget.style.boxShadow = '0 0 0 2px rgba(194, 167, 109, 0.2)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'var(--stone)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium monastery-text-primary mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                        className="w-full px-3 py-2 border monastery-border rounded-lg focus:ring-2 focus:ring-japanese-carmine focus:border-transparent outline-none"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium monastery-text-primary mb-2">
                        Number of Participants
                      </label>
                      <select
                        value={bookingForm.participants}
                        onChange={(e) => setBookingForm({...bookingForm, participants: parseInt(e.target.value)})}
                        className="w-full px-3 py-2 border monastery-border rounded-lg focus:ring-2 focus:ring-japanese-carmine focus:border-transparent outline-none"
                      >
                        {[1,2,3,4,5,6].map(num => (
                          <option key={num} value={num}>{num} participant{num > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium monastery-text-primary mb-2">
                        Special Notes (Optional)
                      </label>
                      <textarea
                        value={bookingForm.notes}
                        onChange={(e) => setBookingForm({...bookingForm, notes: e.target.value})}
                        className="w-full px-3 py-2 border monastery-border rounded-lg focus:ring-2 focus:ring-japanese-carmine focus:border-transparent outline-none h-20 resize-none"
                        placeholder="Any dietary restrictions, accessibility needs, or special requests..."
                      />
                    </div>

                    <div 
                      className="p-4 rounded-xl"
                      style={{ backgroundColor: 'rgba(214, 211, 206, 0.2)' }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Total:</span>
                        <span className="text-xl font-bold monastery-text-primary">
                          ${selectedEvent.price * bookingForm.participants}
                        </span>
                      </div>
                      <p className="text-sm monastery-text-secondary mt-1">
                        {bookingForm.participants} × ${selectedEvent.price}
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full monastery-btn-primary mt-6"
                  >
                    Confirm Booking
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Events;