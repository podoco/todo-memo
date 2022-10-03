import React, { useState } from 'react'
import styled from 'styled-components'
import List from './List';

const Item = styled.div`
  align-items: center;
`;

const TodoLists = ({ memos }) => {

  return (
    <Item>
      {memos.map(memo => (
        <List
          key={memo.id}
          memos={memos}
          id={memo.id}
          title={memo.title}
        />
      ))}
    </Item>
  )
}

export default TodoLists