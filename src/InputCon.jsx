import { useState } from 'react';
import Input from './components/Input';
import SelectEl from './components/SelectEl';

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
      <button onClick={handleStoreLocal}>저장</button>
    </div>
  );
};

export default InputCon;
