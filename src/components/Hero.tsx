import React, { useEffect, useState } from "react";
import {
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  UserPlus,
  X,
} from "lucide-react";
import { ref, set, push, onValue } from "firebase/database";
import { db } from "./firebase";
import { useNavigate } from "react-router-dom";
import rohit from "./rohit.jpg.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Hero: React.FC = () => {
  const [followers, setFollowers] = useState<number>(0);
  const [showForm, setShowForm] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [name, setName] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [message, setMessage] = useState<string>("");
  const [allMessages, setAllMessages] = useState<string[]>([]);
  const navigate = useNavigate();

  // ✅ Init AOS
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
  }, []);

  // ✅ Fetch follower count
  useEffect(() => {
    const followersRef = ref(db, "followers");
    return onValue(followersRef, (snapshot) => {
      if (snapshot.exists()) setFollowers(snapshot.size);
      else setFollowers(0);
    });
  }, []);

  // ✅ Handle Follow
  const handleFollow = async () => {
    if (!name && !linkedin) return; // atleast something
    const followersRef = ref(db, "followers");
    const newFollowerRef = push(followersRef);

    await set(newFollowerRef, {
      name: name || "Anonymous",
      linkedin: linkedin || "",
      createdAt: Date.now(),
    });

    setShowForm(false);
    setName("");
    setLinkedin("");
  };

  // ✅ Real-time Messages
  useEffect(() => {
    const messagesRef = ref(db, "messages");
    return onValue(messagesRef, (snapshot) => {
      const msgs: string[] = [];
      snapshot.forEach((child) => {
        const data = child.val();
        if (data && data.text) msgs.push(data.text);
      });
      setAllMessages(msgs.reverse()); // latest first
    });
  }, []);

  // ✅ Send Message
  const handleSend = async () => {
    if (!message.trim()) return;
    const messagesRef = ref(db, "messages");
    const newMsgRef = push(messagesRef);

    await set(newMsgRef, {
      text: message,
      createdAt: Date.now(),
    });

    setMessage("");
  };

  // ✅ Smooth scroll
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br 
                 from-blue-50 via-indigo-50 to-purple-50 
                 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Profile */}
        <div className="mb-8" data-aos="zoom-in">
          <div className="w-48 h-48 mx-auto rounded-full 
                          bg-gradient-to-br from-blue-400 to-indigo-600 p-1 shadow-2xl">
            <img
              src={rohit}
              alt="Rohit Dhakre"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Follow + Count */}
        <div
          className="flex flex-row flex-wrap items-center gap-4 px-4 justify-center"
          data-aos="fade-up"
        >
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white 
                       px-4 py-2 rounded-full font-medium transition-all duration-300 shadow-lg 
                       text-sm sm:px-6 sm:py-3 sm:font-semibold sm:text-base hover:scale-105"
          >
            <UserPlus size={18} />
            Connect with Rohit
          </button>

          <div
            onClick={() => navigate("/followers")}
            className="mt-2 sm:mt-4 font-semibold text-blue-600 dark:text-blue-400 
                       cursor-pointer underline text-sm sm:text-base hover:text-blue-800"
          >
            See all connections: {followers}
          </div>
        </div>

        {/* Hero Text */}
        <div className="space-y-6 mt-10" data-aos="fade-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
            Rohit Thakur
          </h1>
          <p
            className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-light"
            data-aos="fade-right"
          >
            Full Stack Developer | Research Enthusiast | Innovator
          </p>
          <p
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-left"
          >
            Exploring the edge of development and innovation. I build
            intelligent apps, impactful research, and future-ready systems.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          data-aos="flip-up"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="group flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 
                       text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all 
                       hover:scale-105"
          >
            <span>View My Work</span>
            <ChevronRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center space-x-2 border-2 border-gray-300 dark:border-gray-600 
                       text-gray-700 dark:text-gray-300 hover:border-blue-600 hover:text-blue-600 
                       px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
          >
            <Mail size={20} />
            <span>Get In Touch</span>
          </button>
        </div>

        {/* Socials */}
        <div
          className="mt-12 flex items-center justify-center space-x-6"
          data-aos="zoom-in-up"
        >
          <a
            href="https://github.com/rohit2306-ui"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 
                       hover:text-blue-600 shadow-lg hover:scale-110 transition-all"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/rohit-thakur-0853b0335/"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 
                       hover:text-blue-600 shadow-lg hover:scale-110 transition-all"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:rohit.rdhak1237@gmail.com"
            className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 
                       hover:text-blue-600 shadow-lg hover:scale-110 transition-all"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Message Input */}
        <div className="mt-16" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Drop a Message for Rohit 
          </h3>
          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border px-4 py-2 rounded-lg w-72 dark:bg-gray-800 dark:text-white"
            />
            <button
              onClick={handleSend}
              className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
            >
              Send
            </button>
          </div>

          <div className="mt-4">
            <button
              onClick={() => setShowMessages(true)}
              className="px-6 py-2 bg-blue-200 dark:bg-blue-300 rounded-lg font-semibold hover:bg-blue-400 transition-all"
            >
              See all messages →
            </button>
          </div>
        </div>
      </div>

      {/* 🔥 Sliding Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-500 z-50 ${
          showMessages ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
            Connections Messages
          </h4>
          <button
            onClick={() => setShowMessages(false)}
            className="text-gray-600 dark:text-gray-300 hover:text-red-500"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-4 overflow-y-auto h-[calc(100%-60px)] space-y-3">
          {allMessages.length > 0 ? (
            allMessages.map((msg, i) => (
              <div
                key={i}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
                data-aos="fade-left"
              >
                {msg}
              </div>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400">
              No messages yet 🚀
            </p>
          )}
        </div>
      </div>

      {/* 🔹 Follower Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl max-w-md w-full"
            data-aos="zoom-in"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Become a connection
            </h3>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-4 py-2 mb-3 rounded-lg dark:bg-gray-800 dark:text-white"
            />
            <input
              type="text"
              placeholder="LinkedIn Profile (optional)"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              className="w-full border px-4 py-2 mb-3 rounded-lg dark:bg-gray-800 dark:text-white"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleFollow}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
