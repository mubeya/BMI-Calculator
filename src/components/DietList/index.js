import { useEffect } from "react";
import { useBMI } from "../../context/BMIcontext";
import { Button } from "react-bootstrap";
import styles from "./styles.module.css";

function DietList(props) {
  const {
    bmi,
    // bmiResult,
    //setBmiResult,
    bmiCalc,
    setBmiCalc,
    //resultComment,
    //setResultComment,
    dietList,
    setDietList,
  } = useBMI();

  setBmiCalc(
    Math.round(bmi.weight / ((bmi.height / 100) * (bmi.height / 100)))
  );

  useEffect(() => {
    //setState işlemini useEffect içinde yaparak render sırasında set işlemini daha sağlıklı bir şekilde yapmış olduk aksi halde hata alırdık
    localStorage.setItem("bmiCalc", bmiCalc);
    if (bmiCalc <= 19) {
      setDietList((prevState) => ({
        ...prevState,
        bmiResult: "UNDERWEIGHT",
        resultComment:
          "This may not be good for your health. There are many benefits of being a healthy weight.",
        breakfast:
          "2 egg brown bread sandwich + green chutney + 1 cup milk + 3 cashews + 4 almonds + 2 walnuts ",
        lunch:
          "1 cup arhar dal + 1 cup potato curry + 3 chapatti + 1/2 cup rice + 1/2 cup low fat curd + salad",
        dinner: "1.5 cup chicken curry + 3 chapatti + salad",
      }));
    } else if (bmiCalc <= 25 && bmiCalc > 19) {
      setDietList((prevState) => ({
        ...prevState,
        bmiResult: "NORMAL",
        resultComment:
          "This is generally good for your health. The challenge is to maintain that weight, and not put on weight as you get older..",
        breakfast: "An egg, A slice of whole-grain bread, A banana",
        lunch:
          "A hard-boiled egg, A cup of fresh cottage cheese, 5 saltine crackers",
        dinner:
          "2 hot dogs with no buns, A cup of freshly chopped broccoli, A half-cup of baby carrots",
      }));
    } else if (bmiCalc <= 30 && bmiCalc >= 25) {
      setDietList((prevState) => ({
        ...prevState,
        bmiResult: "OVERWEIGHT",
        resultComment:
          "This may not be good for your health. There are many benefits of moving towards a healthier weight, and even losing a small amount of weight can deliver major health benefits.",
        breakfast: "Scrambled Egg(2) with Broccoli",
        lunch: "Grilled Shrimp n Quinoa (1 cup)",
        dinner: "Chicken Greek Salad (1 serving)",
      }));
    } else if (bmiCalc >= 30) {
      setDietList((prevState) => ({
        ...prevState,
        bmiResult: "OBESITY",
        resultComment:
          "This may not be good for your health. There are many benefits of moving towards a healthy weight and losing even a small amount of weight can bring health benefits. You may also benefit from more supervised guidance; talk with your health professional about how losing weight can improve your health and wellbeing.",
        breakfast: "Milk n Cornflakes (1 cup) + 5-6 Almonds",
        lunch: "Chapatti (2) + Soy bean Curry (1/2 cup)",
        dinner:
          "Chapatti (1) + Fish Curry (1/2 cup) + Salad + Fresh Lime (1/2 cup)",
      }));
    }
  }, [bmiCalc]);

  useEffect(() => {
    localStorage.setItem("date", new Date().toLocaleString() + "");
  }, [bmiCalc]);

  return (
    <div className={styles.formResult}>
      <h5>
        Your BMI is <span style={{ fontSize: 25 }}>{bmiCalc}</span> kg/m² (
        {dietList.bmiResult})
      </h5>
      <br />
      <p style={{ fontSize: 18 }}>{dietList.resultComment}</p>
      <div className={styles.dietList}>
        <h3 style={{ textDecoration: "underline" }}>YOUR DIET LIST</h3>
        <h4>Breakfast</h4>
        <p>{dietList.breakfast}</p>
        <h4>Lunch</h4>
        <p>{dietList.lunch}</p>
        <h4>Dinner</h4>
        <p>{dietList.dinner}</p>
      </div>
      <Button href='/' className={styles.newCalcBtn} variant='light'>
        New Calculation
      </Button>
    </div>
  );
}

export default DietList;
