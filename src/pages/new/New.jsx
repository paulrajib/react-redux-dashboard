import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./new.scss";

const New = (inputs, title) => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor="file">
                  Image:
                  <DriveFolderUploadOutlinedIcon className="uploadIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>

              {/* {console.log(inputs.inputs)} */}
              {/* {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label htmlFor="">{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))} */}

              <div className="formInput">
                <label htmlFor="">Username</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="formInput">
                <label htmlFor="">Name and surname</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="formInput">
                <label htmlFor="">Email</label>
                <input type="email" placeholder="john_doe@example.com" />
              </div>
              <div className="formInput">
                <label htmlFor="">Phone</label>
                <input type="text" placeholder="+1 234 567 89" />
              </div>
              <div className="formInput">
                <label htmlFor="">Password</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label htmlFor="">Address</label>
                <input type="text" placeholder="Elton St. 216 NewYork" />
              </div>
              <div className="formInput">
                <label htmlFor="">Country</label>
                <input type="text" placeholder="USA" />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
