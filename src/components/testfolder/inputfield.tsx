import React from "react";

interface Props {
  name?: string;
}

const InputTest: React.FC<Props> = ({ name }) => {
  return <div>Hello {name}</div>;
};

export default InputTest;

// Watch will check for changes before the commit after commit you have to run it again.

// two options ther are only to run only that test.only()
// skip the test by adding test.skip()
