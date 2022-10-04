
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
box-shadow: -9px 17px 13px rgb(0 0 0 /16%);
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
 
`;

const Button = styled.button`
  height: 40px;
  font-size: medium;
  margin-top: 30px;
  border: none;
  cursor: pointer;
  background-color: white;
  border-radius: 6px;

  &:hover{
    color: blue;
  }
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
          <Button onClick={handleRemoveClick}>Delete All</Button>
        </Title>
        {isPending && <Loading />}
        {memos && <TodoLists memos={memos} />}
        {<InputForm memos={memos} />}
      </Box>
    </Container>
  )
}

export default Main