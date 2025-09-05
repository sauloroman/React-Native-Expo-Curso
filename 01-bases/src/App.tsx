// import { BasicTypes } from './typescript/BasicTypes'
// import { ObjectLiteral } from './typescript/ObjectLiteral'
// import { BasicFunctions } from './typescript/BasicFunctions'
// import { Counter } from "./components/Counter"
// import { LoginPage } from "./components/LoginPage"
// import { UsersPage } from './components/UsersPage';
import { FormsPage } from "./components/FormsPage"
import { AuthProvider } from "./context/AuthContext"

function App() {
  return (
    <AuthProvider>
      <div className='flex flex-col justify-center items-center h-screen'>
        <h1 className='text-2xl font-bold text-center py-5'>React + Typescript</h1>
        {/* <BasicTypes /> */}
        {/* <ObjectLiteral /> */}
        {/* <BasicFunctions /> */}
        {/* <Counter /> */}
        {/* <LoginPage /> */}
        {/* <UsersPage /> */}
        <FormsPage />
      </div>
    </AuthProvider>
  )
}

export default App
