
import React from "react";
// plugin that creates slider


// reactstrap components
import {
 
  Container,
  
} from "reactstrap";

function SectionButtons() {

  return (
    <>
      <div className="section-buttons" style={{padding: "0 !important"}}>
        <Container>
        <div style={{textAlign: "center", marginBottom: "60px"}}>
            <h2 style={{marginTop: 0}}>Presentaci&oacute;n del proyecto</h2>
          </div>
        <p className="caja-informasion">La vuelta al mundo deportiva es un proyecto gamificado que tiene como objetivo utilizar
mecánicas y dinámicas propias de los videojuegos (personajes, niveles, recompensas…) para
motivar al alumnado a alcanzar los objetivos educativos detallados en el currículum, desde el
área de Educación Física.
<br></br>
<br></br>Este proyecto gamificado ofrece multitud de ventajas. Entre ellas, se puede destacar la
posibilidad de crear un proyecto interdisciplinar sobre “Grandes Géneros Literarios” o la
infinidad de contenidos, propios del área, a desarrollar (el trabajo en equipo, los deportes o
juegos populares de cada uno de los países que el alumnado visite de forma virtual, etcétera).
Asimismo, utilizaremos las TIC para involucrar de manera significativa al alumnado.
<br></br>
<br></br>
Se trata de una apuesta que el Director Sullivan, propio de la obra original “la vuelta al mundo
en 80 días, propone a principios del curso escolar al alumnado de 5º de Educación Primaria
haciéndoles protagonistas de su propio proceso de enseñanza-aprendizaje a través de retos
deportivos a medida que vayan avanzando en la vuelta al mundo deportiva.</p>
      
          
          
          <div  style={{textAlign: "center", marginBottom: "60px", marginTop: "80px"}}>
            <h2>¡Síguenos!</h2>
          </div>
          
          <div className="cajaContenedoraIg">
            <div>
              <a href="https://instagram.com/educacionfisik" target="_blank" rel="noreferrer">
              <div style={{textAlign: "center", fontSize: "18px", fontWeight: "bold", marginBottom: "10px"}}>
                @educacionfisik
              </div>
              <div className="conteneur-principal"
              style={{
                backgroundImage:
                  "url(" + require("assets/img/instagram.png") + ")"
              }}>
            </div>
            </a>
            </div>
            <div>
            <a href="https://instagram.com/oposiciones.ef" target="_blank" rel="noreferrer">
              <div style={{textAlign: "center", fontSize: "18px", fontWeight: "bold", marginBottom: "10px"}}>
                @oposiciones.ef
              </div>
                <div className="conteneur-principal"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/instagram.png") + ")"
                }}>
              </div>
              </a>
            </div>
          
          </div>
          
          
          <br />
          
        </Container>
      </div>
    </>
  );
}

export default SectionButtons;
