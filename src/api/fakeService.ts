function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const fakeService = {
  fakeRequest: async () => {
    await timeout(1000 + Math.floor(Math.random() * 2000));
  },
};

export default fakeService;
