function UserIcon() {
  return (
    <svg
      width="34px"
      height="34px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={"userIcon"}
      className={
        "p-[3px] rounded-[50%] mx-2 hover:bg-[#a2a1a686] hover:cursor-pointer"
      }
    >
      <path
        d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z"
        stroke="#232227"
        strokeWidth="2"
      />
      <path
        d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21"
        stroke="#232227"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default UserIcon;
