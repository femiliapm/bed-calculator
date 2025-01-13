import React, { useState } from "react";
import { Form, InputGroup, Row } from "react-bootstrap";

const BEDTab = (props) => {
  const { index } = props;
  const [bed, setBed] = useState("");
  const [n, setN] = useState("");
  const [k, setK] = useState("");
  const [d, setD] = useState("");
  const [t, setT] = useState(0);
  const [ab, setAB] = useState(10);
  const [tk, setTk] = useState(0);

  const calculate = (e) => {
    e.preventDefault();

    if (n == "" || isNaN(n)) {
      setN((((bed + k * (t - tk)) / d) * (ab / (ab + d))).toFixed(2));
    } else if (d == "" || isNaN(d)) {
      const a = 1;
      const b = ab;
      const c = -ab * ((bed + k * (t - tk)) / n);

      const D = b * b - 4 * a * c;

      let d1 = 0;

      if (D > 0) {
        d1 = (-b + Math.sqrt(D)) / (2 * a);

        setD(d1.toFixed(2));
      } else if (D == 0) {
        setD(-b / (2 * a));
      }
    } else {
      setBed((n * d * ((ab + d) / ab) - k * (t - tk)).toFixed(2));
    }
  };

  return (
    <div>
      <span className="fs-3 fw-bold">BED {index}</span>

      <form action="" id={`form-${index}`}>
        <Row className="mt-2">
          <InputGroup className="col">
            <InputGroup.Text>BED</InputGroup.Text>
            <Form.Control
              aria-describedby="BED"
              type="number"
              placeholder="0"
              name="bed"
              id={`bed-${index}`}
              value={bed}
              onChange={(e) => setBed(parseFloat(e.target.value))}
            />
          </InputGroup>
        </Row>
        <Row className="mt-2">
          <InputGroup className="col">
            <InputGroup.Text>n</InputGroup.Text>
            <Form.Control
              aria-describedby="n fractions"
              type="number"
              placeholder="0"
              name="n"
              id={`n-${index}`}
              value={n}
              onChange={(e) => setN(parseFloat(e.target.value))}
            />
          </InputGroup>
          <InputGroup className="col">
            <InputGroup.Text>K</InputGroup.Text>
            <Form.Control
              aria-describedby="K Gy / day"
              type="number"
              placeholder="0"
              name="k"
              id={`k-${index}`}
              value={k}
              onChange={(e) => setK(parseFloat(e.target.value))}
            />
          </InputGroup>
        </Row>
        <Row className="mt-2">
          <InputGroup className="col">
            <InputGroup.Text>d</InputGroup.Text>
            <Form.Control
              aria-describedby="d dose / fractions"
              type="number"
              placeholder="0"
              name="d"
              id={`d-${index}`}
              value={d}
              onChange={(e) => setD(parseFloat(e.target.value))}
            />
          </InputGroup>
          <InputGroup className="col">
            <InputGroup.Text>T</InputGroup.Text>
            <Form.Control
              aria-describedby="T days"
              type="number"
              placeholder="0"
              name="t"
              id={`t-${index}`}
              value={t}
              onChange={(e) => setT(parseFloat(e.target.value))}
            />
          </InputGroup>
        </Row>
        <Row className="mt-2">
          <InputGroup className="col">
            <InputGroup.Text>
              &alpha;/&beta;<sup className="text-danger fw-bold">*</sup>
              <sup className="btn-info">&#9432;</sup>
            </InputGroup.Text>
            <Form.Control
              aria-describedby="alpha / beta"
              type="number"
              placeholder="3"
              name="ab"
              id={`ab-${index}`}
              value={ab}
              onChange={(e) => setAB(parseFloat(e.target.value))}
            />
          </InputGroup>
          <InputGroup className="col">
            <InputGroup.Text>
              T<sub>k</sub>
            </InputGroup.Text>
            <Form.Control
              aria-describedby="Tk days"
              type="number"
              placeholder="0"
              name="tk"
              id={`tk-${index}`}
              value={tk}
              onChange={(e) => setTk(parseFloat(e.target.value))}
            />
          </InputGroup>
        </Row>
      </form>

      <p className="mt-2" style={{ fontSize: "0.7rem" }}>
        <span className="text-danger fw-bold">*</span>Usually 3 for normal
        tissue and 10 for tumour
      </p>
      <p className="mt-2" style={{ fontSize: "0.7rem" }}>
        <span className="text-danger fw-bold">notes</span>Please empty the input
        (n or d) if you want to calculate one of them!
      </p>
      <div style={{ fontSize: "0.7rem" }}>
        <span className="text-danger fw-bold">unit description</span>
        <ul>
          <li>n = fractions</li>
          <li>d = dose / fractions</li>
          <li>K = Gy / day</li>
          <li>T = days</li>
          <li>
            T<sub>k</sub> = days
          </li>
        </ul>
      </div>

      <div className="my-2 d-flex justify-content-end">
        <button className="btn btn-danger me-3">Reset</button>
        <button className="btn btn-success" onClick={(e) => calculate(e)}>
          Calculate
        </button>
      </div>
    </div>
  );
};

export default BEDTab;
