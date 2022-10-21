import InputText from './molecules/InputText/index';
import { Button } from './atoms/Button/index';
import { Link } from './Link/index';
export const Login = () => {

  return (
    <div className="flex justify-center w-screen h-screen bg-gray-50">
      <div className="grid w-full h-full grid-cols-2 mas-w-screen-lg">
        <aside className="flex">
          <img src="/hero.svg" alt="" />
        </aside>
        <main className="flex flex-col items-center justify-center gap-16">
          <h1 className="text-3xl font-bold">Controle seus gastos</h1>
          <form className="flex flex-col w-full gap-4">
            <InputText label="Email" type="email" />
            <InputText label="Senha" type="password" />
            <Button>Login</Button>
          </form>
          <Link href='/register'>Criar nova Conta</Link>
        </main>
      </div>
    </div>
  )
}

export default Login