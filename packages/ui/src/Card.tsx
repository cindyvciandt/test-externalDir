import dynamic from 'next/dynamic'
import React from "react"

type CardProps = {
  showButton: boolean;
}

const DynamicButton = dynamic(() => import('./Button').then(mod => mod.Button))

export function Card({ showButton }: CardProps) {

  return (showButton ? <DynamicButton/> : <h2>Card</h2>)
}
