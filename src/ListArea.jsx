import React, { useEffect, useState } from 'react';

const ListArea = () => {
  const [storageLst, setStorageList] = useState([]);

  // useEffect(() => {
  //   const storedList = localStorage.getItem('formData');
  //   if (storedList) {
  //     const parsedList = JSON.parse(storedList);
  //     setStorageList(Object.values(parsedList));
  //   }
  // }, []);

  return (
    <div>
      {storageLst.map((list, index) => (
        <li key={index}>{list}</li>
      ))}
    </div>
  );
};

export default ListArea;
