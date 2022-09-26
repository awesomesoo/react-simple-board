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
    brdtitle: '급하다고 빠르게 달리면 위험해요!',
    brddate: new Date(),
  },
];

const BoardList2 = () => {
  const [data, setData] = useState(dataList);

  // const BoardItem = () => {
  //   <tr>
  //     <td>{this.props.row.brdno}</td>
  //     <td>{this.props.row.brdtitle}</td>
  //     <td>{this.props.row.brdwriter}</td>
  //     <td>{this.props.row.brddate.toLocaleDateString('ko-KR')}</td>
  //   </tr>;
  // };
  return (
    <>
      세 번째:
      <br />
      리스트 내용 선택적으로 보여주기 (번호, 작성자)
      <br />
      table 태그 안에 리스트 보여주기
      <hr />
      <div>
        <table border="1">
          <thead>
            <tr align="center">
              <th width="50">No.</th>
              <th width="300">Title</th>
              <th width="100">Name</th>
              <th width="100">Date</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((row) => (
              <tr key={row.brdno}>
                <td>{row.brdno}</td>
                <td>{row.brdtitle}</td>
                <td>{row.brdwriter}</td>
                <td>{row.brddate.toLocaleDateString('ko-KR')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BoardList2;
