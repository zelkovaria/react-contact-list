import Input from './components/Input';
import SelectEl from './components/SelectEl';

const InputCon = () => {
  return (
    <div>
      <Input title={'이름'} />
      <Input title={'전화번호'} />
      <SelectEl />
      <Input title={'간단한 기록'} />
    </div>
  );
};

export default InputCon;
