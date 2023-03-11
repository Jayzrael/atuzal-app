import React, { useState } from "react";
import Basic from "../images/basic.jpeg";
import Standard from "../images/standard.jpeg";
import Premium from "../images/premium.jpeg";
import PackageCard from "./PackageCard";
import BasicMod from "./modals/BasicMod";
import StandardMod from "./modals/StandardMod";
import PremiumMod from "./modals/PremiumMod";

function Pricing() {
  const [open, setOpen] = useState(false);
  const [openMod, setOpenMod] = useState(false);
  const [openPremiumMod, setOpenPremiumMod] = useState(false);

  function handleOpen() {
    setOpen(true);
  }
  function handleOpenMod() {
    setOpenMod(true);
  }
  function OpenPremium() {
    setOpenPremiumMod(true);
  }

  const handleClose = () => setOpen(false);
  const handleCloseMod = () => setOpenMod(false);
  const ClosePremium = () => setOpenPremiumMod(false);

  return (
    <>
      {open && <BasicMod open={open} handleClose={handleClose} />}
      {openMod && (
        <StandardMod openMod={openMod} handleCloseMod={handleCloseMod} />
      )}
      {openPremiumMod && (
        <PremiumMod
          openPremiumMod={openPremiumMod}
          ClosePremium={ClosePremium}
        />
      )}
      <div className="flex justify-center items-center mt-24">
        <h1 className="text-black font-bold text-[28px] p-5 rounded-[10px]">
          ONGOING PROMO
        </h1>
      </div>
      <div className="flex sm:flex-col justify-center items-center gap-10 w-[80%] p-5 ml-[200px] sm:ml-12">
        <PackageCard Img={Standard} OnClick={handleOpen} />
        <PackageCard Img={Premium} OnClick={handleOpenMod} />
        <PackageCard Img={Basic} OnClick={OpenPremium} />
      </div>
    </>
  );
}

export default Pricing;
