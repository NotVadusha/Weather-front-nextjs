const TEMP_BREAKPOINTS = {
  veryCold: -10,
  cold: 10,
  normal: 24,
  warm: 30,
  hot: 200,
};

const MAIN_BACKGROUND_URI = {
  day: {
    veryCold:
      "https://climate.nasa.gov/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSnJkbUZ5YVdGdWRITXZhV3M1WVd4eWJqVmtlVEJ5Ym5SdGMydDRhV2x0YXpOdmVub3lZeTh5WVRNMk5ESXlOMkkxWm1VeU5ETmxaV1E1TVRGbVlqSTRPV05tWW1RNVlXWXpZalZoWWpVMFltUm1PV0ptWW1Rd09EazROR0ZsWldFMU5EaG1NRFEwQmpvR1JWUTZFR1JwYzNCdmMybDBhVzl1U1NKSmFXNXNhVzVsT3lCbWFXeGxibUZ0WlQwaWJXRnBibDlwYldGblpTNTNaV0p3SWpzZ1ptbHNaVzVoYldVcVBWVlVSaTA0SnlkdFlXbHVYMmx0WVdkbExuZGxZbkFHT3daVU9oRmpiMjUwWlc1MFgzUjVjR1ZKSWc5cGJXRm5aUzkzWldKd0Jqc0dWRG9SYzJWeWRtbGpaVjl1WVcxbE9ncHNiMk5oYkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9rZXkifX0=--a9d2dbae084e7d0adbbdd20fde5d20f1f6f90905/main_image.webp",
    cold: "https://i.pinimg.com/originals/7f/0f/3c/7f0f3c30736537953ca066d6b81f2655.jpg",
    normal:
      "https://www.wallpapertip.com/wmimgs/15-152230_from-the-blog-www-new-zealand-mountains-lotr.jpg",
    warm: "https://topolod3xter.files.wordpress.com/2018/07/summerwind4.jpg",
    hot: "https://a.cdn-hotels.com/gdcs/production120/d1650/395c1268-a942-4631-8ab7-7f001ae4991e.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
  },
  night: {
    veryCold: "https://zaborona.com/wp-content/uploads/2022/02/vernadskiy.jpg",
    cold: "https://canopyplanet.org/wp-content/uploads/2021/09/Peter-Mather011-web-1440x959.jpg",
    normal:
      "https://images.unsplash.com/photo-1552599250-0b2c887b3745?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5pZ2h0JTIwZmllbGR8ZW58MHx8MHx8fDA%3D",
    warm: "https://images.pexels.com/photos/457876/pexels-photo-457876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    hot: "https://images.pexels.com/photos/1703317/pexels-photo-1703317.jpeg?cs=srgb&dl=pexels-tom%C3%A1%C5%A1-mal%C3%ADk-1703317.jpg&fm=jpg",
  },
};

export const getMainBackground = (isDay: boolean, temp: number) => {
  const isDayFormatted = isDay ? "day" : "night";
  if (temp < TEMP_BREAKPOINTS.veryCold)
    return MAIN_BACKGROUND_URI[isDayFormatted].veryCold;
  if (temp < TEMP_BREAKPOINTS.cold)
    return MAIN_BACKGROUND_URI[isDayFormatted].cold;
  if (temp < TEMP_BREAKPOINTS.normal)
    return MAIN_BACKGROUND_URI[isDayFormatted].normal;
  if (temp < TEMP_BREAKPOINTS.warm)
    return MAIN_BACKGROUND_URI[isDayFormatted].warm;
  return MAIN_BACKGROUND_URI[isDayFormatted].hot;
};

export const CURRENT_BACKGROUND_URI = {};
