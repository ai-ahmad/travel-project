import React from "react";
import { useTranslation } from "react-i18next";

const ShowCase = () => {
  const { t } = useTranslation(); // Use 't' for translation, not 'i18n'

  return (
    <div className="flex flex-col items-center justify-center h-[400px] gap-3">
      <h3 className="text-[white] text-[45px] font-[500] leading-[20px]">
        {t('Helping-others')}
      </h3>
      <h2 className="text-[white] text-[80px] font-[600]">{t("Live-and-travel")}</h2>
      <h4 className="text-[white] text-[20px] font-[600]">
       {t("Special-offers-to-suit-your-plan")}
      </h4>
    </div>
  );
};

export default ShowCase;
