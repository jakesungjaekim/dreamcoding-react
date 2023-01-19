import React, { useState } from 'react'


const AppMentor = () => {

    const [person, setPerson] = useState({
        name: '엘리',
        title: '개발자',
        mentor: {
            name: '밥',
            title: '시니어개발자'
        }
    })


  return (
    <div>
        <h1>
            {person.name}는 {person.title} 
        </h1>
        <p>
            {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
        </p>
        <button onClick={()=>{
            const name = prompt(`What's your mentor's name?` )
            setPerson(person => ({...person, mentor: {...person.mentor, name: name}}))
        }}>
            멘토이름바꾸기
        </button>
        <button onClick={()=>{
            const title = prompt(`What's your mentor's title?`)
            setPerson(prev => ({...person, mentor: {...prev.mentor, title:title}}))
        }}>
            멘토타이틀바꾸기
        </button>

    </div>
  )
}

export default AppMentor;

