function _timeout(ms: number) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(ms);
    }, ms)
  );
}

const timeoutUtils = {
  delay: async () => {
    await _timeout(1000 + Math.floor(Math.random() * 2000));
  },
};

export default timeoutUtils;
