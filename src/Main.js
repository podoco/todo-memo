
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
border-radius: 20px;
background: linear-gradient(90deg, 
    rgba(171,72,237,1) 0%, rgba(250,108,108,1) 50%, rgba(249,181,86,1) 100%);
`;

const Box = styled.div`
width: 100%;
padding: 24px;
margin: 16px;
border-radius: 40px;
background-color: white;
border: 4px;
box-shadow: -9px 17px 13px rgb(0 0 0 /16%);
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
 
`;
const H1 = styled.h1`
  color: rgba(171,72,237,1);
  font-weight: 500;
`

const Button = styled.button`
  height: 40px;
  font-size: medium;
  margin-top: 30px;
  border: none;
  cursor: pointer;
  background-color: white;
  border-radius: 6px;
  box-shadow: 5px 6px 2px 0px rgba(0,0,0,0.55);
  background: linear-gradient(90deg, 
    rgba(171,72,237,1) 0%, rgba(250,108,108,1) 50%, rgba(249,181,86,1) 100%);
  transition: all 300ms ease-in;
  &:hover{
    color: white;
    transform: scale(1.05);
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
          <H1>TodoMemo</H1>
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