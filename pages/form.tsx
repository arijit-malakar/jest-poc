import { useState } from 'react';
import styles from "../styles/Form.module.scss";

function Form() {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setError('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue) {
      setError('Please enter a value');
    } else {
      alert(`Form submitted with value: ${inputValue}`);
      setInputValue('');
    }
  };

  return (
    <form className="my-form my-4" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className='pb-2' htmlFor="formInput">Input Field</label>
        <input
          type="text"
          className={"form-control " + styles.myForm}
          id="formInput"
          placeholder="Enter a value"
          value={inputValue}
          onChange={handleChange}
        />
        {error && <small className="text-danger">{error}</small>}
      </div>
      <button type="submit" className={"btn btn-primary mt-2 " + styles.button}>
        Submit
      </button>
    </form>
  );
}

export default Form;
