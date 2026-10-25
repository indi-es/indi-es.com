const basePatterns = [
  {
    id: 'dots-s',
    type: 'patternDots',
    size: 2,
    padding: 1,
    stagger: false,
    background: 'inherit',
  },
  {
    id: 'lines',
    type: 'patternLines',
    spacing: 5,
    rotation: 0,
    lineWidth: 2,
    background: 'inherit',
  },
  {
    id: 'dots-s-stagger',
    type: 'patternDots',
    size: 2,
    padding: 1,
    stagger: true,
    background: 'inherit',
  },
  {
    id: 'lines-45',
    type: 'patternLines',
    spacing: 5,
    rotation: 45,
    lineWidth: 2,
    background: 'inherit',
  },
  {
    id: 'dots',
    type: 'patternDots',
    size: 4,
    padding: 4,
    stagger: false,
    background: 'inherit',
  },
  {
    id: 'lines-90',
    type: 'patternLines',
    spacing: 5,
    rotation: 90,
    lineWidth: 2,
    background: 'inherit',
  },
  {
    id: 'dots-stagger',
    type: 'patternDots',
    size: 4,
    padding: 4,
    stagger: false,
    background: 'inherit',
  },
  {
    id: 'lines-135',
    type: 'patternLines',
    spacing: 5,
    rotation: 135,
    lineWidth: 2,
    background: 'inherit',
  },
  {
    id: 'dots-l',
    type: 'patternDots',
    size: 6,
    padding: 6,
    stagger: false,
    background: 'inherit',
  },
  {
    id: 'lines-l',
    type: 'patternLines',
    spacing: 10,
    rotation: 0,
    lineWidth: 5,
    background: 'inherit',
  },

  {
    id: 'dots-l-stagger',
    type: 'patternDots',
    size: 8,
    padding: 8,
    stagger: false,
    background: 'inherit',
  },
];
export const darkPatterns = basePatterns.map((item) => ({
  ...item,
  color: 'rgba(255,255,255, 0.3)',
}));
export const lightPatterns = basePatterns.map((item) => ({
  ...item,
  color: 'rgba(0,0,0, 0.2)',
}));

const patterns = basePatterns.map((item) => ({ id: item.id }));

export default patterns;
