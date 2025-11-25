"use client";

import { motion } from "framer-motion";
import { Instagram, Globe, Mail, Phone } from "lucide-react";

const contacts = [
  {
    id: 1,
    name: "Instagram",
    icon: <Instagram className="w-7 h-7" />,
    link: "https://instagram.com/username",
  },
  {
    id: 2,
    name: "Website",
    icon: <Globe className="w-7 h-7" />,
    link: "https://centraenergioptima.com",
  },
  {
    id: 3,
    name: "Email",
    icon: <Mail className="w-7 h-7" />,
    link: "info@centraenergioptima.com",
  },
  {
    id: 4,
    name: "Telepon",
    icon: <Phone className="w-7 h-7" />,
    link: "wa.me/6287874065078",
  },
];

export default function Contact() {
  return (
    <section className="w-full min-h-screen bg-white pt-24 pb-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center pt-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-10 bg-gradient-to-r from-yellow-500 to-amber-600 text-transparent bg-clip-text"
        >
          Contact Us
        </motion.h2>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.id}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-3 py-10 rounded-2xl bg-white border border-yellow-500/30 shadow-md hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-yellow-500 group-hover:text-amber-500 transition"
                whileHover={{ rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                {contact.icon}
              </motion.div>
              <span className="text-lg font-semibold text-gray-800">
                {contact.name}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full h-96 rounded-2xl overflow-hidden border border-yellow-500/30 shadow-[0_0_20px_rgba(255,215,0,0.15)]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.448146617527!2d106.85824691038604!3d-6.591087193375086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c700094ca52b%3A0x104a2fb1e2045c71!2sGRAHA%20CEO!5e0!3m2!1sen!2sid!4v1764003978233!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>

      {/* Gold shimmer effect */}
      <div className="absolute top-20 right-1/2 translate-x-1/2 w-[400px] h-[400px] bg-gradient-radial from-yellow-300/20 to-transparent blur-3xl"></div>
    </section>
  );
}
