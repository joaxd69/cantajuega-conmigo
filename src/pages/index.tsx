import React, { useEffect } from "react";
import Head from "next/head";
import NewsletterSuscription from "@/components/home/NewsletterSuscription";
import Hero from "@/components/home/Hero";
import Trailer from "@/components/home/Trailer";
import Layout from "@/components/global/Layaout";
import Metodologias from "@/components/home/metodologia/Metodologias";
import { authUser } from "@/functions/user.query";
import Nosotros from "@/components/home/Nosotros";

export default function Home() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      localStorage.setItem("tkn", token);
      setTimeout(() => {
        authUser()
          .then(() => {
            // Obtener la URL actual
            let url = window.location.href;

            // Buscar el parámetro "token" y su valor
            const regex = /[?&]token=([^&#]*)/;
            const match = regex.exec(url);

            // Si se encontró el parámetro "token"
            if (match != null) {
              // Eliminar el parámetro y su valor de la URL
              url = url.replace(match[0], "");

              // Reemplazar la URL actual sin el parámetro "token"
              window.history.replaceState(null, "", url);
            }
          })
          .catch((e) => console.log("Auth failed", e));
      }, 200);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Cantajuega conmigo</title>
        <meta name="description" content="Cantajuega conmigo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex text-black overflow-x-hidden min-h-screen m-0">
        <Layout className="p-0">
          <Hero />
          <Nosotros/>
          <Metodologias />
          {/* <Trailer />  */}
          <NewsletterSuscription />
        </Layout>
      </main>
    </>
  );
}
