import "./form.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import { useRef, useState } from "react";

const Form = ({ title }) => {
  const [file, setFile] = useState("");
  const [userTitle, setuserTitle] = useState("Title");
  const [textAreaEditor, setTextAreaEditor] = useState("Type the desc here");
  const [library, setLibrary] = useState("Select a library");
  const [isChecked, setIsChecked] = useState(false);
  const [gender, setGender] = useState("");

  const inputchangehandler = (event) => {
    if (event.target.name === "title") {
      setuserTitle(event.target.value);
    } else if (event.target.name === "textarea") {
      setTextAreaEditor(event.target.value);
    } else if (event.target.name === "selectlibrary") {
      setLibrary(event.target.value);
    } else if (event.target.name === "checkbox1") {
      //setIsChecked(event.target.checked);
      setIsChecked(!isChecked);
      //console.log(!isChecked);
    } else if (event.target.type === "radio") {
      setGender(event.target.value);
    } else {
      console.log(event.target.value);
    }
    //console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(userTitle, textAreaEditor, library, isChecked, gender);
  };

  return (
    <div className="new form">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <div>
              <form onSubmit={submitHandler}>
                <div className="formInput">
                  <label htmlFor="file">
                    Image:
                    <DriveFolderUploadOutlinedIcon className="uploadIcon" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div>

                <div className="formInput">
                  <label htmlFor="titleinput"></label>
                  <input
                    name="title"
                    type="text"
                    className="textInput"
                    placeholder="EnterTitle"
                    value={userTitle}
                    id="titleinput"
                    onChange={inputchangehandler}
                  />
                </div>

                <div className="formInput">
                  <label htmlFor="textareainput"></label>
                  <textarea
                    name="textarea"
                    className="textArea"
                    value={textAreaEditor}
                    id="textareainput"
                    onChange={inputchangehandler}
                  />
                </div>

                <div className="formInput">
                  <label htmlFor=""></label>
                  <select
                    name="selectlibrary"
                    value={library}
                    onChange={inputchangehandler}
                  >
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                  </select>
                </div>

                <div className="formInput checkbox-input">
                  <label htmlFor="agree-t&c">Agree with T&C</label>
                  <input
                    type="checkbox"
                    name="checkbox1"
                    checked={isChecked}
                    id="agree-t&c"
                    onChange={inputchangehandler}
                  />
                </div>

                <div className="formInput radio-input">
                  <input
                    className="radio-btn"
                    type="radio"
                    value="male"
                    id="male"
                    onChange={inputchangehandler}
                    name="gender"
                  />
                  <label htmlFor="male">Male</label>

                  <input
                    className="radio-btn"
                    type="radio"
                    value="female"
                    id="female"
                    onChange={inputchangehandler}
                    name="gender"
                  />
                  <label htmlFor="female">Female</label>
                </div>

                <input type="submit" className="submitBtn" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
