import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import logo_gto from "../../../assets/img/logo-gto.png";
import logo_gl from "../../../assets/img/logo-gl.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { Icon, List, ListItemText } from "@mui/material";

const Footer = () => {
  const txtColor = "#000F9F";
  const ATENCIONCIUDADANA = [
    {
      titulo: "Recibe datos sobre COVID-19 en GTO",
      href: "https://wa.me/message/BXHLYOD3QURQM1",
    },
    {
      titulo: "Atención Ciudadana Virtual",
      href: "https://api.whatsapp.com/send?phone=524772745825&text=Bienvenido%20a%20Gobierno%20del%20Estado%20de%20Guanajuato%20en%20que%20te%20podemos%20apoyar,%20env%C3%ADa%20este%20texto%20con%20tu%20pregunta",
    },
    {
      titulo: "Conéctate GTO",
      href: "https://wa.me/message/GMOCJ4H3O7UEP1",
    },
    {
      titulo: "Canal de Telegram",
      href: "https://t.me/Conectate_Gto",
    },
  ];

  const CEDE = [
    {
      icon: "place",
      titulo:
        "Centro de Gobierno Irapuato, Vialidad Interior sobre Av. Siglo XXI No. 412. Predio Los Sauces, Irapuato Gto",
    },
    {
      icon: "call",
      titulo: "473-735-3626 al 33",
    },
  ];

  const TRANSPARENCIA = [
    {
      titulo: "Directorio",
      href: "https://transparencia.guanajuato.gob.mx/transparencia/informacion_publica_directorio.php",
      icon: "circle",
    },
    {
      titulo: "Estructura Orgánica",
      href: "https://desarrollosocial.guanajuato.gob.mx/estructura-organica/",
      icon: "circle",
    },
    {
      titulo: "Tabulador de sueldos",
      href: "https://transparencia.guanajuato.gob.mx/transparencia/informacion_publica_tabulador.php",
      icon: "circle",
    },
    {
      titulo: "Indicadores y metas",
      href: "https://transparencia.guanajuato.gob.mx/transparencia/informacion_publica_metas.php",
      icon: "circle",
    },
    {
      titulo: "Auditorias",
      href: "https://strc.guanajuato.gob.mx/auditoriaspracticadas/",
      icon: "circle",
    },
    {
      titulo: "Solicitudes respondidas",
      href: "https://transparencia.guanajuato.gob.mx//acceso_informacion/solicitudes.php",
      icon: "circle",
    },
    {
      titulo: "Cuenta pública",
      href: "https://transparencia.guanajuato.gob.mx//transparencia/informacion_publica_cuenta_publica.php",
      icon: "circle",
    },
    { titulo: "Aviso de privacidad integral", icon: "circle" },
  ];

  const REDES = [
    {
      icon: <FacebookIcon />,
      social: "@SEDESHUgto",
      href: "https://www.facebook.com/Secretar%C3%ADa-de-Desarrollo-Social-y-Humano-457581867618996/",
    },
    {
      icon: <TwitterIcon />,
      social: "@SEDESHUgto",
      href: "https://twitter.com/SedeshuGto",
    },
    {
      icon: <YouTubeIcon />,
      social: "@SEDESHUgto",
      href: "https://www.youtube.com/channel/UCnKy4CGjm8FMwArz0Mhntrg",
    },
    {
      icon: <InstagramIcon />,
      social: "@SEDESHUgto",
      href: "https://www.instagram.com/SedeshuGto/",
    },
  ];
  return (
    <Grid container paddingTop={"3rem"}>
      {/* GOBIERNO */}
      <Grid xs={12} md={6} lg={6}>
        <Grid container>
          <Grid
            xs={12}
            md={6}
            lg={6}
          >
            <img src={logo_gto} alt="logoGto" />
          </Grid>
          <Grid xs={12} md={6} lg={6}>
            <img src={logo_gl} alt="logoGl" height={84} width={84} />
          </Grid>
        </Grid>

        <Grid container paddingTop={"1rem"}>
          <Grid xs={12} md={6} lg={6}>
            <Typography component={"p"} color={txtColor} fontWeight={"500"}>
              ATENCIÓN CIUDADANA
            </Typography>
            <List sx={{ paddingTop: "1rem" }}>
              {ATENCIONCIUDADANA.map((item, idx) => (
                <Box component="li" marginBottom={2} key={idx}>
                  <Icon sx={{ color: `${txtColor}`, mr: 1 }} fontSize="small">
                    call
                  </Icon>
                  <Link
                    component="a"
                    underline="none"
                    href={item.href}
                    color={txtColor}
                    align="center"
                  >
                    {item.titulo}
                  </Link>
                </Box>
              ))}
            </List>
          </Grid>

          <Grid xs={12} md={6} lg={6}>
            <Typography component={"p"} color={txtColor} fontWeight={"500"}>
              NUESTRA CDE
            </Typography>
            <List sx={{ paddingTop: "1rem" }}>
              {CEDE.map((item, idx) => (
                <Box component="li" marginBottom={2} key={idx}>
                  <Icon sx={{ color: `${txtColor}`, mr: 1 }} fontSize="small">
                    {item.icon}
                  </Icon>
                  <Link underline="none" color={txtColor}>
                    {item.titulo}
                  </Link>
                </Box>
              ))}
            </List>
          </Grid>
        </Grid>
      </Grid>

      {/* TRANSPARENCIA */}
      <Grid xs={12} md={6} lg={4}>
        <Typography component={"p"} color={txtColor} fontWeight={"500"}>
          UNIDAD DE TRANSPARENCIA Y ARCHIVOS DEL PORDER EJECUTIVO DE GUANAJUATO
        </Typography>
        <List sx={{ paddingTop: "1rem" }}>
          {TRANSPARENCIA.map((item, idx) => (
            <Box component="li" key={idx}>
              <Icon sx={{ color: `${txtColor}`, mr: 1 }} fontSize="small">
                {item.icon}
              </Icon>
              <Link underline="none" color={txtColor} href={item.href}>
                {item.titulo}
              </Link>
            </Box>
          ))}
        </List>
      </Grid>

      {/* REDES */}
      <Grid xs={12} md={6} lg={2}>
        <Typography component={"p"} color={txtColor} fontWeight={"500"}>
          SíGUENOS EN NUESTRAS REDES
        </Typography>

        <List sx={{ paddingTop: "1rem" }}>
          {REDES.map((item, idx) => (
            <Box component="li" key={idx} marginBottom={"1rem"}>
              <Icon sx={{ color: `${txtColor}`, mr: 1 }} fontSize="small">
                {item.icon}
              </Icon>
              <Link underline="none" color={txtColor} href={item.href}>
                {item.social}
              </Link>
            </Box>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default Footer;

{
  /* <Grid item xs={12} md={3}>
        <Box width={"100%"}>
          <Box height={24} width={35}>
            <img src={logo_gto} alt="logoGto" />
          </Box>
        </Box>

        <Box marginTop={6} marginBottom={4}>
          <Typography component={"p"} color={txtColor} fontWeight={"500"}>
            ATENCIÓN CIUDADANA
          </Typography>
        </Box>

        <List>
          {ATENCIONCIUDADANA.map((item, idx) => (
            <Box component="li" marginBottom={2} key={idx}>
              <Icon sx={{ color: `${txtColor}`, mr: 1 }} fontSize="small">
                call
              </Icon>
              <Link
                component="a"
                underline="none"
                href={item.href}
                color={txtColor}
              >
                {item.titulo}
              </Link>
            </Box>
          ))}
        </List>
      </Grid>

      <Grid item xs={12} md={3}>
        <Box width={"100%"}>
          <Box height={80} width={80}>
            <img src={logo_gl} alt="logoGl" />
          </Box>
        </Box>

        <Box marginTop={6} marginBottom={4}>
          <Typography component={"p"} color={txtColor} fontWeight={"500"}>
            ATENCIÓN CIUDADANA
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} md={3}>
        <Typography
          align={"center"}
          variant={"subtitle2"}
          color="textSecondary"
          gutterBottom
        >
          &copy; All rights reserved
        </Typography>
        <Typography
          align={"center"}
          variant={"caption"}
          color="textSecondary"
          component={"p"}
        >
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </Typography>
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography
          align={"center"}
          variant={"subtitle2"}
          color="textSecondary"
          gutterBottom
        >
          &copy; All rights reserved
        </Typography>
        <Typography
          align={"center"}
          variant={"caption"}
          color="textSecondary"
          component={"p"}
        >
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </Typography>
      </Grid> */
}
