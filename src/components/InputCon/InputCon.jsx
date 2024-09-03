import styled from 'styled-components';
import { useState } from 'react';
import Input from './Input';
import SelectEl from './SelectEl';

const InputCon = () => {
  const [name, setName] = useState('');
  const [telNum, setTelNum] = useState('');
  const [group, setGroup] = useState('');
  const [memo, setMemo] = useState('');
  const [nameError, setNameError] = useState('');
  const [telNumError, setTelNumError] = useState('');

  const validateName = (value) => {
    const nameRegex = /^[가-힣]{2,}$/;
    if (!nameRegex.test(value)) {
      setNameError('이름은 한글로 두 글자 이상 입력해주세요.');
    } else setNameError('');
  };

  const validateTelNum = (value) => {
    const telNumRegex = /^010-\d{4}-\d{4}$/;
    if (!telNumRegex.test(value)) {
      setTelNumError('전화번호는 010-0000-0000 형식으로 입력해주세요');
    } else setTelNumError('');
  };

  const handleStoreLocal = () => {
    const formData = { name, telNum, group, memo };

    const prevData = JSON.parse(localStorage.getItem('formData')) || [];
    const updateData = [...prevData, formData];
    localStorage.setItem('formData', JSON.stringify(updateData));

    setName('');
    setTelNum('');
    setGroup('');
    setMemo('');
  };

  return (
    <div>
      <Input
        title={'이름'}
        value={name}
        onChange={(value) => {
          setName(value);
          validateName(value);
        }}
        error={nameError}
      />
      <Input
        title={'전화번호'}
        value={telNum}
        onChange={(value) => {
          setTelNum(value);
          validateTelNum(value);
        }}
        error={telNumError}
      />
      <SelectEl value={group} onSelect={setGroup} />
      <Input title={'간단한 기록'} value={memo} onChange={setMemo} />
      <SaveButton onClick={handleStoreLocal}>저장</SaveButton>
    </div>
  );
};

const SaveButton = styled.button`
  border: none;
  border-radius: 12px;
  background-color: skyblue;
  width: 12rem;
  height: 3rem;
  margin: 1rem auto;
`;

export default InputCon;
