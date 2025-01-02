import React, { useState, useEffect } from "react";

export default function Button() {
  const [buttons, setButtons] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchButtons = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/buttons");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        mapButtons(data["button"]); // Assuming data.button is the array of button entities
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
      color: `bg-${button.color}-500 hover:bg-${button.color}-600`,
      link: button.link,
    }));
    setButtons(buttonDetails);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-4">
          {buttons.map((button, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center"
            >
              <a
                href={button.link}
                className={`w-full h-24 flex items-center justify-center ${button.color}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-white font-bold text-lg ">
                  {button.title}
                </button>
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
