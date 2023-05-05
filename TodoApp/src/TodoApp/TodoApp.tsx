import { useEffect, useState } from 'react';
import { CiEdit, CiTrash } from 'react-icons/ci';

import Style from './TodoApp.module.css';

function getStorage() {
  const list = localStorage.getItem('list');
  if (list) return JSON.parse(list);
  else return [];
}
export default function TodoApp() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getStorage());
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(0);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);
  const handleChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const deleteItem = (id) => {
    setList(list.filter((item, index) => id != index));
  };

  const handleKeyEnter = (e) => {
    if (e.key == 'Enter' && !editing) {
      e.preventDefault();
      if (e.target.value == '') return;
      setName(e.target.value);
      const newList = [...list, name];
      setList(newList);
      setName('');
    } else if (e.key == 'Enter' && editing) {
      e.preventDefault();
      setName(e.target.value);
      const newList = [...list];

      const update = newList.map((item, index) => {
        if (index == editId) {
          return name;
        } else return item;
      });
      setList(update);
      setName('');
      setEditing(false);
    }
    return;
  };
  return (
    <div className={Style.container}>
      <h1> Todo App </h1>
      <div className={Style.form}>
        <form className={Style.form}>
          <input
            value={name}
            type="text"
            onChange={(e) => handleChange(e)}
            onKeyPress={(e) => handleKeyEnter(e)}
          />
        </form>
      </div>
      <div className={Style.list}>
        <ul>
          {list.map((item, index) => {
            return (
              <div key={index} className={Style.listItems}>
                <li>{item}</li>
                <div className={Style.listIcons}>
                  <button
                    onClick={() => {
                      setEditId(index);
                      setEditing(true);
                      setName(item);
                    }}
                  >
                    <CiEdit></CiEdit>
                  </button>
                  <button
                    onClick={() => {
                      deleteItem(index);
                    }}
                  >
                    <CiTrash></CiTrash>
                  </button>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
