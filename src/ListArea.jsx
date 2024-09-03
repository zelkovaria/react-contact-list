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
      <ul>
        {storageLst.map((list, index) => (
          <li key={index}>
            {list.name} {list.telNum} {list.group}
          </li>
        ))}
      </ul>
      <button onClick={arrayList}>전체 리스트 보기</button>
    </ListAreaWrapper>
  );
};

const ListAreaWrapper = styled.div`
  border: 2px solid pink;
`;

export default ListArea;
