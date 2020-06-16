import React from "react";

const Form = (props) => {
  return (
    <div>
      <form className="meme-form" onSubmit={props.handleSubmit}>
        <input
          name="topText"
          type="text"
          placeholder="Write the top text here"
          onChange={props.handleChange}
          value={props.topText}
        />
        <input
          name="bottomText"
          type="text"
          placeholder="Write the bottom text here"
          onChange={props.handleChange}
          value={props.bottomText}
        />
        <button>Generate</button>
      </form>
      <div className="meme">
        <img src={props.randomImg} alt="Your meme" />
        <h2 className="top">{props.topText}</h2>
        <h2 className="bottom">{props.bottomText}</h2>
      </div>
    </div>
  );
};

export default Form;
