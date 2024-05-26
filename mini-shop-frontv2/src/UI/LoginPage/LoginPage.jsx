import { useEffect } from "react";
import NavbarGeneric from "../Navbar/NavbarGeneric";
import LoginCard from "./LoginCard";

function LoginPage() {
  useEffect(() => {
    document.querySelector("#root").style.height = "100%";
    document.querySelector("body").style.height = "100%";
  }, []);

  return (
    <div
      className="bg-[url('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGFvcjBvYm43eHhvNXBkc2Zyb3UxdXAxOGF6bnFlcDl3d3cybHBoZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nqtA5obHo3CSelfeKS/giphy.gif')]
     bg-center bg-no-repeat bg-cover h-full"
    >
      <div className="h-full w-full  backdrop-blur-2xl bg-white/10 flex items-center flex-col">
        <div className="flex h-20 font-customFont font-[500] text-[18px] justify-between self-end">
          <div className="w-full h-full flex justify-end">
            <NavbarGeneric />
          </div>
        </div>

        <div className="justify-center flex-1 flex mb-16">
          <LoginCard />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
