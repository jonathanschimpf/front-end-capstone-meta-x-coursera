const fetchAPI = date => {
  let result = [];
  const startTime = 16.5; // 4:30 PM in 24-hour format
  const endTime = 22;    // 10:00 PM in 24-hour format
  
// 24hr format conversion to AM/PM format below  
  for (let i = startTime; i <= endTime; i += 0.5) {
    const hours = Math.floor(i);
    const minutes = i % 1 === 0.5 ? '30' : '00';
    const isPM = hours >= 12;
    const formattedHours = (hours % 12) || 12;
    const formattedTime = `${formattedHours}:${minutes} ${isPM ? 'PM' : 'AM'}`;
    result.push(formattedTime);
  }

  console.log('Generated times:', result); // Review Results in Console

  return result;
};

const submitAPI = formData => true;

export {
  fetchAPI,
  submitAPI
};
