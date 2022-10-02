
import styled from 'styled-components'

const TodoList = ({ memos }) => {

  const MemoView = styled.div`
    padding: 10px 16px;
    margin: 20px 0;
    border-bottom: 1px solid #fafafa;
  `;

  return (
    <div>
      {memos.map(memo => (
        <MemoView key={memo.id}>
          <h2>{memo.title}</h2>
          <p>dadasddadada</p>
        </MemoView>
      ))}
    </div>
  )
}

export default TodoList