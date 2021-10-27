import React from "react";
import { Table } from "react-bootstrap";
import styles from "./styles.module.css";

function Calculations() {
  const defaultBMI = localStorage.getItem("bmiCalc");
  const defaultBMIResult = localStorage.getItem("bmiResult");
  const defaultDate = localStorage.getItem("date");

  return (
    <div className={styles.divCalc}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>BMI</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{defaultDate}</td>
            <td>{defaultBMI}</td>
            <td>{defaultBMIResult}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Calculations;
