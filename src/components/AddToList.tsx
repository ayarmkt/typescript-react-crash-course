import React, { useState } from 'react';
import { People } from '../App';

interface Props {
  setPeople: React.Dispatch<React.SetStateAction<People['people']>>;
  people: People['people'];
}

const AddToList: React.FC<Props> = ({ setPeople, people }) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    note: '',
    img: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    if (!input.name || !input.age) return;

    //set new people
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        img: input.img,
        note: input.note,
      },
    ]);

    //reset input
    setInput({
      name: '',
      age: '',
      note: '',
      img: '',
    });
  };

  return (
    <div className='AddToList'>
      <input
        type='text'
        onChange={handleChange}
        //onChange={(e) => {}}
        className='AddToList-input'
        name='name'
        value={input.name}
        placeholder='Name'
      />
      <input
        type='text'
        onChange={handleChange}
        className='AddToList-input'
        name='age'
        value={input.age}
        placeholder='Age'
      />
      <input
        type='text'
        onChange={handleChange}
        className='AddToList-input'
        name='img'
        value={input.img}
        placeholder='Image Url'
      />
      <textarea
        onChange={handleChange}
        //onChange={(e) => {}}
        className='AddToList-input'
        name='note'
        value={input.note}
        placeholder='Note'
      />
      <button
        onClick={handleClick}
        //onClick={(e) => {}}
        className='AddToList-btn'
      >
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
