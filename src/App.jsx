import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Card } from './container/Card'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-LightGray font-Outfit h-screen w-screen flex justify-center items-center">
      <Card/>
    </div>
  )
}