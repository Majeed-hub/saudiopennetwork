// import { BorderBeam } from "./components/magicui/border-beam";
// import AnimatedGridPattern from "./components/magicui/animated-grid-pattern";
// import React from 'react';
// import "./styles/globals.css";
// import {cn} from './lib/utils';
// import saudiopennetwork_logo from "./assets/saudiopennetwork_logo.png";
// export default function App() {
//   return (
//     <div className="flex h-screen items-center justify-center">
//       <AnimatedGridPattern
//         numSquares={30}
//         maxOpacity={0.1}
//         duration={3}
//         repeatDelay={1}
//         className={cn(
//           "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
//           "absolute inset-0 h-full w-full"
//         )}
//       />
//       <div className="relative flex h-[500px] w-[750px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
//         <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-800 to-gray-900 bg-clip-text text-center text-4xl font-semibold leading-none dark:from-gray-200 dark:to-gray-300">
//           <img src={saudiopennetwork_logo} className="h-[300px] w-[380px]" />
//           Coming Soon...
//         </span>

//         <BorderBeam size={500} duration={12} delay={9} />
//       </div>
//     </div>
//   );
// }
import { BorderBeam } from "./components/magicui/border-beam";
import AnimatedGridPattern from "./components/magicui/animated-grid-pattern";
import React from "react";
import "./styles/globals.css";
import { cn } from "./lib/utils";
import saudiopennetwork_logo from "./assets/saudiopennetwork_logo.png";
import {PulsatingButton} from "./components/magicui/PulsatingButton";


export default function App() {
const whitepaper = process.env.PUBLIC_URL + "/documents/whitePaper.pdf";

  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "absolute inset-0 h-full w-full"
        )}
      />
      <div className="relative flex h-[500px] w-[750px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl z-10 mx-4 md:mx-0">
        <img
          src={saudiopennetwork_logo}
          alt="Saudi Open Network Logo"
          className="h-[350px] w-[380px] mb-4"
        />
        {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-800 to-gray-900 bg-clip-text text-center text-4xl font-semibold leading-none dark:from-gray-200 dark:to-gray-300">
        </span> */}
        <div className="flex justify-center mt-10">
          {/* <PulsatingButton className="mx-auto" color="green">
            {" "}
            Download White Paper
          </PulsatingButton> */}
          <a
            href={whitepaper}
            download={whitepaper}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PulsatingButton className="mx-auto" >
              Download White Paper
            </PulsatingButton>
          </a>
        </div>

        <BorderBeam size={500} duration={12} delay={9} />
      </div>
    </div>
  );
}
