import React, { useState } from "react";
import Bg2 from "/bg2.jpg";

export default function ConferenceSchedule() {
const [activeDay, setActiveDay] = useState(0);


  const days = [
    {
      date: "April 4",
      desc: "The first day of the conference is focused on dark patterns for ecommerce.",
      sessions: [
        { name: "Steven McHail", role: "Not so one-time payments", time: "9:00AM – 10:00AM PST" },
        { name: "Jaquelin Isch", role: "The finer print", time: "10:00AM – 11:00AM PST" },
        { name: "Dianne Guilaneli", role: "Post-purchase blackmail", time: "11:00AM – 12:00PM PST" },
        { name: "Lunch", role: "", time: "12:00PM – 1:00PM PST" },
        { name: "Ronni Cantadore", role: "Buy or die", time: "1:00PM – 2:00PM PST" },
        { name: "Erhart Cockrin", role: "In-person cancellation", time: "2:00PM – 3:00PM PST" },
        { name: "Parker Johnson", role: "The paycancell switcheroo", time: "3:00PM – 4:00PM PST" },
      ],
    },
    {
      date: "April 5",
      desc: "Next we spend the day talking about deceiving people with technology.",
      sessions: [
        { name: "Damaris Kimura", role: "The invisible card reader", time: "9:00AM – 10:00AM PST" },
        { name: "Ibrahim Frasch", role: "Stealing fingerprints", time: "10:00AM – 11:00AM PST" },
        { name: "Catherine Burrage", role: "Voting machines", time: "11:00AM – 12:00PM PST" },
        { name: "Lunch", role: "", time: "12:00PM – 1:00PM PST" },
        { name: "Rinaldo Beynon", role: "Blackhat SEO that works", time: "1:00PM – 2:00PM PST" },
        { name: "Waylon Hyden", role: "Turning your audience into a botnet", time: "2:00PM – 3:00PM PST" },
        { name: "Giordano Saguccio", role: "Fly phishing", time: "3:00PM – 4:00PM PST" },
      ],
    },
    {
        date: "April 6",
        desc: "We close out the event previewing new techniques that are still in development.",
      sessions: [
        { name: "Andrew Greene", role: "Neuralink dark patterns", time: "9:00AM – 10:00AM PST" },
        { name: "Heather Terry", role: "DALLE for passports", time: "10:00AM – 11:00AM PST" },
        { name: "Piers Wilkins", role: "Quantum password cracking", time: "11:00AM – 12:00PM PST" },
        { name: "Lunch", role: "", time: "12:00PM – 1:00PM PST" },
        { name: "Gordon Sanderson", role: "SkyNet is coming", time: "1:00PM – 2:00PM PST" },
        { name: "Kimberly Parsons", role: "Dark patterns for the metaverse", time: "2:00PM – 3:00PM PST" },
        { name: "Richard Astley", role: "Knowing the game and playing it", time: "3:00PM – 4:00PM PST" },
      ],
    },
  ];

return (
<div
className="min-h-screen py-16 px-6"
style={{
backgroundImage:`url(${Bg2})`,
backgroundRepeat: "no-repeat",
backgroundSize: "cover",
backgroundPosition: "right",
}}
>
<div className="max-w-6xl mx-auto">
      {/* Heading */}
    <h1 className="text-4xl font-bold text-blue-600">
      Our three day schedule is jam-packed <br /> with brilliant, creative, evil geniuses.
    </h1>

    <p className="text-blue-900 mt-4 text-2xl leading-relaxed">
      The worst people in our industry giving the best talks you’ve ever seen.
    </p><div className="hidden md:grid grid-cols-3 gap-6 mt-12">
       {days.map((day, i) => (
        <div key={i} className="">
          <h1 className="text-2xl font-semibold text-blue-900">{day.date}</h1>
          <p className="text-sm mt-2">{day.desc}</p>
      </div>
            ))}</div>

    {/* DESKTOP & TABLET VIEW – all day boxes with sessions */}
    <div className="hidden md:grid grid-cols-3 gap-9 mt-12">
      {days.map((day, i) => (
        <div key={i} className="bg-white/90 shadow-lg p-5">
         

          <div className="mt-4 space-y-5">
            {day.sessions.map((s, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-lg font-semibold text-blue-900">{s.name}</h3>
                {s.role && <p className="text-blue-900 text-sm">{s.role}</p>}
                <p className="text-slate-500 text-xs mt-1 font-mono">{s.time}</p>
                <div className="h-[1px] bg-slate-300 mt-2 w-50 ml-16"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* MOBILE SLIDER – only day boxes */}
    <div className="md:hidden mt-10 overflow-x-auto flex gap-4 pb-1">
      {days.map((day, i) => (
        <div
          key={i}
          onClick={() => setActiveDay(i)}
          className={` w-[160px] p-5 rounded-xl flex-shrink-0 cursor-pointer transition
          ${activeDay === i ? "  text-blue-900 shadow-xl" : "bg-transparent text-blue-700"}`}
        >
          <h1 className="text-xl font-semibold">{day.date}</h1>
          <p className="text-sm mt-2">{day.desc}</p>
        </div>
      ))}
    </div>

    {/* MOBILE SESSION LIST – visible only on mobile */}
    <div className="md:hidden mt-12">
      <div className="bg-white shadow-xl rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-blue-900">{days[activeDay].date}</h2>
        <p className="text-gray-600 mt-1">{days[activeDay].desc}</p>

        <div className="mt-6 space-y-6">
          {days[activeDay].sessions.map((s, i) => (
            <div key={i} className="text-center">
              <h3 className="text-xl font-semibold text-blue-900">{s.name}</h3>
              {s.role && <p className="text-blue-900 text-sm">{s.role}</p>}
              <p className="text-slate-500 text-sm mt-1 font-mono">{s.time}</p>
              <div className="h-[1px] bg-slate-300 mt-4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>

  </div>
</div>
);}