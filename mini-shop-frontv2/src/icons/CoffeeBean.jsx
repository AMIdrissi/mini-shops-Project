import { motion } from "framer-motion";

function CoffeeBean({ hoverVariant }) {
  return (
    <div>
      <motion.svg
        variants={hoverVariant}
        transition={{
          type: "spring",
          duration: 0.5,
          bounce: 0.5,
          damping: 10,
          velocity: 3,
        }}
        fill="#432d27"
        width="54px"
        height="54px"
        viewBox="0 -3 64 64"
        version="1.1"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinejoin: "round",
          strokeMiterlimit: "2",
        }}
      >
        <g transform="matrix(1,0,0,1,-1024,-256)">
          <rect
            id="Icons"
            x="0"
            y="0"
            width="1280"
            height="800"
            style={{ fill: "none" }}
          />
          <g id="Icons1" serif:id="Icons">
            <g id="Strike"></g>
            <g id="H1"></g>
            <g id="H2"></g>
            <g id="H3"></g>
            <g id="list-ul"></g>
            <g id="hamburger-1"></g>
            <g id="hamburger-2"></g>
            <g id="list-ol"></g>
            <g id="list-task"></g>
            <g id="trash"></g>
            <g id="vertical-menu"></g>
            <g id="horizontal-menu"></g>
            <g id="sidebar-2"></g>
            <g id="Pen"></g>
            <g id="Pen1" serif:id="Pen"></g>
            <g id="clock"></g>
            <g id="external-link"></g>
            <g id="hr"></g>
            <g id="info"></g>
            <g id="warning"></g>
            <g id="plus-circle"></g>
            <g id="minus-circle"></g>
            <g id="vue"></g>
            <g id="cog"></g>
            <g id="logo"></g>
            <g id="radio-check"></g>
            <g id="eye-slash"></g>
            <g id="eye"></g>
            <g id="toggle-off"></g>
            <g id="shredder"></g>
            <g
              id="spinner--loading--dots-"
              serif:id="spinner [loading, dots]"
            ></g>
            <g id="react"></g>
            <g id="check-selected"></g>
            <g id="turn-off"></g>
            <g id="code-block"></g>
            <g id="user"></g>
            <g
              id="coffee-bean"
              transform="matrix(0.866025,0.5,-0.5,0.866025,589.93,-387.292)"
            >
              <g transform="matrix(1,0,0,1,0,-0.699553)">
                <path d="M737.673,328.231C738.494,328.056 739.334,328.427 739.757,329.152C739.955,329.463 740.106,329.722 740.106,329.722C740.106,329.722 745.206,338.581 739.429,352.782C737.079,358.559 736.492,366.083 738.435,371.679C738.697,372.426 738.482,373.258 737.89,373.784C737.298,374.31 736.447,374.426 735.735,374.077C730.192,371.375 722.028,365.058 722.021,352C722.015,340.226 728.812,330.279 737.673,328.231ZM737.049,332.302C730.104,335.24 726.021,342.847 726.021,352C726.021,359.27 730.203,365.111 734.111,368.315C733.195,363.785 733.062,357.818 735.724,351.274C739.116,342.936 737.912,335.324 737.049,332.302Z" />
              </g>
              <g transform="matrix(-1,0,0,-1,1483.03,703.293)">
                <path d="M737.609,328.246C738.465,328.06 739.344,328.446 739.785,329.203C739.97,329.49 740.106,329.722 740.106,329.722C740.106,329.722 745.206,338.581 739.429,352.782C737.1,358.507 736.503,365.948 738.383,371.527C738.646,372.304 738.415,373.164 737.796,373.703C737.177,374.243 736.294,374.356 735.56,373.989C730.02,371.241 722.028,364.92 722.021,352C722.016,340.255 728.779,330.328 737.609,328.246ZM737.049,332.302C730.104,335.24 726.021,342.847 726.021,352C726.021,359.27 730.203,365.111 734.111,368.315C733.195,363.785 733.062,357.818 735.724,351.274C739.116,342.936 737.912,335.324 737.049,332.302Z" />
              </g>
            </g>
            <g transform="matrix(0.638317,0.368532,-0.368532,0.638317,785.021,-208.975)">
              <g id="coffee-beans">
                <g id="coffee-bean1" serif:id="coffee-bean"></g>
              </g>
            </g>
            <g id="coffee-bean-filled"></g>
            <g transform="matrix(0.638317,0.368532,-0.368532,0.638317,913.062,-208.975)">
              <g id="coffee-beans-filled">
                <g id="coffee-bean2" serif:id="coffee-bean"></g>
              </g>
            </g>
            <g id="clipboard"></g>
            <g transform="matrix(1,0,0,1,128.011,1.35415)">
              <g id="clipboard-paste"></g>
            </g>
            <g id="clipboard-copy"></g>
            <g id="Layer1"></g>
          </g>
        </g>
      </motion.svg>
    </div>
  );
}

export default CoffeeBean;
