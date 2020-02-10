import React, { useState, useEffect } from 'react'
import TextLoop from 'react-text-loop'
import cxs from 'cxs/component'

const Example = cxs('div')({
  fontSize: '24px'
})

const Title = cxs('div')({
  marginBottom: '5px',
  fontSize: '10px',
  fontWeight: 600,
  textTransform: 'uppercase',
  color: '#aaa'
})

const Section = cxs('div')({
  marginBottom: '50px',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'
})

const StyledTextLoop = cxs(TextLoop)({
  display: 'block'
})

const NewHome = () => {
  
  return <Section>
    <Title>Default</Title>
    <Example>
      <TextLoop>
        <span>Trade faster</span>
        <span>Increase sales</span>
        <span>Stock winners</span>
      </TextLoop>{' '}
      in every category.
    </Example>
  </Section>
}

export default NewHome
