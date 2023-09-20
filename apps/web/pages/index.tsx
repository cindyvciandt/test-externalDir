import { useState } from 'react'
import Hello from '../components/Hello'
import dynamic from 'next/dynamic'

export default function Home(): JSX.Element {
  const [showComp, SetShowComp] = useState(false)
  const DynamicGFG = dynamic(() => import('../components/GFC').then(mod => mod.GFG))
  const DynamicComponent = dynamic(() => import('../components/Message').then(mod => mod.Message))

  return (
    <div>
      <h1>My Page</h1>
      {showComp ? <DynamicGFG /> : <Hello />}
      {showComp ? <DynamicComponent /> : <Hello />}
      <button onClick={() => SetShowComp(!showComp)}>
        Toggle Component
      </button>
    </div>
  )
}
