import React from "react";
import { SectionContent, Message1, MessageSpace, Message2 } from "./StyleHome";
import { StylesHome } from "./StyleHome";
import { StylesDivExplore } from "./StyleHome";
import { StylesSpace } from "./StyleHome";

export const Home = () => {
  return (
    <>
      <StylesHome>
        <SectionContent>
          <StylesSpace>
            <div>
              <Message1>SO, YOU WANT TO TRAVEL TO</Message1>
              <MessageSpace>SPACE</MessageSpace>

              <Message2>
                Let's face it; if you want to go to soace, you might as well
                genuinely go to outer space and not hover kind of on the Edge of
                it. Well sit back, and relax because we'll give you a truly out
                of this world experience!
              </Message2>
            </div>

            <StylesDivExplore>EXPLORE</StylesDivExplore>
          </StylesSpace>
        </SectionContent>
      </StylesHome>
    </>
  );
};
