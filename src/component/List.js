import { useState } from 'react';
import styled from 'styled-components'
import { fetchDelete } from '../util/api';
import { fetchPatch } from '../util/api';

const MemoView = styled.div`
padding: 8px 16px;
justify-content: space-between;
display: flex;
margin: 9px 0;
border-radius:8px;
box-shadow: 3px 3px rgba(0, 0, 255, .3);
background-color: ghostwhite;
color: rgba(250,108,108,1);

`;
const Div = styled.div`
  display:flex;
  position: relative;
  align-items: center;
  text-align: center;
`;
const Button = styled.button`
  padding: 8px 16px;
  margin-left: 2px;
  background-color: white;
  color:  rgba(250,108,108,1);
  border-radius: 6px;
  box-shadow: 3px 3px rgba(0, 0, 255, .3);
  float: right;
  cursor: pointer;
  justify-content: center;

  &:hover{
    color: white;
    background-color: palevioletred;
  };
`

const Input = styled.input`
height: 40px;
margin: 10px 0px;
font-size: large;
`;


const List = ({ id, title }) => {

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
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
        <Div>
          <Button type="submit" onClick={handleSubmit}>save</Button>
          <Button onClick={() => handleDeleteClick(id)}>x</Button>
        </Div>
      </MemoView>
    )



    //기본모드  
  } else {
    return (
      <MemoView key={id}>
        <h2>{title}</h2>
        <Div>
          <Button onClick={() => setIsEditing(true)}>edit</Button>
          <Button onClick={() => handleDeleteClick(id)}>x</Button>
        </Div>
      </MemoView>

    )

  }
}

export default List