export default function Signin() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="grid h-screen w-full">
        <div className="w-full flex justify-center items-center bg-gray-100">
          <div className="flex flex-col text-center w-72">
            <h1 className="text-2xl text-slate-800 font-bold">Login</h1>
            <span className="text-gray-400">Welcome to Market Plata</span>
            <div className="mt-5 flex flex-col">
              <div>
                <form>
                  <label className="block">
                    <input
                      type="text"
                      value="Email"
                      placeholder="Email"
                      disabled
                      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                      "
                    />
                  </label>
                  <label className="block mt-3">
                    <input
                      type="text"
                      value="Senha"
                      placeholder="Senha"
                      disabled
                      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                      "
                    />
                  </label>
                  <div className="my-2 flex justify-end text-xs text-gray-500">
                    <a href="./">Esqueceu a sua senha</a>
                  </div>
                  <div className="w-full">
                    <button className="rounded-md bg-gray-800 w-full hover:bg-gray-700 text-gray-200 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                      Login
                    </button>
                  </div>
                  <div className="text-gray-500 text-xs my-3">
                    Você não tem uma conta?{" "}
                    <a className="text-blue-500" href="./">
                      Cadastre-se agora
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
