import React from 'react';
import { Container } from 'reactstrap';
import ReactPlayer from 'react-player'
import SectionNavbar from 'components/Navbars/SectionsNavbar';

function Niveles(props) {
  return (
<div style={{ minHeight: "100vh",  backgroundImage: "url(" + require("assets/img/niveles.png") + ")"}}>
          <SectionNavbar/>

      <div className="section-buttons" style={{padding: "0 !important"}}>
        <Container>
        <div style={{textAlign: "center", padding: "60px 0 40px 0", }}>
            <h2 style={{marginTop: 60, fontWeight: 'bold', color: 'black'}}>Niveles y tipos de jugadores</h2>
          </div>
          <div>
            <p style={{fontSize: 20, fontWeight: 600, marginBottom: 40, color: 'black'}}>
            La vuelta al mundo deportiva se consigue con mucho esfuerzo, superación y trabajo en equipo.
Os convertiréis en unos auténticos aventureros hasta alcanzar el éxito como “el aventurero
Fogg”. ¡Sólo algunos de vosotros seréis capaces de conseguirlo!
            </p>
          </div>
          <div style={{display: 'flex',justifyContent: 'center', marginBottom: 50}}>
          <ReactPlayer url={'https://youtu.be/xiAO_dwxONg'} controls={true}/>
          </div>
          <div>
            <p style={{fontSize: 20, fontWeight: 600, marginBottom: 40, color: 'black'}}>
            Hasta llegar al nivel máximo y convertiros en el aventurero Fogg, pasaréis por distintos niveles
que podréis ir consiguiendo y acumulando en vuestro pasaporte de la vuelta al mundo
deportiva. ¡Recuerda que debes ir superando los retos de todos y cada uno de los Países!
            </p>
          </div>                 
          <br />
          <div style={{ width: "100%", paddingBottom: 40}}>
          <div style={{ width: "100%" }}>
  <div style={{ position: "relative", paddingBottom: "56.25%", paddingTop: 0, height: 0 }}>
    <iframe 
      title="PASAPORTE"
      frameBorder="0"
      width="100%"
      height="100%"
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      src="https://view.genial.ly/645394e606dcbc00194b2f7b"
      type="text/html"
      allowScriptAccess="always"
      allowFullScreen={true}
      scrolling="yes"
      allowNetworking="all"
    />
  </div>
</div>

        </div>
        </Container>
      </div>
    </div>
  );
}

export default Niveles;