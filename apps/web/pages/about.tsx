import { useState } from 'react'
import Hello from '../components/Hello'
import dynamic from 'next/dynamic'
import { Card, Header } from 'ui'

export default function About(): JSX.Element {
  const [showComp, SetShowComp] = useState(false)
  const DynamicGFG = dynamic(() => import('../components/GFC').then(mod => mod.GFG))
  const DynamicComponent = dynamic(() => import('../components/Message').then(mod => mod.Message))

  return (
    <div>
      <h1>My Page</h1>
      <Header/>
      {showComp ? <DynamicGFG /> : <Hello />}
      {showComp ? <Card showButton={showComp} /> : <Hello />}
      <button onClick={() => SetShowComp(!showComp)}>
        Toggle Component
      </button>
    </div>
  )
}
