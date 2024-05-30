import axios from "axios";
import HttpClient from "./HttpClient";
import { redirect } from "react-router";

class Authenticate {
  authenticateEndPoint = "/auth";

  signUp = async (name, email, password, address) => {
    return await axios
      .post(
        "http://localhost:8082/auth/register",
        {
          username: name,
          password: password,
          email: email,
          address: address,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => res.data);
  };

  signIn = async (name, password) => {
    return await axios.post(
      "http://localhost:8082/auth/login",
      {
        username: name,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
}

const authenticate = new Authenticate();

export default authenticate;
