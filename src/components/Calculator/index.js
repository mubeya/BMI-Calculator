import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useBMI } from "../../context/BMIcontext";
import styles from "./styles.module.css";

function Calculator(props) {
  const { bmi, setBmi } = useBMI();

  const onChange = (e) => {
    e.preventDefault();
    setBmi({ ...bmi, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Form className={styles.formCalc}>
        <Form.Text className={styles.formText}>
          Please enter the information below to calculate the body mass index.
        </Form.Text>
        <Form.Group className='mb-3'>
          <Form.Control
            name='weight'
            type='text'
            placeholder='Your weight (kg)'
            value={bmi.weight}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control
            name='height'
            type='text'
            placeholder='Your height (cm)'
            value={bmi.height}
            onChange={onChange}
          />
        </Form.Group>
        <Button
          type='submit'
          variant='light'
          onClick={props.dietList}  //Button onclick olduğunda DietList componentini açıyoruz
          className={styles.formBtn}>
          BMI Calculate
        </Button>
      </Form>
      <p className={styles.pText}>
        BMI is a measurement of a person's leanness or corpulence based on their
        height and weight, and is intended to quantify tissue mass. It is widely
        used as a general indicator of whether a person has a healthy body
        weight for their height.
      </p>
    </div>
  );
}

export default Calculator;
