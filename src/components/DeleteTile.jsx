import { useState } from "react";
const DeleteTile = ({ emitDeleteIdea }) => {
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  const handleDeleteIdea = () => emitDeleteIdea();

  const renderDeleteButton = () => {
    // Display yes / no confirmation if delete has been selected by user
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
    // by default display only delete cta
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
  return renderDeleteButton();
};

export default DeleteTile;
