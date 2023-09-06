import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div``

const StyledInput =styled.input`
`

function WordInput({id,name}) {
  return (
    <>
    <label htmlFor={name}> {name}</label>
   <StyledInput type={"text"} id={name} name={name}></StyledInput>
    </>
  )
}

export default WordInput