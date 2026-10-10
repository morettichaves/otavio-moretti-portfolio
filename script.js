// Os links continuam funcionando sem JavaScript. O destaque acompanha a leitura.
const navigationLinks = Array.from(
  document.querySelectorAll('.nav-links a[href^="#"]'),
);
const navigationSections = navigationLinks
  .map((link) => document.getElementById(link.hash.slice(1)))
  .filter(Boolean);

function highlightSection(id) {
  navigationLinks.forEach((link) => {
    if (link.hash === "#" + id) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}

highlightSection(location.hash.slice(1) || "inicio");
window.addEventListener("hashchange", () =>
  highlightSection(location.hash.slice(1) || "inicio"),
);

if ("IntersectionObserver" in window) {
  const visibleSections = new Set();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visibleSections.add(entry.target);
        else visibleSections.delete(entry.target);
      });
      const current = navigationSections.find((section) =>
        visibleSections.has(section),
      );
      if (current) highlightSection(current.id);
    },
    { rootMargin: "-10% 0px -55% 0px", threshold: 0 },
  );
  navigationSections.forEach((section) => observer.observe(section));
}
