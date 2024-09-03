import React, { useState } from 'react';
import styled from 'styled-components';

const UserList = ({ list }) => {
  console.log(list);
  const { name, telNum, group, memo } = list;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const newList = {
    이름: name,
    전화번호: telNum,
    그룹: group,
    메모: memo,
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <List>
        {name} {telNum} {group}
        <DetailInfoBtn onClick={toggleModal}>세부사항</DetailInfoBtn>
      </List>

      {isModalOpen && (
        <Modal>
          <h2>연락처 상세 정보</h2>
          {Object.entries(newList).map(([key, value]) => (
            <div key={key}>
              <span>{key} </span> {value}
            </div>
          ))}
          <button onClick={toggleModal}>닫기</button>
        </Modal>
      )}
    </div>
  );
};

const List = styled.li`
  margin: 1rem;
`;

const DetailInfoBtn = styled.button`
  width: 4rem;
  height: 2rem;
  margin-left: 1rem;
`;

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

export default UserList;
