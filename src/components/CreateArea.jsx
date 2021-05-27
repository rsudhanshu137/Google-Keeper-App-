import React, { useState } from "react";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function expansion() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {expand === true ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}

        <textarea
          name="content"
          onClick={expansion}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={expand === true ? 3 : 1}
        />
        <Zoom in={expand === true ? true : false}>
          <Fab onClick={submitNote}>
            <AddBoxIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
