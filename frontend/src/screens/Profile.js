import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
const Profile = ({ history }) => {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setname(user.name);
        setemail(user.email);
      }
    }
  }, [history, userInfo, dispatch, user, success]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setmessage("Passwords do not match");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };
  return (
    <Row>
      <Col md={4}>
        <h2 className="mb-2">Update User</h2>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {success && <Message variant="success">Profile updated</Message>}

        {loading && <Loader />}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setname(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setemail(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group controlId="confirm password">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter confirm password"
              value={confirmPassword}
              onChange={(e) =>
                setconfirmPassword(e.target.value)
              }></Form.Control>
          </Form.Group>
          <Button type="submit">Update</Button>
        </Form>
      </Col>
      <Col md={8}>my orders</Col>
    </Row>
  );
};

export default Profile;
