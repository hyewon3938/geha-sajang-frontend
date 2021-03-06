import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { postCheckEmail, postCheckName } from '@/redux/Registration/thunk/postCheckDuplicate';
import { postCreateAccount, removeCreateAccountData } from '@/redux/Registration/thunk/postCreateAccount';

import BlackButton from '@/components/UIComponents/Button/BlackButton';
import TitleInput from '@/components/UIComponents/Input/TitleInput';
import UploadFile from '@/components/UIComponents/UploadFile/UploadFile';
import LoadingIndicator from '@/components/LoadingIndicator/LoadingIndicator';

const CreateAccount = ({ isAgreeToMarketing }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { checkEmail, checkName, createAccount } = useSelector((state) => state.registerReducer);

  const [currentImage, setCurrentImage] = useState();
  const [emailMessage, setEmailMessage] = useState();
  const [emailMessageDisplay, setEmailMessageDisplay] = useState();
  const [passwordMessage, setPasswordMessage] = useState();
  const [passwordMessageDisplay, setPasswordMessageDisplay] = useState();
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState();
  const [passwordConfirmMessageDisplay, setPasswordConfirmMessageDisplay] = useState();
  const [nicknameMessage, setNicknameMessage] = useState();
  const [nicknameMessageDisplay, setNicknameMessageDisplay] = useState();
  const [isEmailDuplicated, setIsEmailDuplicated] = useState(false);
  const [isNicknameDuplicated, setIsNicknameDuplicated] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const emailInput = React.createRef();
  const passwordInput = React.createRef();
  const passwordConfirmInput = React.createRef();
  const nicknameInput = React.createRef();

  useEffect(() => {
    const { data, error } = checkEmail;
    if (!data) return;
    if (data.data) {
      setEmailMessage('이미 사용 중인 이메일입니다');
      setEmailMessageDisplay('block');
      setIsEmailDuplicated(true);
    } else {
      setIsEmailDuplicated(false);
    }
    if (error) {
      setEmailMessage('이메일을 다시 확인해주세요');
      setEmailMessageDisplay('block');
    }
  }, [checkEmail]);

  useEffect(() => {
    const { data, error } = checkName;
    if (!data) return;
    if (data.data) {
      setNicknameMessage('이미 사용 중인 닉네임입니다');
      setNicknameMessageDisplay('block');
      setIsNicknameDuplicated(true);
    } else {
      setIsNicknameDuplicated(false);
    }
    if (error) {
      setNicknameMessage('닉네임은 2~10자로 입력해주세요');
      setNicknameMessageDisplay('block');
    }
  }, [checkName]);

  useEffect(() => {
    const { data, loading, error } = createAccount;
    if (!data) return;
    if (data.status === 201) {
      successCreateAccount();
    }
    if (error) {
      console.log(data);
      alert(data.response.data.message);
      setIsLoading(false);
    }
  }, [createAccount]);

  const validateEmail = () => {
    const email = emailInput.current.value;
    var emailCheck = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if (email.length <= 0) {
      setEmailMessage('이메일을 입력해주세요');
      setEmailMessageDisplay('block');
      return false;
    }
    if (!emailCheck.test(email)) {
      setEmailMessage('이메일을 다시 확인해주세요');
      setEmailMessageDisplay('block');
      return false;
    }
    dispatch(postCheckEmail(email));
    setEmailMessageDisplay('none');
    return true;
  };

  const validatePassword = () => {
    const password = passwordInput.current.value;
    const passwordCheck = /^[a-zA-Z0-9]{8,16}$/;
    const passwordCharCheck = /^(?=.*[a-z])/;
    const passwordNumberCheck = /^(?=.*[0-9])/;

    if (password.length <= 0) {
      setPasswordMessage('비밀번호를 입력해주세요');
      setPasswordMessageDisplay('block');
      return false;
    }
    if (!passwordCheck.test(password) || !passwordCharCheck.test(password) || !passwordNumberCheck.test(password)) {
      setPasswordMessage('8~16자 영문,숫자를 사용하세요');
      setPasswordMessageDisplay('block');
      return false;
    }
    setPasswordMessageDisplay('none');
    return true;
  };

  const confirmPassword = () => {
    const passwordConfirm = passwordConfirmInput.current.value;
    const password = passwordInput.current.value;

    if (passwordConfirm.length <= 0) {
      setPasswordConfirmMessage('비밀번호를 다시 한번 입력해주세요');
      setPasswordConfirmMessageDisplay('block');
      return false;
    }
    if (passwordConfirm.length <= 0) {
      setPasswordConfirmMessage('비밀번호를 다시 한번 입력해주세요');
      setPasswordConfirmMessageDisplay('block');
      return false;
    }
    if (passwordConfirm != password) {
      setPasswordConfirmMessage('비밀번호가 일치하지 않습니다');
      setPasswordConfirmMessageDisplay('block');
      return false;
    }
    setPasswordConfirmMessageDisplay('none');
    return true;
  };

  const validateNickname = () => {
    const nickname = nicknameInput.current.value;
    const blankPattern = /^\s+|\s+$/g;
    const nicknameLengthWithoutBlank = nickname.replace(blankPattern, '').length;

    if (nickname.length <= 0 || nicknameLengthWithoutBlank <= 0) {
      setNicknameMessage('닉네임을 입력해주세요');
      setNicknameMessageDisplay('block');
      return false;
    }
    if (nickname.length < 2 || nickname.length > 10) {
      setNicknameMessage('닉네임은 2~10자로 입력해주세요');
      setNicknameMessageDisplay('block');
      return false;
    }
    dispatch(postCheckName(nickname));
    setNicknameMessageDisplay('none');
    return true;
  };

  const moveToLogIn = () => {
    history.push('/logIn');
  };

  const registerButtonClickHandler = () => {
    validateEmail();
    validatePassword();
    confirmPassword();
    validateNickname();

    if (
      validateEmail() &&
      validatePassword() &&
      confirmPassword() &&
      validateNickname() &&
      !isEmailDuplicated &&
      !isNicknameDuplicated
    ) {
      setIsLoading(true);

      const formData = new FormData();
      formData.append('account', emailInput.current.value);
      formData.append('password', passwordInput.current.value);
      formData.append('nickname', nicknameInput.current.value);
      formData.append('image', currentImage);
      formData.append('isAgreeToMarketing', isAgreeToMarketing);

      dispatch(postCreateAccount(formData));
    }
  };

  const successCreateAccount = () => {
    removeCreateAccountData();
    alert(`가입한 이메일로 인증 이메일이 전송되었습니다.\n이메일 인증 후 서비스를 이용하실 수 있습니다.`);
    setIsLoading(false);
    moveToLogIn();
  };

  return (
    <>
      {isLoading ? <LoadingIndicator /> : ''}
      <ContentWrap>
        <RegisterTitle>회원가입</RegisterTitle>
        <RegisterWrap>
          <InputWrap>
            <TitleInput
              title="이메일 주소"
              spanValue=" ●"
              inputWidth="400px"
              refValue={emailInput}
              onBlur={validateEmail}
              messageDisplay={emailMessageDisplay}
              messageValue={emailMessage}
            />
          </InputWrap>
          <InputWrap>
            <TitleInput
              type="password"
              title="비밀번호"
              inputWidth="400px"
              spanValue=" ●"
              refValue={passwordInput}
              onBlur={validatePassword}
              messageDisplay={passwordMessageDisplay}
              messageValue={passwordMessage}
            />
          </InputWrap>
          <InputWrap>
            <TitleInput
              type="password"
              title="비밀번호 확인"
              inputWidth="400px"
              spanValue=" ●"
              onBlur={confirmPassword}
              refValue={passwordConfirmInput}
              messageDisplay={passwordConfirmMessageDisplay}
              messageValue={passwordConfirmMessage}
            />
          </InputWrap>
          <InputWrap>
            <TitleInput
              title="닉네임"
              inputWidth="400px"
              spanValue=" ●"
              onBlur={validateNickname}
              refValue={nicknameInput}
              messageDisplay={nicknameMessageDisplay}
              messageValue={nicknameMessage}
            />
          </InputWrap>
          <UploadFile title="프로필 사진" getCurrentFile={setCurrentImage} />
          <BlackButton title="회원가입" onClick={registerButtonClickHandler} />
        </RegisterWrap>
      </ContentWrap>
    </>
  );
};

export default CreateAccount;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 80px;
`;

const RegisterTitle = styled.div`
  font-family: 'S-CoreDream-5Medium';
  font-weight: bold;
  font-size: 25px;
  color: ${({ theme }) => theme.color.darkGray};
  font-weight: bold;
  margin: 0 0 40px 0;
`;

const RegisterWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 830px;
  border: 0.5px solid #b3b3b3;
  padding: 60px;
`;
const InputWrap = styled.div`
  margin-bottom: 25px;
`;
