import React, { useRef } from "react";
import "./style.css";
import { Form, Button, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../Context/AuthContext";
import { useHistory } from "react-router-dom";
const Login = () => {
  const { t } = useTranslation();

  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();
    signup(emailRef.current.value, passwordRef.current.value);
    history.push("/");
  }

  return (
    <div className="mainLogin" style={{ minHeight: "84.6vh" }}>
      <Card className="cardLogin">
        <Card.Body className="cardBody">
          <div className="backgroundBody">
            <h2 className="headerElement">{t("login.text")}</h2>
            <Form className="formMain">
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="emailInput"
                  type="email"
                  ref={emailRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group id="password">
                <Form.Label className="passwordText">
                  {t("password")}
                </Form.Label>
                <Form.Control
                  className="passwordInput"
                  type="password"
                  ref={passwordRef}
                  required
                ></Form.Control>
              </Form.Group>
              <div className="aLabel">
                <input
                  className="inputElement"
                  type="checkbox"
                  value="Remember me"
                  id="RememberMe"
                ></input>
                <label className="labelElement" for="Remember me">
                  {t("remember")}
                </label>
                <p className="forgotPassword">{t("forgot.password")}</p>
              </div>
              <Form.Group className="loginGroup">
                <Button
                  onClick={handleSubmit}
                  className="loginButton"
                  type="submit"
                >
                  {t("login.button")}
                </Button>
              </Form.Group>
              <Form.Group className="googleGroup">
                <Button className="googleButton" type="submit">
                  <img
                    src="./images/google.png"
                    className="googleIcon"
                    alt="googleIcon"
                  />
                  {t("google")}
                </Button>
              </Form.Group>
              <Form.Group className="facebookGroup">
                <Button className="facebookButton" type="submit">
                  <img
                    src="./images/facebook.png"
                    className="facebookIcon"
                    alt="facebookIcon"
                  />
                  {t("facebook")}
                </Button>
              </Form.Group>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
