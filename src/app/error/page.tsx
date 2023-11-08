import Link from "next/link";

const PaginaErro = () => {
    return (  
        <>
        <div className="w-[100vw] h-[100vh] bg-white">
            <img src="er.png" alt="" className="ml-16 "/>
            <p className="text-3xl ml-[165px] mb-5 md:ml-2">Esta página da web não está disponível</p>
            <p className="opacity-20 ml-[165px] md:ml-2">ERR_NAME_NOT_RESOLVED</p>

            <Link href="/">
                <button className="bg-[#1877F2] text-white text-ls py-2 px-5 rounded ml-[165px] mt-10 md:ml-2">Recarregar</button>
            </Link>
        </div>
        </>
    );
}
 
export default PaginaErro;