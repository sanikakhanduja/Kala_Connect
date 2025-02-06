import React, { useEffect } from "react";
import { motion } from "framer-motion";

const KnowYourArtisans = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Rouge+Script&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const artisans = [
    {
      name: "Sita Devi",
      image: "sitadevi.png",
      description:
        "A legend in Madhubani art, Sita Devi’s vibrant paintings feature mythology and nature. Her contributions earned her the prestigious Padma Shri award in 1981.",
    },
    {
      name: "Nagma",
      image: "/nagma.png",
      description:
        "After losing her husband, Nagma turned her embroidery skills into a livelihood. She now showcases her work globally through Asha Handicrafts.",
    },
    {
      name: "Jameela Begum",
      image: "/jameela.png",
      description:
        "A Kalamkari revivalist from Andhra Pradesh, Jameela Begum has trained 200+ women, ensuring financial independence while preserving traditional art.",
    },
    {
      name: "Anju Bai",
      image: "/anju.png",
      description:
        "A pioneer in Rajasthan’s blue pottery, Anju Bai overcame barriers to establish her own workshop, exporting handcrafted pieces worldwide.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F0E3] via-[#A7C7D7] to-[#F1C6AC] py-10">
      {/* Title Section */}
      <div className="text-center mb-12">
        <motion.h1
          className="text-9xl font-bold text-[#3e2a47] mb-4 font-['Rouge_Script']"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Know Your Artisans
        </motion.h1>
        <motion.p
          className="text-4xl text-[#4b2f3c] max-w-3xl mx-auto leading-relaxed font-['Rouge_Script']"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Step into the world of craftsmanship and discover the heartfelt stories
          behind every masterpiece. Each artisan's journey is a testament to passion
          and resilience.
        </motion.p>
      </div>

      {/* Artisans Section */}
      <div className="space-y-16">
        {artisans.map((artisan, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center bg-[#F7EDE1] rounded-3xl shadow-2xl overflow-hidden mx-4 md:mx-20 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.3, duration: 0.7 }}
          >
            <img
              src={artisan.image}
              alt={artisan.name}
              className="md:w-1/2 w-full h-[400px] object-cover transition-transform transform hover:scale-105"
            />
            <div className="md:w-1/2 p-10 text-center md:text-left">
              <h2 className="text-8xl font-bold text-[#3e2a47] mb-4 font-['Rouge_Script']">
                {artisan.name}
              </h2>
              <p className="text-3xl text-[#4b2f3c] leading-relaxed font-[open sans]">
                {artisan.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default KnowYourArtisans;