import "./form.scss";
// import Navbar from "../../components/navbar/Navbar";
// import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import { useState } from "react";
import useCommonForm from "../../lib/CustomHooks";

const Form = ({ title }) => {
  const [file, setFile] = useState("");
  const { inputFields, handleFormChange, handleFormSubmit } = useCommonForm();

  return (
    <div className="new form">
      <div className="newContainer">
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
            <form onSubmit={handleFormSubmit} className="commonForm">
              {inputFields.map((form, index) => {
                return (
                  <div key={index} className="formInputs">
                    <div className="formInput fileUpload">
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
                      <label htmlFor="titleinput">Title</label>
                      <input
                        name="userTitle"
                        type="text"
                        className="textInput"
                        placeholder="EnterTitle"
                        value={form.userTitle}
                        id="titleinput"
                        onChange={(event) => handleFormChange(event, index)}
                      />
                    </div>

                    <div className="formInput">
                      <label htmlFor="textareainput">Desc</label>
                      <textarea
                        name="textAreaEditor"
                        className="textArea"
                        value={form.textAreaEditor}
                        placeholder="Type the desc"
                        id="textareainput"
                        onChange={(event) => handleFormChange(event, index)}
                      />
                    </div>

                    <div className="formInput">
                      <label htmlFor=""></label>
                      <select
                        name="library"
                        className="selecLibrary"
                        value={form.library}
                        onChange={(event) => handleFormChange(event, index)}
                      >
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                      </select>
                    </div>

                    <div className="formInput checkbox-input">
                      <label htmlFor="agree-t&c">Agree with T&C</label>
                      <input
                        type="checkbox"
                        name="isChecked"
                        checked={form.isChecked}
                        id="agree-t&c"
                        onChange={(event) => handleFormChange(event, index)}
                      />
                    </div>

                    <div className="formInput radio-input">
                      <input
                        className="radio-btn"
                        type="radio"
                        value="male"
                        id="male"
                        onChange={(event) => handleFormChange(event, index)}
                        name="gender"
                      />
                      <label htmlFor="male">Male</label>

                      <input
                        className="radio-btn"
                        type="radio"
                        value="female"
                        id="female"
                        onChange={(event) => handleFormChange(event, index)}
                        name="gender"
                      />
                      <label htmlFor="female">Female</label>
                    </div>
                    <input
                      type="submit"
                      className="submitBtn"
                      value="Submit"
                      onClick={handleFormSubmit}
                    />
                  </div>
                );
              })}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
