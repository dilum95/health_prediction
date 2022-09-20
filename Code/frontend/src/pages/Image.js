import React, { useState } from "react";
import { Button, Form } from "react-form-elements";
import {Link,useParams,useNavigate} from "react-router-dom";

function EditProfile() {
  const [fileData, setFileData] = useState("");

  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };

  const onSubmitHandler = () => {
    if (
      (fileData && fileData.type === "image/png") ||
      fileData.type === "image/jpeg" ||
      fileData.type === "image/jpg"
    ) {

      const data = new FormData();
      data.append("ProfilePicture", fileData);
      // const {id} = useParams();
      fetch(
        `http://localhost:5001/upload/631f84372024141e981fd185`,
        {
          method: "PATCH",
          body: data,
        }
      )
        .then((result) => {
          console.log("File Sent Successful");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };


  return (
    <div>
      <Form onSubmit={ onSubmitHandler } name="edit profile form">
        <input type="file" onChange={fileChangeHandler} />
        <Button type="submit" className="profile-order-button">
          Save Changes
        </Button>
       </Form>
    </div>
  );
}

export default EditProfile;