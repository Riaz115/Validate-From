import React, { useState } from "react";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Col, Container, Form } from "react-bootstrap";
import "./Myform.css";

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConsfirmPassword] = useState("");
  const [submitedData, setSubmitedData] = useState(null);
  const [errors, setErrors] = useState({});
  const [showFrom, setShowForm] = useState(true);

  const CatchErrors = () => {
    let isOk = true;
    let newError = {};

    if (!name.trim()) {
      newError.name = "Name is Required";
      isOk = false;
    } else if (!email.trim()) {
      newError.email = "Email is Required";
      isOk = false;
    } else if (Password.length < 6) {
      newError.Password = "password Must should be at least 6 words";
      isOk = false;
    } else if (confirmPassword !== Password) {
      newError.confirmPassword =
        "Wronge password please enter correct password";

      isOk = false;
    }
    setErrors(newError);
    return isOk;
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (CatchErrors()) {
      const submitedData = {
        name,
        email,
        Password,
        confirmPassword,
      };
      setSubmitedData(submitedData);
      setShowForm(false);
    }
  };

  return (
    <>
      <section className="wrapper">
        <Container>
          {showFrom ? (
            <Col
              lg={{ span: 8, offset: 2 }}
              // md={{ span: 10, offset: 1 }}
              className=" for-col
          "
            >
              <Form onSubmit={HandleSubmit}>
                <div className="for-form">
                  <div>
                    <h1 className="for-title">Serani-Tech-House</h1>
                  </div>
                  <div>
                    <label className="forlabel">UserName</label>
                    <input
                      type="text"
                      className="for-input "
                      value={name}
                      placeholder="Username"
                      onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <p className="for-error">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="forlabel">Email</label>
                    <input
                      type="email"
                      className="for-input "
                      value={email}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                      <p className="for-error">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="forlabel">Password</label>

                    <input
                      type="Password"
                      className="for-input "
                      value={Password}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.Password && (
                      <p className="for-error">{errors.Password}</p>
                    )}
                  </div>

                  <div>
                    <label className="forlabel">Confirm Password</label>
                    <input
                      type="Password"
                      className="for-input "
                      value={confirmPassword}
                      placeholder="Confirm Password"
                      onChange={(e) => setConsfirmPassword(e.target.value)}
                    />
                    {errors.confirmPassword && (
                      <p className="for-error">{errors.confirmPassword}</p>
                    )}
                  </div>

                  <div className="btndiv">
                    <button className="for-btn" type="submit">
                      submit
                    </button>
                  </div>
                </div>
              </Form>
            </Col>
          ) : (
            <Col
              lg={{ span: 8, offset: 2 }}
              className=" for-col
          "
            >
              <div>
                <div
                  className="text-center
          "
                >
                  <h1 className="formtitle">Form SubmittedData</h1>
                  <h5 className="data">UserName : {submitedData.name}</h5>
                  <h5 className="data">UserEmail : {submitedData.email}</h5>
                  <h5 className="data">Password : {submitedData.Password}</h5>
                </div>
                <h6 className="mt-sm-5 mt-3 data">
                  Developed by M.Riaz Ahmad --------
                </h6>
              </div>
            </Col>
          )}
        </Container>
      </section>
    </>
  );
}

export default MyForm;
