import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Settings() {
  const location = useLocation(); 
  const navigate = useNavigate(); 

  //if there is no data is passed
  useEffect(() => {
    if (!location.state) {
      navigate("/");
    }
  }, [location.state, navigate]);

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [color, setColor] = useState("");

  // pre-fill form with the passed button data
  useEffect(() => {
    if (location.state) {
      const { title, link, color } = location.state;
      setTitle(title);
      setLink(link);
      setColor(color);
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Settings submitted:", { title, link, color });
  };

  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Edit Button Settings</h2>
          <p className="mb-6 text-gray-600">Customize your SHKOLO dashboard</p>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="link"
                  className="block text-sm font-medium text-gray-700"
                >
                  Link
                </label>
                <input
                  id="link"
                  type="url"
                  placeholder="Enter link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="color"
                  className="block text-sm font-medium text-gray-700"
                >
                  Color
                </label>
                <select
                  id="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select a color</option>
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                  <option value="yellow">Yellow</option>
                  <option value="purple">Purple</option>
                  <option value="pink">Pink</option>
                  <option value="indigo">Indigo</option>
                  <option value="orange">Orange</option>
                  <option value="teal">Teal</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md"
              >
                Save Settings
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}
