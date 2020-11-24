import React from 'react';
import { Progress } from 'antd';
import Link from 'next/link';

class Users extends React.Component {
  render() {
    return (
      <div style={{ width: 170 }}>
        <Progress percent={30} size="small" />
        <Progress percent={50} size="small" status="active" />
        <Progress percent={70} size="small" status="exception" />
        <Progress percent={100} size="small" />
        <Link href="/">come back </Link>
      </div>
    );
  }
}

export default Users;
