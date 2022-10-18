import { useState } from 'react';
import styled from 'styled-components';
import { fetchCreate } from '../util/api';

const Form = styled.form`
display: flex;
padding-top:8px;
`;
const Input = styled.input`
width: 100%;
padding: 8px 12px;
margin-right: 16px;
color: rgb(107 114 128);
border-radius: 4px;
box-shadow: 5px 6px 2px 0px rgba(0,0,0,0.55);


`;
const InputButton = styled.input`
cursor: pointer;
width: 70px;
background-color: whitesmoke;
border: none;
font-size: medium;
transition: all 200ms ease-in;
box-shadow: 5px 6px 2px 0px rgba(0,0,0,0.55);
border-radius: 4px;
background: linear-gradient(90deg, 
    rgba(171,72,237,1) 0%, rgba(250,108,108,1) 50%, rgba(249,181,86,1) 100%);

&:hover{
  color: whitesmoke;
  background-color: rgb(191,219,254);
  transform: scale(1.02);
}

`;


const InputForm = () => {

  const [title, setValue] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title }
    fetchCreate("http://localhost:3001/memo/", data)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder='해야할일을 입력하세요'
        required
        value={title}
        onChange={(e) => setValue(e.target.value)}
      />
      <InputButton
        type="submit"
        value="입력"
      />
    </Form>
  );

}
export default InputForm