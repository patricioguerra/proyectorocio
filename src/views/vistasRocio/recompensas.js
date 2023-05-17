import React from 'react';
import { Container } from 'reactstrap';
import ReactPlayer from 'react-player'
import SectionNavbar from 'components/Navbars/SectionsNavbar';

function Recompensas(props) {
  return (
<div style={{ minHeight: "100vh",  backgroundImage: "url(" + require("assets/img/gamificafondo3.png") + ")"}}>
          <SectionNavbar/>

      <div className="section-buttons" style={{padding: "0 !important"}}>
        <Container>
        <div style={{textAlign: "center", padding: "60px 0 40px 0"}}>
            <h2 style={{marginTop: 60}}>Recompensas</h2>
          </div>
          <div>
            <p style={{fontSize: 20, fontWeight: 600, marginBottom: 40}}>
            En este proyecto podréis conseguir multitud de recompensas que podréis utilizar en cualquier
momento. ¡Vosotros decidís! Además, las podréis almacenar en vuestro pasaporte de la vuelta
al mundo deportiva, tenéis unos bolsillos dentro del pasaporte que os permitirán almacenar
todas las cartas recompensas que dispongáis. ¿Cuántas seréis capaces de conseguir?
            </p>
          </div>
                       
          <br />
          <div style={{ width: "100%", paddingBottom: 40}}>
          <div style={{ width: "100%" }}>
          <div style={{position: 'relative', width: '100%', height: 0, paddingBottom: '70.7071%', marginBottom: '0.9em', marginTop: '1.6em', overflow: 'hidden', borderRadius: 8, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', willChange: 'transform'}}>
  <iframe loading="lazy" style={{position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0}} src="https://www.canva.com/design/DAFh-M8lVdE/view?embed" allowFullScreen={true} allow="fullscreen" title="Cartas - Recompensas"></iframe>
</div>
<a href="https://www.canva.com/design/DAFh-M8lVdE/view?utm_content=DAFh-M8lVdE&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Cartas - Recompensas</a> de Rocío

</div>

        </div>
        </Container>
      </div>
    </div>
  );
}

export default Recompensas;