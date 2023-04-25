
const Form = ({ title }) => {
    const [file, setFile] = useState("");
    const [userTitle, setuserTitle] = useState("");
    const [textAreaEditor, setTextAreaEditor] = useState("");
    const [library, setLibrary] = useState("React");
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
      // URL.createObjectURL(file)
      console.log(
        "File name: " + file.name + "\n",
        "File URL: " + URL.createObjectURL(file) + "\n",
        "Usr title: " + userTitle + "\n",
        "textArea:: " + textAreaEditor + "\n",
        "Library used: " + library + "\n",
        "Checkbox Status: " + isChecked + "\n",
        "Gender: " + gender + "\n"
      );
    };