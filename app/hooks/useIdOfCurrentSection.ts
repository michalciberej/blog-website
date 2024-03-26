import { useState, useEffect } from 'react';

const useIdOfCurrentSection = () => {
  const [currentSection, setCurrentSection] = useState<string>('');
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target
                .querySelector('h2')
                ?.getAttribute('id')
                ?.replaceAll('-', ' ');
              setCurrentSection(id!);
            }
          });
        },
        {
          threshold: 0,
          rootMargin: '-400px',
          root: document.querySelector('main'),
        }
      );
      setObserver(obs);
      return () => obs?.disconnect();
    }
  }, []);

  useEffect(() => {
    document.querySelectorAll('section').forEach((el) => observer?.observe(el));

    return () =>
      document
        .querySelectorAll('section')
        .forEach((el) => observer?.unobserve(el));
  }, [observer]);

  return currentSection;
};

export default useIdOfCurrentSection;
