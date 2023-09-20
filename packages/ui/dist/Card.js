import dynamic from 'next/dynamic';
import React from 'react';

const DynamicButton = dynamic(() => import('./Button.js').then((mod) => mod.Button));
function Card({ showButton }) {
  return showButton ? /* @__PURE__ */ React.createElement(DynamicButton, null) : /* @__PURE__ */ React.createElement("h2", null, "Card");
}

export { Card };
