import { createContext, useContext, useState, useEffect } from "react";

const BMIContext = createContext();

export const BMIProvider = ({ children }) => {
  //girilen kilo ve boy
  const [bmi, setBmi] = useState({
    weight: "",
    height: "",
  });

  const [bmiCalc, setBmiCalc] = useState(); //bmi sonucu değer olarak
  const [dietList, setDietList] = useState({bmiResult:"", resultComment:"", breakfast:"",lunch:"",dinner:""}); //diet list result

  useEffect(() => {
    localStorage.setItem("bmi", JSON.stringify(bmi)); //value object olduğu için Json ile stringfy yaptık
  }, [bmi]);

  const values = {
    bmi,
    setBmi,
    bmiCalc,
    setBmiCalc,
    dietList,
    setDietList
  };

  return <BMIContext.Provider value={values}>{children}</BMIContext.Provider>;
};

export const useBMI = () => useContext(BMIContext);
