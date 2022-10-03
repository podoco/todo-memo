
import styled from 'styled-components'
import Loading from './component/Loading'
import TodoLists from './component/TodoLists'
import InputForm from './component/InputForm'
import { fetchDelete } from './util/api'

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

const Main = ({ memos, isPending }) => {

  const handleRemoveClick = () => {
    console.log(memos.length);

    memos.map((memo) => (
      fetchDelete('http://localhost:3001/memo/', memo.id)
    ))
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
        {memos && <TodoLists memos={memos} />}
        {<InputForm memos={memos} />}
      </Box>
    </Container>
  )
}

export default Main