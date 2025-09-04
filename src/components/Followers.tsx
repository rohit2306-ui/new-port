import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "./firebase";
import { Linkedin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Follower {
  name: string;
  linkedin: string;
}

const Followers: React.FC = () => {
  const [followers, setFollowers] = useState<Follower[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const followersRef = ref(db, "followers");
    const unsubscribe = onValue(followersRef, (snapshot) => {
      const list: Follower[] = [];
      snapshot.forEach((child) => {
        const data = child.val();
        list.push({
          name: data.name || "Anonymous",
          linkedin: data.linkedin || "",
        });
      });
      setFollowers(list);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-20">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 mb-6"
      >
        <ArrowLeft size={20} />
        <span className="font-semibold">Back to Home</span>
      </button>

      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Followers
      </h1>

      <ul className="space-y-3">
        {followers.map((f, i) => (
          <li
            key={i}
            className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
          >
            <span className="text-gray-900 dark:text-white font-medium">
              {f.name}
            </span>

            {f.linkedin && (
              <a
                href={f.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600/80 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md"
              >
                <Linkedin size={18} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Followers;
