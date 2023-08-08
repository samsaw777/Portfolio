import React from "react";

interface Props {
  name?: string;
}

const InputTest: React.FC<Props> = ({ name }) => {
  return <div>Hello {name}</div>;
};

export default InputTest;
