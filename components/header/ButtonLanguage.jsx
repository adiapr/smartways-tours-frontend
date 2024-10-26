import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next';

function ButtonLanguage() {
    const { t, i18n } = useTranslation('common');
    const changeLanguageToEnglish = () => {
        i18n.changeLanguage('en');
      };
    
      const changeLanguageToIndonesian = () => {
        i18n.changeLanguage('id');
      };
  return (
    <div>
        {i18n.language === 'en' ? (
            <button onClick={changeLanguageToIndonesian}><Image src={'/img/lang/en.png'} width={40} height={40} style={{ borderRadius:'10px', border:'solid 1px white' }}/></button>
          ) : (
            <button onClick={changeLanguageToEnglish}><Image src={'/img/lang/id.png'} width={40} height={40} style={{ borderRadius:'10px', border:'solid 1px white' }}/></button>
          )}
    </div>
  )
}

export default ButtonLanguage