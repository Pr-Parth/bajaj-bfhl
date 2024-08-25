const generateResponse = (data) => {
  if (!Array.isArray(data)) {
    return {
      is_success: false,
      error: "Invalid data format, expected an array",
    };
  }

  const numbers = data.filter(
    (item) => !isNaN(item) && typeof item === "string"
  );
  const alphabets = data.filter(
    (item) => isNaN(item) && typeof item === "string"
  );
  const lowercaseAlphabets = alphabets.filter(
    (item) => item === item.toLowerCase()
  );
  const highestLowercaseAlphabet = lowercaseAlphabets.length
    ? [lowercaseAlphabets.sort().reverse()[0]]
    : [];

  return {
    is_success: true,
    user_id: `${process.env.USER_FULLNAME}_${process.env.USER_DOB}`,
    email: process.env.COLLEGE_EMAIL,
    roll_number: process.env.COLLEGE_ROLLNUMBER,
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet,
  };
};

module.exports = { generateResponse };
