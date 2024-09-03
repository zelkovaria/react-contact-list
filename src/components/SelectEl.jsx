import { useEffect, useState } from 'react';
import styled from 'styled-components';

const SelectEl = ({ value, onSelect }) => {
  const [options, setOptions] = useState(['가족', '친구', '직장']);
  const [newOption, setNewOption] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectChange = (e) => {
    onSelect(e.target.value);
  };

  const addOption = () => {
    if (newOption && !options.includes(newOption)) {
      const prevOptions = JSON.parse(localStorage.getItem('groups')) || [];
      const newOptions = [...prevOptions, newOption];

      setOptions(newOptions);
      localStorage.setItem('groups', JSON.stringify(newOptions));

      setNewOption('');
    }
  };

  const removeOption = (nowOption) => {
    const updateOptions = options.filter((option) => option !== nowOption);
    setOptions(updateOptions);
    localStorage.setItem('groups', JSON.stringify(updateOptions));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(options));
  }, []);

  return (
    <div>
      <span>그룹</span>
      <select value={value} onChange={handleSelectChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button onClick={toggleModal}>조직 추가</button>

      {isModalOpen && (
        <Modal>
          <Wrapper>
            <h2>그룹관리</h2>
            <ul>
              {options.map((option, index) => (
                <li key={index}>
                  {option}{' '}
                  <button onClick={() => removeOption(option)}>X</button>
                </li>
              ))}
            </ul>
          </Wrapper>
          <Wrapper>
            <input
              value={newOption}
              onChange={(e) => setNewOption(e.target.value)}
              placeholder="새 그룹 이름"
            />
            <button onClick={addOption}>추가</button>
            <button onClick={toggleModal}>닫기</button>
          </Wrapper>
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
  /* background: rgba(0, 0, 0, 0.3); */
  background: #eaeaea;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  margin: 1rem;

  h2 {
    font-size: 24px;
    margin-bottom: 1rem;
  }
`;

export default SelectEl;
