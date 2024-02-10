import { useState } from "react";
import Card from "../components/Card";
import FileUpload from "../components/FileUpload";
import Heading from "../components/Heading";
import MultiInputBox from "../components/MultiInputBox";
import SubHeading from "../components/SubHeading";
import Retrieve from "../components/Retrieve";

function Project() {
  const [inputs, setInputs] = useState([""]);
  return (
    <div>
      <Card>
        <Heading label={"Upload the Matrix"} />
        <SubHeading label={"(in .txt format)"} />
        <FileUpload />
      </Card>
      <Card>
        <Heading label={"Add Request Parameter(s)"} />
        <MultiInputBox inputs={inputs} setInputs={setInputs} />
      </Card>
      <Card>
        <Heading label={"Retrieve the traversal"} />
        <SubHeading label={"(Click the button to get)"} />
        <Retrieve inputs={inputs} />
      </Card>
    </div>
  );
}

export default Project;
