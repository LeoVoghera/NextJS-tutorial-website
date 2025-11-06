import ExploreBTN from "@/components/ExploreBTN";
import EventCard from "@/components/EventCard";
import image from "next/image";
import { title } from "process";

const events = [
  {
    image: "/images/event1.png",
    title: "Tech Conference 2025",
    slug: "event-1",
    location: "Lisbon Congress Center, Portugal",
    date: "March 14, 2025",
    time: "09:00 - 17:30"
  },
  {
    image: "/images/event2.png",
    title: "Web Development Workshop",
    slug: "event-2",
    location: "Impact Hub Lisbon, Portugal",
    date: "April 2, 2025",
    time: "10:00 - 16:00"
  },
  {
    image: "/images/event3.png",
    title: "AI & Machine Learning Summit",
    slug: "event-3",
    location: "Altice Arena, Lisbon, Portugal",
    date: "May 20, 2025",
    time: "08:30 - 18:00"
  }
];


const page = () => {
  return (
    <section>
            <h1 className="text-center"> The hub for every dev event you don't want to miss!</h1>
            <p className="text-center mt-5"> Stay updated with the latest trends and technologies in the developer community.</p>
            <ExploreBTN />

            <div className="mt-20 y-7">
              <h3 className="py-10"> Featured Events</h3>
              <ul className="events">
                {events.map(event => (
                  <li key={event.title} className="list-none">
                    <EventCard {...event} />
                  </li>
                ))}
              </ul>


            </div>
    </section>
  )
}

export default page;