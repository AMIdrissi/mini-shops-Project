function ExpandDown({ clicked }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="28"
      viewBox="0 -1050 960 960"
      width="28"
      className={
        clicked
          ? "fill-white scale-y-[-100%] translate-y-[3px] [transition:0.3s_ease]"
          : "fill-[#232227]" +
            "scale-105 flex justify-center [transition:0.3s_ease]"
      }
    >
      <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
    </svg>
  );
}

export default ExpandDown;
