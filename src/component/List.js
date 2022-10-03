import { useState } from 'react';
import styled from 'styled-components'
import { fetchDelete } from '../util/api';
import { fetchPatch } from '../util/api';

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
const Div = styled.div`
  align-items: center;
  text-align: center;
`;
const Button = styled.button`
  padding: 8px 16px;
  float: right;
`;

const List = ({ memos, id, title }) => {

  const [value, setValue] = useState(title);

  const [isEditing, setIsEditing] = useState(false);

  const handleDeleteClick = (id) => {
    console.log(value);
    fetchDelete('http://localhost:3001/memo/', id);
  }


  const handleSubmit = () => {
    let patchData = { "title": value };
    fetchPatch('http://localhost:3001/memo/', id, patchData);
  }


  //수정시 모드
  if (isEditing) {

    return (

      <MemoView key={id}>

        <form onSubmit={handleSubmit}>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>

        <Div>
          <Button onClick={() => handleDeleteClick(id)}>x</Button>
          <Button type="submit" onClick={handleSubmit}>save</Button>
        </Div>
      </MemoView>

    )



    //기본모드  
  } else {
    return (

      <MemoView key={id}>
        <h2>{title}</h2>
        <Div>
          <Button onClick={() => handleDeleteClick(id)}>x</Button>
          <Button onClick={() => setIsEditing(true)}>edit</Button>
        </Div>
      </MemoView>
    )


  }
}

export default List