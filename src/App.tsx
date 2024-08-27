import './App.css'
import motokoLogo from './assets/motoko_moving.png'
import motokoShadowLogo from './assets/motoko_shadow.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { useQueryCall, useUpdateCall } from '@ic-reactor/react'

function App() {
  const { data: count, call: refetchCount } = useQueryCall({
    functionName: 'get',
  })

  const { call: increment, loading } = useUpdateCall({
    functionName: 'inc',
    onSuccess: () => {
      refetchCount()
    },
  })

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a
          href="https://internetcomputer.org/docs/current/developer-docs/build/cdks/motoko-dfinity/motoko/"
          target="_blank"
        >
          <span className="logo-stack">
            <img
              src={motokoShadowLogo}
              className="logo motoko-shadow"
              alt="Motoko logo"
            />
            <img src={motokoLogo} className="logo motoko" alt="Motoko logo" />
          </span>
        </a>
      </div>
      <h1 className='text-red-700'>Vite + React + Motoko</h1>
      <div className="card">
        <button onClick={increment} disabled={loading} className='
         bg-blue-500 text-white font-bold py-2 px-4 rounded 
         hover:bg-blue-700 border-2 border-blue-500
         disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50'
        >
          count is {count?.toString() ?? 'loading...'}
        </button>
        <p>
          Edit <code>backend/Backend.mo</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite, React, and Motoko logos to learn more
      </p>
    </div>
  )
}

export default App
