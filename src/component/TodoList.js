
import styled from 'styled-components'
import { fetchDelete } from '../util/api';
import { useParams } from "react-router-dom";

const MemoView = styled.div`
padding: 10px 16px;
justify-content: space-between;
display: flex;
margin: 20px 0;
border-radius:4px;
box-shadow: 2px 2px rgba(0, 0, 255, .2);
background-color: rgb(243,244,246);
border-bottom: 1px solid #fafafa;
`;
const Item = styled.div`
  align-items: center;
`;
const Div = styled.div`
  align-items: center;
  text-align: center;
`;
const Button = styled.button`
  padding: 8px 16px;
  float: right;
`;

const TodoList = ({ memos }) => {
  const { id } = useParams();

  const handleDeleteClick = (id) => {
    console.log(id);
    fetchDelete('http://localhost:3001/memo/', id);
  }



  return (

    <Item>
      {memos.map(memo => (
        <MemoView key={memo.id}>
          <h2>{memo.title}</h2>

          <Div>
            <Button onClick={() => handleDeleteClick(memo.id)}>x</Button>
            <Button >edit</Button>
          </Div>
        </MemoView>
      ))}
    </Item>


  )
}

export default TodoList