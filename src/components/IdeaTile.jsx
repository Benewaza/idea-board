import TextareaAutosize from "react-textarea-autosize";
import { useEffect, useState } from "react";

const IdeaTile = ({ emitUpdateIdea, emitDeleteIdea, idea }) => {
  const [characterWarning, setCharacterWarning] = useState();
  const [formattedDate, setFormattedDate] = useState();

  // format date  for last saved / created, re-run everytime an idea is updated
  useEffect(() => {
    const date = new Date(idea.dateSaved);
    setFormattedDate(
      `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    );
  }, [idea.dateSaved]);

  const handleUpdateIdeaTitle = (event) => {
    emitUpdateIdea(event, idea);
  };

  const handleUpdateIdeaDescription = (event) => {
    emitUpdateIdea(event, idea);
    setCharacterWarning(null);
  };

  const handleUpdateCharacterWarning = (event) => {
    setCharacterWarning(event.target.value.length);
  };

  return (
    <div className="border-[3px] border-black p-2 w-64 h-60 font-semibold bg-yellow-200 relative mx-auto sm:mx-0 flex flex-col">
      <TextareaAutosize
        onBlur={handleUpdateIdeaTitle}
        className="resize-none bg-yellow-200 w-full"
        defaultValue={idea.title}
        name="title"
        maxLength={24}
      />

      <TextareaAutosize
        onBlur={handleUpdateIdeaDescription}
        className="resize-none bg-yellow-200 w-full text-sm overflow-scroll flex-grow"
        defaultValue={idea.description}
        name="description"
        onChange={handleUpdateCharacterWarning}
        onFocus={handleUpdateCharacterWarning}
        maxLength={140}
      />

      <div className="flex items-center">
        <div className="text-[8px] text-gray-800">
          {idea.dateSaved === idea.dateCreated ? "Created:" : "Saved:"}
          {formattedDate}
        </div>
        {characterWarning > 125 && (
          <div className="text-[8px] ml-1 text-red-600">
            {characterWarning} / 140
          </div>
        )}
        <button
          type="button"
          onClick={() => emitDeleteIdea(idea.id)}
          className="text-red-600 hover:text-red-700 text-xs ml-auto"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default IdeaTile;
