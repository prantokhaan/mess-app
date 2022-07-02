import React from "react";

const useMember = () => {
  const [member, setMember] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/prantokhaan/messData/main/output.json"
    )
      .then((res) => res.json())
      .then((data) => setMember(data));
  }, []);
  return [member, setMember];
};

export default useMember;
