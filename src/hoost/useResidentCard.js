import axios from "axios";
import React, { useEffect, useState } from "react";

const useResidentCard = (url) => {
  const [resident, setResident] = useState();
  const getResident = () => {
    axios
      .get(url)
      .then((res) => setResident(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getResident();
  }, []);
  return resident;
};

export default useResidentCard;
