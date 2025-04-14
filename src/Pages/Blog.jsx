import React, { useEffect } from "react";
import BlogCard from "../Components/BlogCard";

export default function Blog() {


  return (
    <div>
      <div className="container-fluid banner"></div>
      <picture>
        <source srcSet="/banner/banner.jpg" media="(min-width: 992px)"></source>
        <source srcSet="/banner/banner-tablette.jpg" media="(min-width: 768px)" ></source>
        <img src="/banner/banner-mobile.jpg"alt="image de fond"/>
      </picture>
      <div className="container mt-5">
        <div className="text-center">
          <h2 className="text-uppercase">blog</h2>
          <p>Retrouvez ici quelques articles sur le développement web.</p>
          <div className="border-bottom border-primary w-25 m-auto border-3 mb-5"></div>
        </div>

        <div className="my-3 mb-5">
          <BlogCard />
        </div>
      </div>
    </div>
  );
}

