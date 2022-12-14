import React from 'react'

const style = {
    backgroundColor: '#ffffe0',
    width: '400px',
    minHeight: '200px',
    padding: '8px',
    margin: '8px',
    borderRadius: '8px'
}

export const InCompleteTodos = (props) => {
    const {todos, onClickComplete, onClickDelete} = props
    return (
        <div style={style}>
            <p className='title'>未完了のTodo</p>
            <ul>
            {todos.map((todo, index) => {
                return(
                <div key={todo} className='list-row'>
                    <li>{todo}</li>
                    <button onClick={() => onClickComplete(index)}>完了</button>
                    {/* 関数に引数を渡すときはアロー関数を追加する */}
                    <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
                )
            })}
            </ul>
        </div>
    )
}
