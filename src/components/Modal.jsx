import { useState } from "react";

const Modal = ({ addIdeaSubmit, closeModal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState();
  const [characterWarning, setCharacterWarning] = useState(0);

  const submitForm = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      setError("Please fill in all fields.");
    } else {
      addIdeaSubmit({ title, description });
      closeModal();
    }
  };

  return (
    <div className="bg-black absolute w-full h-full flex top-0 left-0 bg-opacity-60 items-center justify-center z-10">
      <div className="border-4 p-6 bg-gray-200 border-black font-bold text-sm w-[600px] -mt-40">
        <form onSubmit={submitForm}>
          <div className="mb-4">
            <label className="block text-lg font-bold mb-2" htmlFor="title">
              Idea Title
            </label>
            <input
              className="border-2 border-black rounded w-full py-3 px-2 text-gray-700 focus:bg-yellow-50 focus:outline-none"
              id="title"
              type="text"
              placeholder="What is your fantastic idea?"
              onBlur={(e) => setTitle(e.target.value)}
              autoFocus
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-lg font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="border-2 border-black rounded w-full py-3 px-2 text-gray-700 focus:bg-yellow-50 focus:outline-none resize-none"
              id="description"
              type="text"
              placeholder="Tell me more about it..."
              onBlur={(e) => setDescription(e.target.value)}
              onChange={(e) => setCharacterWarning(e.target.value.length)}
              maxLength={140}
              rows={3}
            />
            <span className="text-xs ml-2">{characterWarning} / 140</span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <button
                type="submit"
                className="border-2 px-4 py-3 bg-pink-600 hover:bg-pink-800 text-white border-black font-bold text-sm mr-2"
              >
                Submit new idea
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="border-2 px-4 py-3 bg-gray-200 hover:bg-gray-300 border-black font-bold text-sm"
              >
                Cancel
              </button>
            </div>
            {error && <div className="text-red-600">{error}</div>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
