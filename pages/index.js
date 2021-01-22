import Head from 'next/head'
import styles from '../styles/Home.module.css'

import capa from '../assets/mais_aceso_que_o_diabo_capa.jpg'
import spotify from '../assets/plataformas/icone_spotify_vermelho.png'
import deezer from '../assets/plataformas/icone_deezer_vermelho.png'
import youtube from '../assets/plataformas/icone_youtube_vermelho.png'
import appleMusic from '../assets/plataformas/icone_apple_vermelho.png'
import tidal from '../assets/plataformas/icone_tidal_vermelho-01.png'

import facebookIcon from '../assets/icons/brancos/icone_facebook_branco.png'
import instagramIcon from '../assets/icons/brancos/icone_instagram_branco.png'
import youtubeIcon from '../assets/icons/brancos/icone_youtube_branco-01.png'

import perfil from '../assets/imagem_perfil.jpg'

export default function Home() {
  return (
    <div>
    <div className={styles.container}>
      <Head>
        <title>Apenas Juno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.initialApp}>
        <header className={styles.containerHeader}>
            <h1>Apenas Juno</h1>
            <div className={styles.menuMobile}>
              <span></span>
              <span></span>
              <span></span>
            </div>
        </header>
        <div className={styles.containerMain}>
          <img src={capa} alt="Capa" />
          <div className={styles.plataforms}>
              <h1>mais aceso que <br/>o <strong>DIABO</strong></h1>
              <h2>OUÇA  &nbsp;AGORA</h2>
              <div className={styles.containerPlataforms}>
                <img className={styles.ajuste} src={spotify} alt="spotify"/>
                <img className={styles.ajuste} src={deezer} alt="deezer"/>
                <img src={youtube} alt="youtube"/>
                <img  src={appleMusic} alt="Apple Music"/>
                <img className={styles.ajuste} src={tidal} alt="tidal"/>
              </div>
          </div>
        </div>
      </section>
      <div className={styles.socialMedia}>
        <div className={styles.containerSocialMedia}>
          <img src={facebookIcon} alt="facebook" />
          <img className={styles.instagram} src={instagramIcon} alt="instagram" />
          <img src={youtubeIcon} alt="youtube" />
        </div>
      </div>
    </div>
      <section className={styles.section2}>
          <img src={perfil} alt="Jonathan Souto"/>
          <div className={styles.containerText}>
            <div className={styles.containerContent}>
              <h1>Apenas juno</h1>
              <p>Orgulhosamente potiguar, Apenas Juno nasce em um momento de incertezas, porém com uma convicção, a necessidade de expressar aquilo que sente, transborda e escorre de si. Multi Artista, cantor, compositor, ator, médico e monstro. Apenas Juno canta e compõe sobre seus desejos, lembranças, suas desilusões amorosas e cotidianas. Sua arte descortina-se através do rock e folk ganhando veracidade a partir de suas letras que somam-se ao seu visual extravagante, em um contraste de normalidade e excentricidade.</p>
              <h2>CONTATO@APENASJUNO.COM</h2>
            </div>
          </div>
      </section>
      <footer className={styles.footerPage}>
        <div className={styles.containerFooter}>
          <h1>apenas juno</h1>
          <p>2020</p>
        </div>
      </footer>
    </div>
  )
}
