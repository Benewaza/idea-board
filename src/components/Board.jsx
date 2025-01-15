import { useState } from "react";
import Modal from "./Modal";
import IdeaTile from "./IdeaTile";
import BoardControls from "./BoardControls";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getFromLocalStorage, saveToLocalStorage } from "../localStorageUtils";

const Board = () => {
  const [modalVisible, setModalVisible] = useState(false);

  // get ideas from local storage else set ideas to empty array
  const [ideas, setIdeas] = useState(() => getFromLocalStorage("ideas", []));

  // create new idea object
  function Idea(title, description) {
    (this.title = title),
      (this.description = description),
      (this.dateCreated = new Date().toISOString()),
      (this.dateSaved = new Date().toISOString()),
      (this.id = `id-${Math.random().toString(36).substring(2, 9)}`); //random id
  }

  const addIdea = (data) => {
    const idea = new Idea(data.title, data.description);
    let updatedIdeas = [...ideas, idea];
    updateIdeasStateStorage(updatedIdeas);
  };

  const updateIdea = (event, currentIdea) => {
    const newVal = event.target.value;
    const fieldUpdated = event.target.name;

    // We only want to update idea in storage if it has actually been changed and not just clicked into
    if (currentIdea[fieldUpdated] !== newVal) {
      const updatedIdeas = ideas.map((idea) =>
        currentIdea.id === idea.id
          ? {
              ...idea,
              [fieldUpdated]: newVal,
              dateSaved: new Date().toISOString(),
            }
          : idea
      );
      updateIdeasStateStorage(updatedIdeas);
      toast.success("Idea updated!");
    }
  };

  const deleteIdea = (id) => {
    const updatedIdeas = ideas.filter((idea) => {
      return id !== idea.id;
    });
    updateIdeasStateStorage(updatedIdeas);
  };

  const sortItems = (sortValue) => {
    setIdeas((prevState) => {
      // ...spread array so that it creates new array which react recognises then return sorted array
      return [...prevState].sort(
        (a, b) =>
          sortValue === "creation"
            ? new Date(a.dateCreated) - new Date(b.dateCreated) // sort ideas based on created date iso string
            : a.title.localeCompare(b.title) // sort alphabetically using title
      );
    });
  };

  const updateIdeasStateStorage = (ideas) => {
    setIdeas(ideas);
    saveToLocalStorage("ideas", ideas);
  };

  return (
    <>
      {modalVisible && (
        <Modal
          addIdeaSubmit={addIdea}
          closeModal={() => setModalVisible(false)}
        />
      )}
      <section className="grow px-8">
        <BoardControls
          emitSortItems={sortItems}
          emitModalVisibility={setModalVisible}
        />
        <div className="flex gap-4 flex-wrap">
          {ideas.map((idea) => (
            <IdeaTile
              key={idea.id}
              emitUpdateIdea={updateIdea}
              emitDeleteIdea={deleteIdea}
              idea={idea}
            />
          ))}
        </div>
      </section>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default Board;
