import TextareaAutosize from "react-textarea-autosize";
import { useEffect, useState } from "react";

const IdeaTile = ({ emitUpdateIdea, emitDeleteIdea, idea }) => {
  const [characterWarning, setCharacterWarning] = useState();
  const [formattedDate, setFormattedDate] = useState();
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

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

  const handleDeleteIdea = () => {
    emitDeleteIdea(idea.id);
  };

  const renderDeleteButton = () => {
    if (deleteConfirmation) {
      return (
        <div className="ml-auto text-[8px] text-gray-800">
          Are you sure?&nbsp;
          <button
            type="button"
            onClick={handleDeleteIdea}
            className="text-red-600 hover:text-red-700 text-xs"
          >
            Yes
          </button>
          <span className="text-xs">&nbsp;/&nbsp;</span>
          <button
            type="button"
            className="text-red-600 hover:text-red-700 text-xs"
            onClick={() => setDeleteConfirmation(false)}
          >
            No
          </button>
        </div>
      );
    }
    return (
      <button
        type="button"
        onClick={() => setDeleteConfirmation(true)}
        className="text-red-600 hover:text-red-700 text-xs ml-auto"
      >
        Delete
      </button>
    );
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
        {renderDeleteButton()}
      </div>
    </div>
  );
};

export default IdeaTile;
