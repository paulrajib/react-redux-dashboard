
import { useState } from "react";

const useCommonForm = () => {

    const [inputFields, setInputFields] = useState([
      {
        userTitle: "",
        textAreaEditor: "",
        library: "React",
        isChecked: false,
        gender: "",
      },
    ]);


    const handleFormChange = (event, index) => {
        let data = [...inputFields];
        if (event.target.name === "isChecked") {
            data[index][event.target.name] = event.target.checked;
        } else {
            data[index][event.target.name] = event.target.value;
        }
        setInputFields(data);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // console.log(inputFields);
        // or each one 
        console.log(inputFields[0]['gender']);
    };

    return {
        handleFormSubmit,
        handleFormChange,
        inputFields
    };



}


export default useCommonForm;