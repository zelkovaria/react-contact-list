import React, { useState } from 'react';
import styled from 'styled-components';

const UserList = ({ list }) => {
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
        <>
          <Overlay onClick={toggleModal} />
          <Section>
            <ModalCloseBtn onClick={toggleModal}>닫기</ModalCloseBtn>
            <Modal>
              <h2>연락처 상세 정보</h2>
              {Object.entries(newList).map(([key, value]) => (
                <div key={key}>
                  <span>{key} </span> {value}
                </div>
              ))}
            </Modal>
          </Section>
        </>
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
  top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;

  h2 {
    font-size: 18px;
    margin-bottom: 1rem;
  }

  div {
    margin: 0.2rem;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 30%;
  left: 10%;
  width: 200px;
  height: 200px;
  border-radius: 15px;
  background: #eaeaea;
  z-index: 1000;
`;

const ModalCloseBtn = styled.div`
  position: absolute;
  top: -4rem;
  background-color: #f5b7b7;
  border-radius: 4px;
  height: 2rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  z-index: 999;
`;
export default UserList;
