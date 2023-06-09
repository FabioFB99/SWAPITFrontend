import { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { UserContext } from '../context/UserContext';
import { API } from '../services/API';
import Palette from '../styles/Palette';
import Button from './Button';

const LoginModalStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & .modal {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(8px);
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
  }
  .form-box {
    max-width: 300px;
    background: rgba(250, 250, 250, 0.8);
    overflow: hidden;
    border-radius: 16px;
    color: ${Palette.primary};
  }

  .form {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 32px 24px 24px;
    gap: 16px;
    text-align: center;
  }

  /*Form text*/
  .title {
    font-weight: bold;
    font-size: 1.6rem;
  }

  .subtitle {
    font-size: 1rem;
    color: #666;
  }

  /*Inputs box*/
  .form-container {
    overflow: hidden;
    border-radius: 8px;
    background-color: #fff;
    margin: 1rem 0 0.5rem;
    width: 100%;
  }

  .input {
    background: none;
    border: 0;
    outline: 0;
    height: 40px;
    width: 100%;
    border-bottom: 1px solid #eee;
    font-size: 0.9rem;
    padding: 8px 15px;
  }

  .form-section {
    padding: 16px;
    font-size: 0.85rem;
    background-color: #e0ecfb;
    box-shadow: rgb(0 0 0 / 8%) 0 -1px;
  }

  .form-section a {
    font-weight: bold;
    color: #0066ff;
    transition: color 0.3s ease;
  }

  .form-section a:hover {
    color: #005ce6;
    text-decoration: underline;
  }

  .form button {
    background-color: ${Palette.secondary};
    color: #fff;
    border: 0;
    border-radius: 24px;
    padding: 10px 16px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .form button:hover {
    background-color: ${Palette.highlight};
  }
  & .hidden {
    display: none !important;
  }
  & .form span {
    display: flex;
    justify-content: flex-end;
  }

  & .form span .close {
    background-color: transparent;
    color: ${Palette.secondary};
  }
`;

const LoginModal = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const { login } = useContext(UserContext);

  const formSubmit = (formData) => {
    API.post('/users/login', formData).then((res) => {
      login(res.data.user, res.data.token);
      navigate('/');
    });
  };
  return (
    <LoginModalStyled>
      <Button
        className={'secondary'}
        bg={'second'}
        color={'second'}
        text={'Login'}
        border={'yes'}
        action={() => {
          toggleModal();
        }}
      ></Button>
      <div className={modal ? 'modal' : 'hidden'}>
        <div className="form-box">
          <form className="form" onSubmit={handleSubmit(formSubmit)}>
            <span>
              <button className="close" onClick={() => toggleModal()}>
                Close
              </button>
            </span>
            <div className="title">Log In</div>
            <div className="form-container">
              <label htmlFor="email">Email </label>
              <input
                className="input"
                type="text"
                id="email"
                name="email"
                {...register('email')}
              />
            </div>
            <div className="form-container">
              <label htmlFor="password">Password </label>
              <input
                className="input"
                type="password"
                id="password"
                name="password"
                {...register('password')}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </LoginModalStyled>
  );
};

export default LoginModal;
