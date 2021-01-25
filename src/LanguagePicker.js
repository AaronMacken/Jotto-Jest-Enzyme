import React from "react";
import propTypes from "prop-types";

const LanguagePicker = ({ setLanguage }) => {
  const languages = [
    { code: "en", symbol: "🇺🇸" },
    { code: "emoji", symbol: "😃" },
  ];

  const languageIcons = languages.map((lang) => (
    <span className="language-icon" key={lang.code}
    onClick={() => setLanguage(lang.code)}>
      {lang.symbol}
    </span>
  ));

  return <div className="languagePicker">
      {languageIcons}
  </div>;
};

LanguagePicker.propTypes = {
  setLanguage: propTypes.func.isRequired,
};

export default LanguagePicker;
