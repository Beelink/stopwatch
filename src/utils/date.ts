function formatNumber(num: number): string {
  return num.toString().padStart(2, "0");
}

const dateUtils = {
  formatValue: (num: number): string => {
    const hours: number = Math.floor(num / 3600);
    const minutes: number = Math.floor((num - hours * 3600) / 60);
    const seconds: number = num - hours * 3600 - minutes * 60;

    return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(
      seconds
    )}`;
  },
  formatDate: (ms: number): string => {
    return new Date(ms).toLocaleString();
  },
};

export default dateUtils;
