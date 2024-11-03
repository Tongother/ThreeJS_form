import { useEffect, useState } from "react";
import { Center, Html } from "@react-three/drei";
import "../App.css"

const PaginaWeb = () => {

    const [sexo, setSexo] = useState("Masculino");
    const [hidden, setHidden] = useState(true);

    const cambiarSexo = (sexo) => {
        setSexo(sexo);
        setHidden(true);
    }

    return (
        <Center position={[-0.004, 1.34, -.006]} rotation={[-.03, 0, 0]}>
            <Html position={[0, 0, 0.5]} occlude="blending" transform distanceFactor={1.5}>
                <div className="rootPagina">
                    <header className="headerFormulario">
                        <img src="/spaceX.png" alt="Logo de spaceX" width={170} height={50} style={{marginLeft: "5px"}}/>
                        <ul>
                            <a href="https://www.spacex.com/vehicles/falcon-9/"><li>FALCON 9</li></a>
                            <a href="https://www.spacex.com/vehicles/falcon-heavy/"><li>FALCON HEAVY</li></a>
                            <a href="https://www.spacex.com/vehicles/dragon/"><li>DRAGON</li></a>
                            <a href="https://www.spacex.com/vehicles/starship/"><li>STARSHIP</li></a>
                        </ul>
                    </header>
                    <main>
                        <section className="seccionFormulario">
                            <article>
                                <div>
                                    <img src="https://readme-typing-svg.herokuapp.com?color=FFFFFF&size=30&center=true&vCenter=true&height=70&lines=ENCUENTRA+TU+FUTURO;+CREE+EN+EL+FUTURO;+GENERA+UN+IMPACTO;+VIVE+EN+SPACEX;"/>
                                    <p>SpaceX busca talentos de talla mundial dispuestos a acometer proyectos desafiantes que, en última instancia, permitirán la vida en otros planetas.</p>
                                    <p>Información de contacto</p>
                                    <hr style={{border: 0, height:"1px", backgroundColor: "white"}}/>
                                </div>
                                <form className="formulario">
                                    <div className="cajaInputs">
                                        <div>
                                            <label htmlFor="nombre">Nombre*:</label>  
                                            <input type="text" id="nombre" name="nombre" className="elementoInput" required />
                                        </div>
                                        <div>
                                            <label htmlFor="correo">Correo*:</label>    
                                            <input type="email" id="correo" name="correo" className="elementoInput" required />
                                        </div>
                                    </div>
                                    <div className="cajaInfoAdicional">
                                        <p>Información adicional</p>
                                        <hr style={{border: 0, height:"1px", backgroundColor: "white"}}/>
                                    </div>
                                    <div className="cajaInputs">
                                        <div>
                                            <label htmlFor="nombre">Teléfono:</label>  
                                            <input type="tel" id="telefono" name="telefono" className="elementoInput"/>
                                        </div>
                                        <div>
                                            <label htmlFor="correo">Sexo:</label>    
                                            <button type="button" className="elementoInput textoPopover" onClick={() => setHidden(prev => !prev)} style={{position: "relative"}}>{sexo}
                                                <svg  xmlns="http://www.w3.org/2000/svg" style={{top: "52%", transform: "translateY(-50%) rotate(90deg)", position: "absolute", right: "0"}}  width="14"  height="14"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
                                            </button>
                                            <div className={`popover ${hidden ? "hidden": ""}`}>
                                                <button type="button" onClick={() => cambiarSexo("Masculino")} className="textoPopover">Masculino</button>
                                                <button type="button" onClick={() => cambiarSexo("Femenino")} className="textoPopover">Femenino</button>
                                                <button type="button" onClick={() => cambiarSexo("Otro")} className="textoPopover">Otro</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <input type="checkbox" id="terminos_y_condiciones" name="terminos_y_condiciones" value="condiciones" required/>
                                        <label htmlFor="terminos_y_condiciones"> Accepto los terminos y condiciones</label><br></br>
                                    </div>
                                    <div className="mt-4">
                                        <button type="button" className="btnEnviar">Enviar datos</button>
                                    </div>
                                </form>
                            </article>
                        </section>
                    </main>
                    <footer>
                        <p style={{margin: "0", color: "#c8c8c8"}}>Gunther Nettel © 2024</p>
                    </footer>
                </div>
            </Html>
        </Center>
    );
}

export default PaginaWeb;