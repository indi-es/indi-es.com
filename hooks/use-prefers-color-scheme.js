// https://github.com/rfoel/use-prefers-color-scheme
import { useEffect, useState } from 'react';

const query = ([mode]) => `(prefers-color-scheme: ${mode})`;

const usePrefersColorScheme = () => {
  const [preferredColorSchema, setPreferredColorSchema] =
    useState('no-preference');

  if (typeof window.matchMedia !== 'function') {
    return preferredColorSchema;
  }

  const isDark = window.matchMedia(query`dark`).matches;
  const isLight = window.matchMedia(query`light`).matches;

  useEffect(() => {
    if (isDark) setPreferredColorSchema('dark');
    else if (isLight) setPreferredColorSchema('light');
    else setPreferredColorSchema('no-preference');
  }, [isDark, isLight]);

  const onChangeDark = ({ matches }) =>
    matches && setPreferredColorSchema('dark');
  const onChangeLight = ({ matches }) =>
    matches && setPreferredColorSchema('light');

  useEffect(() => {
    try {
      window.matchMedia(query`dark`).addEventListener('change', onChangeDark);

      window.matchMedia(query`light`).addEventListener('change', onChangeLight);
    } catch (error) {
      window
        .matchMedia(query`dark`)
        .addListener(() => setPreferredColorSchema(isDark ? 'light' : 'dark'));
    }

    return () => {
      window
        .matchMedia(query`dark`)
        .removeEventListener('change', onChangeDark);
      window
        .matchMedia(query`light`)
        .removeEventListener('change', onChangeLight);
    };
  }, []);

  return preferredColorSchema;
};

export default usePrefersColorScheme;
