import React, { useState } from 'react';
import styled from 'styled-components';

const ListArea = () => {
  const [storageLst, setStorageList] = useState([]);

  const arrayList = () => {
    const curList = JSON.parse(localStorage.getItem('formData')) || [];
    setStorageList(curList);
  };

  return (
    <ListAreaWrapper>
      <ListButton onClick={arrayList}>전체 리스트 보기</ListButton>
      <ul>
        {storageLst.map((list, index) => (
          <li key={index}>
            {list.name} {list.telNum} {list.group}
          </li>
        ))}
      </ul>
    </ListAreaWrapper>
  );
};

const ListAreaWrapper = styled.div`
  border: 2px solid pink;
  width: 50%;
  /* text-align: center; */
`;

const ListButton = styled.button`
  border: none;
  border-radius: 12px;
  background-color: skyblue;
  width: 12rem;
  height: 3rem;
  margin: 1rem auto;
`;

export default ListArea;
