function calculate(num1, operator, num2) {
  try {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
      throw new Error("Sayı girmediniz");
    }

    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          throw new Error("0'a bölme hatası");
        }
        return num1 / num2;
      default:
        throw new Error("Doğru işlem seçmediniz (+, -, *, /)");
    }
  } catch (error) {
    console.error("❌ Hata:", error.message);
    return null;
  }
}

module.exports = { calculate };
