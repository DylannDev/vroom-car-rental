import React from "react";
import PageNavigation from "../components/PageNavigation";
import { nanoid } from "nanoid";
import Faq from "../components/Faq";

function Aide() {
  return (
    <div className="mb-40">
      <PageNavigation>Aide</PageNavigation>
      <Faq />
    </div>
  );
}

export default Aide;
