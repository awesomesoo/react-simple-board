import React, { Component } from "react";
/*
    add a board (post)
*/
class App4 extends Component {
  state = {
    maxNo: 4,
    boards: [
      {
        brdno: 1,
        brdwriter: "오은영",
        brdtitle: "React 게시판에 첫 글 등록하기~",
        brddate: new Date(),
      },
      {
        brdno: 2,
        brdwriter: "강형욱",
        brdtitle: "나만 없어 강아지ㅠㅠ",
        brddate: new Date(),
      },
      {
        brdno: 3,
        brdwriter: "한문철",
        brdtitle: "급하다고 빠르게 달리면 위험해요!",
        brddate: new Date(),
      },
    ],
  };

  handleSaveData = (data) => {
    this.setState({
      boards: this.state.boards.concat({
        brdno: this.state.maxNo++,
        brddate: new Date(),
        ...data,
      }),
    });
  };

  render() {
    const { boards } = this.state;

    return (
      <div>
        <BoardForm onSaveData={this.handleSaveData} />
        <table border="1">
          <tbody>
            <tr align="center">
              <td width="50">No.</td>
              <td width="300">Title</td>
              <td width="100">Name</td>
              <td width="100">Date</td>
            </tr>
            {boards.map(function (row) {
              return <BoardItem key={row.brdno} row={row} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

class BoardItem extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.row.brdno}</td>
        <td>{this.props.row.brdtitle}</td>
        <td>{this.props.row.brdwriter}</td>
        <td>{this.props.row.brddate.toLocaleDateString("ko-KR")}</td>
      </tr>
    );
  }
}

class BoardForm extends Component {
  state = {};

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSaveData(this.state);
    this.setState({});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="title"
          name="brdtitle"
          onChange={this.handleChange}
        />
        <input
          placeholder="name"
          name="brdwriter"
          onChange={this.handleChange}
        />
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default App4;
