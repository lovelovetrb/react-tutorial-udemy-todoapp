import React, { useState } from 'react'
import './App.css'
import { InCompleteTodos } from './components/InCompleteTodos'
import { InputTodo } from './components/InputTodo'
import { CompleteTodos } from './components/CompleteTodos'

export const App = () => {
  const [todoText, setTodoText] = useState('')
  const [incompleteTodos, setIncompleteTodos] = useState([])
  const [completeTodos, setcompleteTodos] = useState([])

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const addIncompleteTodo = () => {
    if(todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos)
  }

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos]
    newTodos.splice(index, 1)
    setIncompleteTodos(newTodos)
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos]
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]]

    newIncompleteTodos.splice(index, 1)
    setIncompleteTodos(newIncompleteTodos)
    setcompleteTodos(newCompleteTodos)
    
  }

  const onClickBack = (index) => {
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]]
    const newCompleteTodos = [...completeTodos]

    newCompleteTodos.splice(index, 1)
    setIncompleteTodos(newIncompleteTodos)
    setcompleteTodos(newCompleteTodos)
  }

  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={addIncompleteTodo} disabled={incompleteTodos.length >= 5 }/>
      {incompleteTodos.length >= 5 && (<p style={{color:'red'}}>登録できるTodoは5個までです,消費しましょう！</p>)}
      <InCompleteTodos todos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  )
}
