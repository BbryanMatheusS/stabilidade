'use client'; // se estiver usando o app router

import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '5511915097126'; // Altere para seu número com DDI e DDD
  const message = 'Olá! Gostaria de mais informações sobre a consultoria.';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg z-50"
      aria-label="WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12a11.953 11.953 0 001.682 6.014L0 24l6.12-1.584A11.894 11.894 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.443 16.873c-.296-.148-1.75-.868-2.02-.967-.27-.099-.47-.148-.67.148-.197.296-.766.967-.94 1.165-.173.198-.347.223-.644.074-.296-.148-1.25-.46-2.38-1.476-.88-.784-1.47-1.75-1.644-2.045-.173-.296-.018-.456.13-.604.134-.134.296-.347.444-.52.148-.173.197-.296.296-.493.099-.198.05-.37-.025-.52-.074-.148-.67-1.61-.918-2.203-.242-.58-.487-.5-.67-.51l-.57-.01c-.198 0-.52.074-.792.37s-1.04 1.02-1.04 2.48 1.064 2.875 1.213 3.074c.148.198 2.09 3.193 5.07 4.48.708.306 1.26.489 1.69.625.71.226 1.36.194 1.87.118.57-.085 1.75-.71 2-.14.248.568.248 1.05.174 1.16-.074.111-.27.173-.57.296-.296.124-1.75.81-2 1.13-.248.325-.52.296-.908.198z" />
      </svg>
    </button>
  );
};

export default WhatsAppButton;
