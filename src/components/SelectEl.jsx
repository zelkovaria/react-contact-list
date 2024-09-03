import { useState } from 'react';
import styled from 'styled-components';

const SelectEl = ({ value, onSelect }) => {
  const [options, setOptions] = useState(['가족', '친구', '직장']);
  const [newOption, setNewOption] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addOption = () => {
    if (newOption && !options.includes(newOption)) {
      setOptions([...options, newOption]);
      setNewOption('');
    }
  };

  const removeOption = (nowOption) => {
    setOptions(options.filter((option) => option != nowOption));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <span>그룹</span>
      <select value={value} onChange={(e) => onSelect(e.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button onClick={toggleModal}>조직 추가</button>

      {isModalOpen && (
        <Modal>
          <div>
            <h2>그룹관리</h2>
            <ul>
              {options.map((option, index) => (
                <li key={index}>
                  {option}{' '}
                  <button onClick={() => removeOption(option)}>X</button>
                </li>
              ))}
            </ul>
          </div>
          <input placeholder="새 그룹 이름" />
          <button onClick={addOption}>추가</button>
          <button onClick={toggleModal}>닫기</button>
        </Modal>
      )}
    </div>
  );
};

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SelectEl;
