// Spanish or English: the address (#es / #en) wins, then the browser's
// language. A separate file because extension pages cannot run inline
// scripts; publish it next to privacy.html when hosting the policy.
(() => {
  const pick = () => {
    const hash = location.hash.slice(1);
    const lang = hash === 'es' || hash === 'en' ? hash : /^es\b/i.test(navigator.language || '') ? 'es' : 'en';
    for (const article of document.querySelectorAll('article')) article.hidden = article.id !== lang;
    document.documentElement.lang = lang;
    document.title = lang === 'es' ? 'SortTube · Política de privacidad' : 'SortTube · Privacy policy';
  };
  window.addEventListener('hashchange', () => {
    pick();
    window.scrollTo(0, 0);
  });
  pick();
})();
