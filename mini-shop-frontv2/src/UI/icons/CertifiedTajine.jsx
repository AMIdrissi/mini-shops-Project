import tajineImg from "../../assets/tajine.png"

function CertifiedTajine() {
  return (
    <div className="flex w-[230px] justify-center">
      <img
        src="https://static.wixstatic.com/media/c837a6_9acef8c60e2a440ca5eebc131e2af90a~mv2.png/v1/fill/w_199,h_190,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled-2-01%201.png"
        alt=""
        className="h-[230px] rotate-3"
      />
      <img
        src={tajineImg}
        alt=""
        className="h-[230px] -translate-x-[230px] -translate-y-1 scale-[0.8] rotate-6"
      />
    </div>
  );
}

export default CertifiedTajine;
