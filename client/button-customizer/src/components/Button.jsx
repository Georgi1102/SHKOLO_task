import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Buttons() {
  const [buttons, setButtons] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchButtons = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/buttons");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        mapButtons(data["button"]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchButtons();
  }, []);

  function mapButtons(buttonsData) {
    // map buttons data to include title, color, and link
    const buttonDetails = buttonsData.map((button) => ({
      title: button.title,
      color: button.color,
      link: button.link,
    }));
    setButtons(buttonDetails);
  }

  const handleSettingsClick = (button) => {
    navigate("/settings", { state: button });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="grid grid-cols-3 gap-4">
        {buttons.map((button, index) => (
          <div
            key={index}
            className="relative bg-white p-4 rounded-lg shadow-md flex items-center justify-center"
          >
            <a
              href={button.link}
              className={`w-full h-24 flex items-center justify-center`}
              target="_blank"
              rel="noopener noreferrer"
              //can't implement tailwind dynamicly !!!
              style={{ backgroundColor: button.color }}
            >
              <button className="text-white font-bold text-lg ">
                {button.title}
              </button>
            </a>
            <button
              onClick={() => handleSettingsClick(button)}
              className="absolute top-2 right-2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
