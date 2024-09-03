import styled from 'styled-components';
import { useState } from 'react';
import Input from './Input';
import SelectEl from '../InputCon/SelectEl';

const InputCon = () => {
  const [name, setName] = useState('');
  const [telNum, setTelNum] = useState('');
  const [group, setGroup] = useState('');
  const [memo, setMemo] = useState('');

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
      <Input title={'이름'} value={name} onChange={setName} />
      <Input title={'전화번호'} value={telNum} onChange={setTelNum} />
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
