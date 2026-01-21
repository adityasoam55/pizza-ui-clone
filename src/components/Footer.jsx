import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="h-full flex flex-col bg-red-800 py-4 text-white">
      <div
        className="CookieConsent fixed bottom-0 left-0 w-full z-9999 flex flex-wrap justify-between items-center"
        style={{
          background: "rgb(43, 55, 59)",
          color: "#fff",
          padding: "10px 16px",
          fontSize: "13.5px",
          lineHeight: "1.4",
        }}
      >
        <div style={{ flex: "1 1 auto", margin: "15px 0 0" }}>
          <span>
            We use cookies to enhance your browsing experience.{" "}
            <a
              href="/cookie-policy"
              className="underline text-blue-400 hover:text-blue-300 transition-colors"
            >
              Learn more
            </a>
          </span>
        </div>

        <div>
          <button
            id="rcc-decline-button"
            aria-label="Decline cookies"
            style={{
              background: "rgb(153, 153, 153)",
              borderRadius: "5px",
              padding: "6px 14px",
              margin: "15px 6px 15px 15px",
              fontSize: "13px",
              color: "#000",
            }}
          >
            Decline
          </button>

          <button
            id="rcc-confirm-button"
            aria-label="Accept cookies"
            style={{
              background: "rgb(22, 101, 52)",
              borderRadius: "5px",
              padding: "6px 14px",
              margin: "15px",
              fontSize: "13px",
              color: "#fff",
            }}
          >
            Accept
          </button>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-center px-4 text-white">
        {/* Social Links */}
        <div className="flex justify-center">
          <div className="flex flex-col gap-4 max-w-75 items-center md:items-start">
            <h3 className="font-bold text-lg">SOCIAL LINKS</h3>

            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/hothousepizzanorthwood"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500"
              >
                <FaInstagram size={24} />
              </a>

              <a
                href="https://www.facebook.com/HotHousePizzaNorthwood"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500"
              >
                <FaFacebookF size={24} />
              </a>

              <a
                href="https://wa.me/+447469367116"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Policies */}
        <div className="flex justify-center">
          <div className="flex flex-col gap-2 max-w-75 items-center md:items-start">
            <h3 className="font-bold text-lg">POLICIES</h3>

            <a href="/termsAndConditions" className="hover:text-yellow-500">
              TERMS & CONDITIONS
            </a>

            <a href="/refundPolicy" className="hover:text-yellow-500">
              REFUND POLICY
            </a>
          </div>
        </div>

        {/* Contact Details */}
        <div className="flex justify-center">
          <div className="flex flex-col gap-3 max-w-75 items-center md:items-start text-sm">
            <h3 className="font-bold text-lg">CONTACT DETAILS</h3>

            <p className="flex gap-2 items-start">
              <FaMapMarkerAlt size={18} />
              <span>Store : 91 Joel St, Pinner, Northwood HA6 1LW, UK</span>
            </p>

            <p className="flex gap-2 items-center">
              <FaEnvelope size={18} />
              <span>Hothousenorthwood@gmail.com</span>
            </p>

            <p className="flex gap-2 items-center">
              <FaPhoneAlt size={18} />
              <span>Contact Us : 01923510520</span>
            </p>
          </div>
        </div>
      </div>

      {/* Notes */}
      <div className="text-sm w-full sm:w-2/3 md:w-full mx-auto text-justify md:text-left px-6 mt-6">
        <p className="mb-4">
          <strong>Please note:</strong> Orders take a minimum of 35 minutes to
          deliver. Whilst we endeavour to get your order to you on time, delays
          may occur during busy periods.
        </p>

        <p className="mb-4">
          If you have any issues with your order or experience, please contact
          the store you ordered from directly.
        </p>
      </div>

      {/* Copyright */}
      <div className="text-center text-white mt-4">
        Copyright © 2026 Hot House Pizza Northwood
      </div>
    </div>
  );
}

export default Footer;
