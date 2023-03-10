

const Home = () => {
  return (
    <>
    <div className="login">
        <div className="container sm:px-10">
            <div className="block xl:grid grid-cols-2 gap-4">
             
                <div className="hidden xl:flex flex-col min-h-screen">
                    <a href="" className="-intro-x flex items-center pt-5">                     
                        <span className="text-white text-lg ml-3"> GSAN 4.0 </span> 
                    </a>
                    <div className="my-auto">
                        <img alt="Logotipo Consenso" className="-intro-x w-1/2 -mt-16" src="Images/consenso-logo.svg"/>
                        <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                            Consenso Tecnologia     
                        </div>                      
                    </div>
                </div>
    
                <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
                    <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                        <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                            Login
                        </h2>
                        <div className="intro-x mt-8">
                            <input type="text" className="intro-x login__input form-control py-3 px-4 block" placeholder="Email"/>
                            <input type="password" className="intro-x login__input form-control py-3 px-4 block mt-4" placeholder="Senha"/>
                        
                        <div className="intro-x flex text-slate-600 dark:text-slate-500 text-xs sm:text-sm mt-4">
                            <div className="flex items-center mr-auto">
                                <input id="remember-me" type="checkbox" className="form-check-input border mr-2"/>
                                <label className="cursor-pointer select-none" htmlFor="remember-me">Lembrar-me</label>
                            </div>
                            <a href="">Esqueceu a senha?</a> 
                        </div>
                        <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                            <button className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top">Login</button>
                            <button className="btn btn-outline-secondary py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 align-top">Cadastrar</button>
                        </div>                 
                </div>
             </div>
            </div>
        </div>
    </div>
 
     
    </div>
    </>
  )
}

export default Home