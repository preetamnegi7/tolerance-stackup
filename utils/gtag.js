// utils/gtag.js
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID; // Replace with your tracking ID

export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({ action, params }) => {
  window.gtag('event', action, params);
};
