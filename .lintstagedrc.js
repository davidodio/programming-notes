module.exports = {
  '*.{js,jsx,ts,tsx}': ['prettier --write', 'git add'],
  '{*.{json,md}}': ['prettier --write', 'git add'],
};
