// Analytics Configuration
// Replace these IDs after creating accounts:
// - Google Analytics: https://analytics.google.com/
// - Microsoft Clarity: https://clarity.microsoft.com/

const GOOGLE_ANALYTICS_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 ID
const MICROSOFT_CLARITY_ID = 'XXXXXXXXXX';   // Replace with your Clarity Project ID

// Initialize Google Analytics 4
(function initGoogleAnalytics() {
  if (GOOGLE_ANALYTICS_ID === 'G-XXXXXXXXXX') {
    console.log('⚠️ Google Analytics not configured. Get your ID at: https://analytics.google.com/');
    return;
  }

  // Load GA4 script
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`;
  document.head.appendChild(gaScript);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GOOGLE_ANALYTICS_ID, {
    'anonymize_ip': true,           // RGPD compliance
    'cookie_flags': 'SameSite=None;Secure',
    'page_title': document.title,
    'page_location': window.location.href
  });

  console.log('✅ Google Analytics 4 loaded');
})();

// Initialize Microsoft Clarity
(function initMicrosoftClarity() {
  if (MICROSOFT_CLARITY_ID === 'XXXXXXXXXX') {
    console.log('⚠️ Microsoft Clarity not configured. Get your ID at: https://clarity.microsoft.com/');
    return;
  }

  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", MICROSOFT_CLARITY_ID);

  console.log('✅ Microsoft Clarity loaded');
})();

// Custom Event Tracking Functions
window.trackEvent = function(eventName, params = {}) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, params);
    console.log('📊 Event tracked:', eventName, params);
  }
};

// Track PDF views
window.trackPDFView = function(pdfName) {
  trackEvent('pdf_view', {
    'pdf_name': pdfName,
    'page_path': window.location.pathname
  });
};

// Track PDF downloads
window.trackPDFDownload = function(pdfName) {
  trackEvent('pdf_download', {
    'pdf_name': pdfName,
    'page_path': window.location.pathname
  });
};

// Track project clicks
window.trackProjectClick = function(projectName) {
  trackEvent('project_click', {
    'project_name': projectName,
    'page_path': window.location.pathname
  });
};

// Track external link clicks
window.trackExternalLink = function(url, linkText) {
  trackEvent('external_link_click', {
    'link_url': url,
    'link_text': linkText,
    'page_path': window.location.pathname
  });
};

// Track language switches
window.trackLanguageSwitch = function(fromLang, toLang) {
  trackEvent('language_switch', {
    'from_language': fromLang,
    'to_language': toLang,
    'page_path': window.location.pathname
  });
};

// Auto-track all external links
document.addEventListener('DOMContentLoaded', function() {
  // Track external links
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.href.includes(window.location.hostname)) {
      link.addEventListener('click', function() {
        trackExternalLink(this.href, this.textContent);
      });
    }
  });

  // Track PDF downloads
  document.querySelectorAll('a[download]').forEach(link => {
    link.addEventListener('click', function() {
      const pdfName = this.getAttribute('href').split('/').pop();
      trackPDFDownload(pdfName);
    });
  });

  console.log('📊 Analytics tracking initialized');
});
