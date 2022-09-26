import React, { useState } from 'react';

const dataList = [
  {
    brdno: 1,
    brdwriter: '오은영',
    brdtitle: 'React 게시판에 첫 글 등록하기~',
    brddate: new Date(),
  },
  {
    brdno: 2,
    brdwriter: '강형욱',
    brdtitle: '나만 없어 강아지ㅠㅠ',
    brddate: new Date(),
  },
];

const BoardList1 = () => {
  const [data, setData] = useState(dataList)
  const list = dataList.map(function (row) {
    return row.brdno + row.brdwriter;
  });
  return <>화면 테스트{list}</>;
};

export default BoardList1;
