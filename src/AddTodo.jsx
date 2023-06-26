import React, {useState} from 'react';


export default function AddTodo(props) {
  const [item, setItem] = useState('');

  const handleChange = (e) => {
    setItem(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem('');
    props.item(item); // Pass the item value as an argument
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <input
        type="text"
        name="item"
        value={item}
        onChange={handleChange}
        placeholder="enter todo"
      />
      <button type="submit">Add todo</button>
    </form>
  );
}
