import styled from 'styled-components';


const InputForm = ({ memos }) => {

  const Input = styled.input`
    width: 100%;
    padding: 8px 12px;
    margin-right: 16px;
    color: rgb(107 114 128);
    border-radius: 4px;

  `;
  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="value"
          placeholder='해야할일을 입력하세요'
          required
          value={value}
          onChange={handleChange}
        />
      </form>
    </>
  );

}
export default InputForm