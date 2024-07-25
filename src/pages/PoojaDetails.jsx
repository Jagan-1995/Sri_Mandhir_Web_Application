import React from "react";
import "./poojaDetails.css";
import PackageCard from "../components/PackageCard";

export default function PoojaDetails() {
  return (
    <div className="poojadetails_container">
      <h2 className="title">Title</h2>
      <p className="description">Descriptions</p>

      <div className="packages">
        <h3 className="title">Packages</h3>

        <div className="packageCards">
          <PackageCard
            price={851}
            title={"Individual Puja"}
            description={"Package for 1 Person"}
          />
          <PackageCard
            price={1251}
            title={"Partner Puja"}
            description={"Package for 2 People"}
          />
          <PackageCard
            price={2001}
            title={"Family Puja"}
            description={"Package for 4 People"}
          />
        </div>
      </div>
    </div>
  );
}
