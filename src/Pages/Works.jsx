import React, { useEffect } from "react";
import RealisationsCard from "../Components/RealisationsCard";
import { Helmet } from "react-helmet";

export default function Realisations() {
  
  return (
    <>
    <Helmet>
      <title>Mes réalisations, John Doe</title>
      <meta name="description" content="Découvrez les réalisations de John Doe, developpeur web." />
      <meta name="robots" content="index, follow" />
    </Helmet>

    <div>
      <div className="container-fluid banner p-0">
      <picture>
        <source srcSet="/banner/banner.jpg" media="(min-width: 992px)"></source>
        <source srcSet="/banner/banner-tablette.jpg" media="(min-width: 768px)" ></source>
        <img src="/banner/banner-mobile.jpg"alt="image de fond"/>
      </picture>
      </div>
      <div className="container mt-5">
        <div className="text-center">
          <h2 className="text-uppercase">Portfolio</h2>
          <p>Voici quelques-unes de mes réalisations</p>
          <div className="border-bottom border-primary w-25 m-auto border-3 mb-5"></div>
        </div>
        <div className="my-3 mb-5">
          <RealisationsCard />
        </div>
      </div>
    </div>
    </>
  );
}