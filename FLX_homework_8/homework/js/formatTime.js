function formatTime(num) {
  const days = Math.floor(num / 1440);
  const hours = Math.floor((num - (days * 1440)) / 60);
  const minutes = num - (days * 1440) - (hours * 60);
  return days + ' day(s) ' + hours + ' hour(s) ' + minutes + ' minute(s).';
}

formatTime(120);
formatTime(59);
formatTime(3601);