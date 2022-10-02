
import styled from 'styled-components'
import Loading from './component/Loading'
import TodoList from './component/TodoList'
import InputForm from './component/InputForm'

const Main = ({ memos, isPending }) => {
  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;
  `;

  const Box = styled.div`
    width: 100%;
    padding: 24px;
    margin: 16px;
    background-color: white;
    border: 4px;
  `;

  const Title = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
  `;

  const handleRemoveClick = () => {
    console.log("지우기");
  }


  return (
    <Container>
      <Box>
        <Title>
          <h1>TodoMemo</h1>
          <button onClick={handleRemoveClick}>Delete All</button>
        </Title>
        {isPending && <Loading />}
        {memos && <TodoList memos={memos} />}
        {<InputForm memos={memos} />}
      </Box>
    </Container>
  )
}

export default Main