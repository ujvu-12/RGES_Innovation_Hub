import React from 'react';
import { X } from 'lucide-react';

export const ApplicationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-fade-in-up">

        {/* Header – UNCHANGED */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            Apply as Founder
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* BODY – ONLY CHANGE IS HERE */}
        <div className="h-[80vh] overflow-y-auto">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfHKpUppNLjiihnlQJeSF-Y15QYuiNdnbVzlYHq4M5Y_csPyw/viewform?embedded=true"
            width="100%"
            height="2350"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="RGES Application Form"
            className="w-full"
          >
            Loading…
          </iframe>
        </div>

      </div>
    </div>
  );
};
