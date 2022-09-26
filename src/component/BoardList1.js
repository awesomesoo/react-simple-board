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
  {
    brdno: 3,
    brdwriter: '한문철',
    brdtitle: '급하다고 빠르게 하면 안됩니다!',
    brddate: new Date(),
  },
];

const BoardList1 = () => {
  const [data, setData] = useState(dataList);
  // const list = dataList.map(function (row) {
  //   return row.brdno + row.brdwriter;
  // });
  const list = dataList.map((row) => row.brdno + row.brdwriter);
  return (
    <>
      첫 번째: 리스트 내용 선택적으로 보여주기 (번호, 작성자)
      <hr />
      {list}
    </>
  );
};

export default BoardList1;
