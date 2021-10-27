import styles from "./styles.module.css";
import { Table } from "react-bootstrap";

function About() {
  return (
    <div className={styles.about}>
      <h1>What is BMI?</h1>
      <p>
        The Body Mass Index (BMI) Calculator can be used to calculate BMI value
        and corresponding weight status while taking age into consideration. Use
        the "Metric Units" tab for the International System of Units or the
        "Other Units" tab to convert units into either US or metric units. Note
        that the calculator also computes the Ponderal Index in addition to BMI,
        both of which are discussed below in detail.
      </p>
      <br />
      <h2> BMI formula</h2>
      <p>
        Below are the equations used for calculating BMI in the International
        System of Units (SI) and the US customary system (USC) using a 5'10",
        160-pound individual as an example:
        <br />
        <b>
          USC Units: BMI = 703 × mass (lbs) / height ² (in)) = 703 × (160 / 70
          ²) = 22.96 kg m²
        </b>
        <br />
        <b>
          Metric Units: BMI = mass (kg) / height ² (m) = 72.57 / 1.78 ² = 22.90
          kg m²
        </b>
      </p>
      <br />
      <h2> BMI introduction</h2>
      <p>
        BMI is a measurement of a person's leanness or corpulence based on their
        height and weight, and is intended to quantify tissue mass. It is widely
        used as a general indicator of whether a person has a healthy body
        weight for their height. Specifically, the value obtained from the
        calculation of BMI is used to categorize whether a person is
        underweight, normal weight, overweight, or obese depending on what range
        the value falls between. These ranges of BMI vary based on factors such
        as region and age, and are sometimes further divided into subcategories
        such as severely underweight or very severely obese. Being overweight or
        underweight can have significant health effects, so while BMI is an
        imperfect measure of healthy body weight, it is a useful indicator of
        whether any additional testing or action is required. Refer to the table
        below to see the different categories based on BMI that are used by the
        calculator.
      </p>
      <br />
      <h3>BMI table for adults</h3>
      <p>
        This is the World Health Organization's (WHO) recommended body weight
        based on BMI values for adults. It is used for both men and women, age
        18 or older.
      </p>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Category</th>
            <th>BMI range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Severe Thinness</td>
            <td>smaller than 16</td>
          </tr>
          <tr>
            <td>Moderate Thinness </td>
            <td>between 16 - 17</td>
          </tr>
          <tr>
            <td>Mild Thinnes</td>
            <td>between 17 - 19</td>
          </tr>
          <tr>
            <td>Normal</td>
            <td>between 19 - 25</td>
          </tr>
          <tr>
            <td>Overweight</td>
            <td>between 25 - 30</td>
          </tr>
          <tr>
            <td>Obese Class I</td>
            <td>between 30 - 35</td>
          </tr>
          <tr>
            <td>Obese Class II</td>
            <td>between 35 - 40</td>
          </tr>
          <tr>
            <td>Obese Class III</td>
            <td>greater than 40</td>
          </tr>
        </tbody>
      </Table>
      <br />
      <h3>Risks associated with being overweight</h3>
      <p>
        Being overweight increases the risk of a number of serious diseases and
        health conditions. Below is a list of said risks, according to the
        Centers for Disease Control and Prevention (CDC): High blood pressure
        Higher levels of LDL cholesterol, which is widely considered "bad
        cholesterol," lower levels of HDL cholesterol, considered to be good
        cholesterol in moderation, and high levels of triglycerides Type II
        diabetes Coronary heart disease Stroke Gallbladder disease
        Osteoarthritis, a type of joint disease caused by breakdown of joint
        cartilage Sleep apnea and breathing problems Certain cancers
        (endometrial, breast, colon, kidney, gallbladder, liver) Low quality of
        life Mental illnesses such as clinical depression, anxiety, and others
        Body pains and difficulty with certain physical functions Generally, an
        increased risk of mortality compared to those with a healthy BMI As can
        be seen from the list above, there are numerous negative, in some cases
        fatal, outcomes that may result from being overweight. Generally, a
        person should try to maintain a BMI below 25 kg/m2, but ideally should
        consult their doctor to determine whether or not they need to make any
        changes to their lifestyle in order to be healthier.
      </p>
      <br />
      <h3>Risks associated with being underweight</h3>
      <p>
        Being underweight has its own associated risks, listed below:
        Malnutrition, vitamin deficiencies, anemia (lowered ability to carry
        blood vessels) Osteoporosis, a disease that causes bone weakness,
        increasing the risk of breaking a bone A decrease in immune function
        Growth and development issues, particularly in children and teenagers
        Possible reproductive issues for women due to hormonal imbalances that
        can disrupt the menstrual cycle. Underweight women also have a higher
        chance of miscarriage in the first trimester Potential complications as
        a result of surgery Generally, an increased risk of mortality compared
        to those with a healthy BMI
      </p>
    </div>
  );
}

export default About;
