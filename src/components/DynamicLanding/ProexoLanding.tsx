import React from "react";
import "../../styles/batchlist.scss";
import { LinkIcon } from "../icons/link";
import { Blockchain } from "../icons/blockchain";
import { FarmIcon } from "../icons/farm";
import { useTranslation } from "react-i18next";
import { WebSite } from "../icons/WebSite";
import { Facebook } from "../icons/Facebook";
import { Instagram } from "../icons/Instagram";
import { Youtube } from "../icons/Youtube";

export const ProexoLanding = () => {
    const { t } = useTranslation();

    return (<>
        <div className="bg-white card rounded-lg -mr-6 -my-6">
            <div className="bg-white">
                <div id="header" className="hero min-h-screen rounded-t-2xl"
                    style={{ backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/affogato-fde9c.appspot.com/o/Banners%2FPROEXO.jpg?alt=media&token=ec371948-d535-4994-aa54-7e6a7fb2dda3")` }}>
                  <div className=" rounded-t-2xl"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className=" ">                           
                        <div className="mt-8"></div>
                         <h1 className=" mb-4 text-6xl font-black md:text-6xl xl:text-7xl text-white text-shadow: 0 0 10px blue; stroke-text">
                            Plataforma de Trazabilidad
                        </h1>

                            <br />
                            <h1 className=" mb-4 text-6xl font-black md:text-6xl xl:text-7xl text-white stroke-text">Empresa PROEXO
                            </h1>

                            <p className=" mb-6 text-3xl font-light lg:mb-8 md:text-lg lg:text-xl xl:text-4xl text-white stroke-text">
                                Nuestro café trazado con la seguridad de la tecnología de blockchain
                            </p>
                            <div className="flex items-center justify-center mb-8 ">
                                <button className="btn btn-lg bg-orange-400 hover:bg-primary text-white">
                                    <a href="/farmers">
                                        Ir a la Plataforma
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div id="info" className="section relative pt-20 pb-8 md:pt-16 md:pb-0">
                    <div className="container xl:max-w-6xl mx-auto px-4">
                        <div className="flex flex-wrap flex-row -mx-4 text-center">
                            <div
                                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                                data-wow-duration="1s"
                            >
                                <div
                                    className="py-8 px-12 mb-12  border-b border-gray-100 bg-stone-100 shadow-lg transform transition duration-300 ease-in-out hover:-translate-y-2">
                                    <div className="inline-block text-black mb-4">
                                        <Blockchain />
                                    </div>
                                    <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Blockchain</h3>
                                    <p className="text-gray-500">Tecnología y registro de información en una cadena de
                                        bloques segura, transparente y descentralizada.</p>
                                    <br className="w-4" />
                                </div>
                            </div>
                            <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
                                <div
                                    className="py-8 px-12 mb-12  border-b border-gray-100 bg-stone-100 shadow-lg transform transition duration-300 ease-in-out hover:-translate-y-2">
                                    <div className="inline-block text-gray-900 mb-4">
                                        <LinkIcon />
                                    </div>
                                    <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Trazabilidad</h3>
                                    <p className="text-gray-500">Los movimientos en la cadena de valor del café, almacenados
                                        en un blockchain inmutable sin posibilidad de corromper la información.</p>
                                </div>
                            </div>
                            <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
                                <div
                                    className="py-8 px-12 mb-12  border-b border-gray-100 bg-stone-100  shadow-lg transform transition duration-300 ease-in-out hover:-translate-y-2">
                                    <div className="inline-block text-gray-900 mb-4">
                                        <FarmIcon />
                                    </div>
                                    <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Lotes</h3>
                                    <p className="text-gray-500">Cada lote de café, con su productor y finca
                                        correspondiente, es trazado y visible en el blockchain de Ethereum.</p>
                                    <br className="w-4" />
                                </div>
                            </div>
                            <br />
                            <div
                                className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap bg-zinc-100 rounded-lg">
                                <div
                                    className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative ">
                                    <iframe width="100%" height="100%" className={'absolute inset-0 opacity-75'}
                                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=PROEXO,%20Corqu%C3%ADn+(PROEXO,%20Corqu%C3%ADn)&amp;t=k&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />


                                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                                        <div className="lg:w-1/2 px-6">
                                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Dirección: </h2>
                                            Corquín, Copán
                                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">Correo</h2>
                                            <p className="text-indigo-500 mt-1 m-3">
                                                gerencia@proexo.org
                                            </p>

                                        </div>
                                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">


                                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">Teléfono</h2>

                                            <p className="text-indigo-500 leading-relaxed">
                                                (+504) 9888-4100
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

                                    <p className="text-gray-900 text-6xl text-center title-font font-bold  mb-1">
                                        83%
                                    </p>

                                    <div className="flex mb-4 border-b-2 justify-center">
                                        <span className="flex items-center">
                                            Perfil de Taza
                                        </span>
                                    </div>
                                    <p className="leading-relaxed">Socios:</p>

                                    <div className="flex mt-4 items-center justify-center pb-2">
                                        <div className=" items-center">
                                            <span className="leading-relaxed">
                                                <>{t('female')}:</>
                                            </span>
                                        </div>
                                        <span className="flex ml-3 pl-3 py-2 space-x-2s">
                                            <div className="flex ml-6 items-center">

                                                <span className="mr-3 text-2xl font-black">
                                                    44
                                                </span>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="flex  items-center justify-center pb-2">
                                        <div className=" items-center">
                                            <span className="leading-relaxed"><>{t('male')}:</></span>
                                        </div>
                                        <span className="flex ml-3 pl-3 py-2 space-x-2s">
                                            <div className="flex ml-6 items-center">
                                                <span className="mr-3 text-2xl font-black">
                                                    202
                                                </span>
                                            </div>
                                        </span>
                                    </div>

                                    <div className="flex mt-2 items-center justify-center pb-5">
                                        <div className=" items-center">
                                            <span className="leading-relaxed"><>{t('areas')}:</></span>
                                        </div>
                                        <span className="flex ml-3 pl-3 py-2 space-x-2s">
                                            <div className="flex ml-6 items-center">

                                                <span className="mr-3 text-2xl font-black">
                                                    2,245 manzanas
                                                </span>
                                            </div>
                                        </span>
                                    </div>
                                    <p className="leading-relaxed">Productos / Servicios</p>

                                    <p className="leading-relaxed">
                                        - Comercialización
                                    </p>
                                    <p className="leading-relaxed">
                                        - Transporte
                                    </p>

                                    <p className="leading-relaxed">
                                        - Secado
                                    </p>

                                    <p className="leading-relaxed">
                                        - Capitalización
                                    </p>

                                    <p className="leading-relaxed">
                                        - Financiamiento Pre y Post Cosecha
                                    </p>
                                    <p className="leading-relaxed">
                                        - Asistencia Tecnica
                                    </p>

                                    <p className="leading-relaxed">
                                        - Beneficio Humedo
                                    </p>
                                    <p className="leading-relaxed">
                                        - Laboratorio de Catación
                                    </p>
                                    <div className="flex mt-6 items-center justify-center pb-5">


                                    </div>
                                    <p className="leading-relaxed"><>{t('certificates')}:</>
                                    </p>

                                    <p className="leading-relaxed">
                                        Orgánico
                                    </p>
                                    <p className="leading-relaxed">
                                        Comercio Justo/ Fair Trade
                                    </p>
                                    <p className="leading-relaxed">
                                        Con Manos de Mujer
                                    </p>
                                    <p className="leading-relaxed">
                                        Rainforest Alliance
                                    </p>

                                    <br />

                                    <div className=" items-center">
                                        <p className="leading-relaxed"><>{t('review')}:</>
                                        </p>

                                        <span className="leading-relaxed font-black">
                                            <p className="leading-relaxed">
                                                PROEXO es una empresa de economía social que busca y sostiene la primacía del trabajo, opta por la propiedad social de los medios de producción y busca establecer que el excedente generado sea un medio para elevar el nivel de vida de sus miembros.
                                            </p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="fotos"
                    className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg: md:mb-12">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            PROEXO Empresa de Servicios Múltiples PROEXO Limitada
                        </h2>

                    </div>
                    <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto">
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg"
                            src="https://firebasestorage.googleapis.com/v0/b/affogato-fde9c.appspot.com/o/Proexo%2F1.jpeg?alt=media&token=6dbdbc05-a684-4834-9c2e-fd5aaccefdd6"
                            alt="" />
                        <img

                            className="object-cover w-full h-56 rounded shadow-lg"
                            src="https://firebasestorage.googleapis.com/v0/b/affogato-fde9c.appspot.com/o/Proexo%2F2.jpeg?alt=media&token=5366f295-e214-4466-b998-a15b98ac2a0e"
                            alt="" />
                        <img

                            className="object-cover w-full h-56 rounded shadow-lg"
                            src="https://firebasestorage.googleapis.com/v0/b/affogato-fde9c.appspot.com/o/Proexo%2F3.jpeg?alt=media&token=f3eccac9-6178-41a5-af1a-a5244d254420"
                            alt="" />
                        <img

                            className="object-cover w-full h-56 rounded shadow-lg"
                            src="https://firebasestorage.googleapis.com/v0/b/affogato-fde9c.appspot.com/o/Proexo%2F4.jpeg?alt=media&token=376da7da-4bbe-4d43-945e-d8d1574cc222"
                            alt="" />
                    </div>
                </div>

                <div className="bg-gray-100">
                    <footer>
                        <div className="px-4 py-12 pb-0 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">

                            <div className="text-center p-2 ">
                                <h1 className="text-xl font-black"> Proyecto patrocinado por BID LAB y ejecutado por HEIFER
                                </h1>
                            </div>
                            <nav className="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">
                                <div className="px-5 py-2">
                                    <a href="https://heifer.org" rel="noopener noreferrer" target="_blank">
                                        <img alt="heifer" className="w-15 h-10"
                                            src="https://firebasestorage.googleapis.com/v0/b/affogato-fde9c.appspot.com/o/logos%2FHEIFER.png?alt=media&token=69941e33-4321-4d62-8025-662b2fd99554"
                                        />
                                    </a>

                                </div>
                                <div className="px-5 py-2">

                                </div>


                                <div className="px-5 py-2">
                                    <a href="https://bidlab.org" rel="noopener noreferrer" target="_blank">
                                        <img alt="bid lab" className="w-15 h-10"
                                            src="https://firebasestorage.googleapis.com/v0/b/affogato-fde9c.appspot.com/o/assets%2FLogo%20BID%20Lab%20-%20Color%20(SPA).png?alt=media&token=e1c9671a-f1f1-4104-b663-502faa89c893"
                                        />
                                    </a>
                                </div>

                            </nav>
                            <p className="text-center m-2">
                                <a
                                    className="text-gray-600 text-lg font-bold"> Powered by:</a>

                            </p>

                            <div className="mx-auto p-4 flex justify-center">
                                <a href="https://affogato.co" rel="noopener noreferrer" target="_blank"
                                    className="self-center">

                                    <img alt="affogato" className="w-15 h-10"
                                        src="https://firebasestorage.googleapis.com/v0/b/affogato-fde9c.appspot.com/o/logos%2FAffogato.png?alt=media&token=de3b790e-d8fc-4662-b081-a4d7964a87b1"
                                    />
                                </a>
                            </div>
                        </div>
                    </footer>

                    <div className="bg-gray-100 pb-4 m-0 p-0">

                        <p className="text-center ">
                            <a
                                className="text-gray-600 text-lg font-medium"> Redes Sociales</a>
                        </p>
                        <div className="flex justify-center m-4 space-x-6">

                            <span className="inline-flex justify-center w-full gap-3 m-auto md:justify-start md:w-auto">

                                <a className="text-gray-500 hover:text-blue-300" href="https://www.proexo.org/"
                                    rel="noopener noreferrer" target="_blank">
                                    <WebSite />
                                </a>

                                <a className="text-gray-500 hover:text-blue-500"
                                    href="https://www.facebook.com/ProexoHonduras" rel="noopener noreferrer"
                                    target="_blank">
                                    <Facebook />
                                </a>
                                <a className="ml-3 text-gray-500 hover:text-pink-500" href="https://www.instagram.com/proexo_honduras">
                                    <Instagram />
                                </a>
                                <a className="ml-3 text-gray-500 hover:text-red-500"
                                    href="https://www.youtube.com/channel/UCT-LtSDwwNqd7lPt9Rc5Slw"
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    <Youtube />
                                </a>
                            </span>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    </>);
};
