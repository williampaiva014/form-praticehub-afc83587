import watermark from "@/assets/LOGOTIPO_P_1.png";

const FloatingLogos = () => {
  return (
    <>
      <img
        src={watermark}
        alt=""
        aria-hidden="true"
        className="fixed left-[-3%] top-[20%] w-[250px] md:w-[400px] opacity-[0.05] z-[1] pointer-events-none select-none animate-float-left"
      />
      <img
        src={watermark}
        alt=""
        aria-hidden="true"
        className="fixed right-[-3%] bottom-[15%] w-[250px] md:w-[400px] opacity-[0.05] z-[1] pointer-events-none select-none animate-float-right"
      />
    </>
  );
};

export default FloatingLogos;
