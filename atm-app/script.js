let currentUser = null;
let transactionType = "";
let currentLanguage = localStorage.getItem("language") || "en";

const translations = {
  en: {
    profile: "Profile",
    language: "Language",
    theme: "Theme",
    settings: "Settings",
    appTitle: "🏦 GlobalBank ATM",
    loginInputPlaceholder: "Enter Email",
    passwordInputPlaceholder: "Enter 4-digit PIN",
    loginBtn: "Login",
    signUpBtn: "Sign Up",
    welcomeMessage: "Welcome!",
    checkBalanceBtn: "Check Balance",
    depositBtn: "Deposit",
    withdrawBtn: "Withdraw",
    signUpTitle: "Sign Up",
    signUpNamePlaceholder: "Full Name",
    signUpAccountPlaceholder: "Account Number (4 digits)",
    signUpPhonePlaceholder: "Phone Number (10 digits)",
    signUpEmailPlaceholder: "Email",
    signUpPasswordPlaceholder: "4-digit PIN",
    signUpSubmitBtn: "Submit",
    signUpCancelBtn: "Cancel",
    enterPinTitle: "Enter PIN",
    passwordSubmitBtn: "Submit",
    passwordCancelBtn: "Cancel",
    enterAmountTitle: "Enter Amount",
    amountSubmitBtn: "Submit",
    amountCancelBtn: "Cancel",
    balanceTitle: "Your Balance",
    balanceCloseBtn: "Close",
    profileTitle: "Profile",
    profileCloseBtn: "Close",
    selectLanguageTitle: "Select Language",
    langEnglishBtn: "English",
    langHindiBtn: "Hindi",
    langFrenchBtn: "Français",
    langRussianBtn: "Русский",
    langCancelBtn: "Cancel",
    soundLabel: "Sound",
    vibrationLabel: "Vibration",
    darkModeLabel: "Dark Mode",
    settingsCloseBtn: "Close",
    profileAccount: "Account",
    profilePhone: "Phone",
    profileEmail: "Email",
    userGreeting: "Hello!",
    transactionHistory: "Transaction History",
    noTransactions: "No transactions yet.",
    mainLogoutBtn: "Logout",
    signUpFillAllFields: "Please fill all fields.",
    signUpNameInvalid: "Name must be letters and spaces only.",
    signUpAccountInvalid: "Account must be a 4-digit number.",
    signUpPhoneInvalid: "Phone must be a 10-digit number.",
    signUpEmailInvalid: "Invalid email format.",
    signUpPasswordInvalid: "PIN must be a 4-digit number.",
    signUpAccountExists: "Account number already exists.",
    signUpPhoneExists: "Phone number already exists.",
    signUpEmailExists: "Email already exists.",
    signUpSuccess: "Sign-up successful! Please log in.",
    loginFillAllFields: "Please enter all fields.",
    loginPasswordInvalid: "PIN must be a 4-digit number.",
    loginInvalidFormat: "Invalid email format.",
    loginInvalidCredentials: "Invalid credentials.",
    logoutConfirm: "Are you sure you want to logout?",
    incorrectPin: "Incorrect PIN.",
    invalidAmount: "Enter a valid amount.",
    depositSuccess: "Deposit successful!",
    withdrawSuccess: "Withdrawal successful!",
    insufficientFunds: "Insufficient funds."
  },
  hi: {
    profile: "प्रोफाइल",
    language: "भाषा",
    theme: "थीम",
    settings: "सेटिंग्स",
    appTitle: "🏦 ग्लोबल बैंक एटीएम",
    loginInputPlaceholder: "ईमेल दर्ज करें",
    passwordInputPlaceholder: "4-अंकीय पिन दर्ज करें",
    loginBtn: "लॉगिन",
    signUpBtn: "साइन अप",
    welcomeMessage: "स्वागत है!",
    checkBalanceBtn: "शेष राशि जांचें",
    depositBtn: "जमा करें",
    withdrawBtn: "निकासी",
    signUpTitle: "साइन अप",
    signUpNamePlaceholder: "पूरा नाम",
    signUpAccountPlaceholder: "खाता संख्या (4 अंक)",
    signUpPhonePlaceholder: "फोन नंबर (10 अंक)",
    signUpEmailPlaceholder: "ईमेल",
    signUpPasswordPlaceholder: "4-अंकीय पिन",
    signUpSubmitBtn: "जमा करें",
    signUpCancelBtn: "रद्द करें",
    enterPinTitle: "पिन दर्ज करें",
    passwordSubmitBtn: "जमा करें",
    passwordCancelBtn: "रद्द करें",
    enterAmountTitle: "राशि दर्ज करें",
    amountSubmitBtn: "जमा करें",
    amountCancelBtn: "रद्द करें",
    balanceTitle: "आपकी शेष राशि",
    balanceCloseBtn: "बंद करें",
    profileTitle: "प्रोफाइल",
    profileCloseBtn: "बंद करें",
    selectLanguageTitle: "भाषा चुनें",
    langEnglishBtn: "अंग्रेजी",
    langHindiBtn: "हिंदी",
    langFrenchBtn: "फ्रेंच",
    langRussianBtn: "रूसी",
    langCancelBtn: "रद्द करें",
    soundLabel: "ध्वनि",
    vibrationLabel: "कंपन",
    darkModeLabel: "डार्क मोड",
    settingsCloseBtn: "बंद करें",
    profileAccount: "खाता",
    profilePhone: "फोन",
    profileEmail: "ईमेल",
    userGreeting: "नमस्ते!",
    transactionHistory: "लेनदेन इतिहास",
    noTransactions: "अभी तक कोई लेनदेन नहीं।",
    mainLogoutBtn: "लॉगआउट",
    signUpFillAllFields: "कृपया सभी क्षेत्र भरें।",
    signUpNameInvalid: "नाम में केवल अक्षर और रिक्त स्थान होने चाहिए।",
    signUpAccountInvalid: "खाता 4 अंकों का होना चाहिए।",
    signUpPhoneInvalid: "फोन 10 अंकों का होना चाहिए।",
    signUpEmailInvalid: "अमान्य ईमेल प्रारूप।",
    signUpPasswordInvalid: "पिन 4 अंकों का होना चाहिए।",
    signUpAccountExists: "खाता संख्या पहले से मौजूद है।",
    signUpPhoneExists: "फोन नंबर पहले से मौजूद है।",
    signUpEmailExists: "ईमेल पहले से मौजूद है।",
    signUpSuccess: "साइन-अप सफल! कृपया लॉगिन करें।",
    loginFillAllFields: "कृपया सभी क्षेत्र भरें।",
    loginPasswordInvalid: "पिन 4 अंकों का होना चाहिए।",
    loginInvalidFormat: "अमान्य ईमेल प्रारूप।",
    loginInvalidCredentials: "अमान्य क्रेडेंशियल्स।",
    logoutConfirm: "क्या आप लॉगआउट करना चाहते हैं?",
    incorrectPin: "गलत पिन।",
    invalidAmount: "मान्य राशि दर्ज करें।",
    depositSuccess: "जमा सफल!",
    withdrawSuccess: "निकासी सफल!",
    insufficientFunds: "अपर्याप्त धनराशि।"
  },
  fr: {
    profile: "Profil",
    language: "Langue",
    theme: "Thème",
    settings: "Paramètres",
    appTitle: "🏦 Distributeur GlobalBank",
    loginInputPlaceholder: "Entrez l'email",
    passwordInputPlaceholder: "Entrez le code PIN à 4 chiffres",
    loginBtn: "Connexion",
    signUpBtn: "S'inscrire",
    welcomeMessage: "Bienvenue !",
    checkBalanceBtn: "Vérifier le solde",
    depositBtn: "Déposer",
    withdrawBtn: "Retirer",
    signUpTitle: "Inscription",
    signUpNamePlaceholder: "Nom complet",
    signUpAccountPlaceholder: "Numéro de compte (4 chiffres)",
    signUpPhonePlaceholder: "Numéro de téléphone (10 chiffres)",
    signUpEmailPlaceholder: "Email",
    signUpPasswordPlaceholder: "Code PIN à 4 chiffres",
    signUpSubmitBtn: "Soumettre",
    signUpCancelBtn: "Annuler",
    enterPinTitle: "Entrez le code PIN",
    passwordSubmitBtn: "Soumettre",
    passwordCancelBtn: "Annuler",
    enterAmountTitle: "Entrez le montant",
    amountSubmitBtn: "Soumettre",
    amountCancelBtn: "Annuler",
    balanceTitle: "Votre solde",
    balanceCloseBtn: "Fermer",
    profileTitle: "Profil",
    profileCloseBtn: "Fermer",
    selectLanguageTitle: "Sélectionner la langue",
    langEnglishBtn: "Anglais",
    langHindiBtn: "Hindi",
    langFrenchBtn: "Français",
    langRussianBtn: "Russe",
    langCancelBtn: "Annuler",
    soundLabel: "Son",
    vibrationLabel: "Vibration",
    darkModeLabel: "Mode sombre",
    settingsCloseBtn: "Fermer",
    profileAccount: "Compte",
    profilePhone: "Téléphone",
    profileEmail: "Email",
    userGreeting: "Bonjour !",
    transactionHistory: "Historique des transactions",
    noTransactions: "Aucune transaction pour le moment.",
    mainLogoutBtn: "Déconnexion",
    signUpFillAllFields: "Veuillez remplir tous les champs.",
    signUpNameInvalid: "Le nom doit contenir uniquement des lettres et des espaces.",
    signUpAccountInvalid: "Le compte doit être un numéro à 4 chiffres.",
    signUpPhoneInvalid: "Le téléphone doit être un numéro à 10 chiffres.",
    signUpEmailInvalid: "Format d'email invalide.",
    signUpPasswordInvalid: "Le PIN doit être un nombre à 4 chiffres.",
    signUpAccountExists: "Le numéro de compte existe déjà.",
    signUpPhoneExists: "Le numéro de téléphone existe déjà.",
    signUpEmailExists: "L'email existe déjà.",
    signUpSuccess: "Inscription réussie ! Veuillez vous connecter.",
    loginFillAllFields: "Veuillez remplir tous les champs.",
    loginPasswordInvalid: "Le PIN doit être un nombre à 4 chiffres.",
    loginInvalidFormat: "Format d'email invalide.",
    loginInvalidCredentials: "Identifiants invalides.",
    logoutConfirm: "Voulez-vous vraiment vous déconnecter ?",
    incorrectPin: "PIN incorrect.",
    invalidAmount: "Entrez un montant valide.",
    depositSuccess: "Dépôt réussi !",
    withdrawSuccess: "Retrait réussi !",
    insufficientFunds: "Fonds insuffisants."
  },
  ru: {
    profile: "Профиль",
    language: "Язык",
    theme: "Тема",
    settings: "Настройки",
    appTitle: "🏦 Банкомат GlobalBank",
    loginInputPlaceholder: "Введите электронную почту",
    passwordInputPlaceholder: "Введите 4-значный PIN",
    loginBtn: "Войти",
    signUpBtn: "Зарегистрироваться",
    welcomeMessage: "Добро пожаловать!",
    checkBalanceBtn: "Проверить баланс",
    depositBtn: "Внести",
    withdrawBtn: "Снять",
    signUpTitle: "Регистрация",
    signUpNamePlaceholder: "Полное имя",
    signUpAccountPlaceholder: "Номер счета (4 цифры)",
    signUpPhonePlaceholder: "Номер телефона (10 цифр)",
    signUpEmailPlaceholder: "Электронная почта",
    signUpPasswordPlaceholder: "4-значный PIN",
    signUpSubmitBtn: "Отправить",
    signUpCancelBtn: "Отмена",
    enterPinTitle: "Введите PIN",
    passwordSubmitBtn: "Отправить",
    passwordCancelBtn: "Отмена",
    enterAmountTitle: "Введите сумму",
    amountSubmitBtn: "Отправить",
    amountCancelBtn: "Отмена",
    balanceTitle: "Ваш баланс",
    balanceCloseBtn: "Закрыть",
    profileTitle: "Профиль",
    profileCloseBtn: "Закрыть",
    selectLanguageTitle: "Выберите язык",
    langEnglishBtn: "Английский",
    langHindiBtn: "Хинди",
    langFrenchBtn: "Французский",
    langRussianBtn: "Русский",
    langCancelBtn: "Отмена",
    soundLabel: "Звук",
    vibrationLabel: "Вибрация",
    darkModeLabel: "Темный режим",
    settingsCloseBtn: "Закрыть",
    profileAccount: "Счет",
    profilePhone: "Телефон",
    profileEmail: "Электронная почта",
    userGreeting: "Привет!",
    transactionHistory: "История транзакций",
    noTransactions: "Пока нет транзакций.",
    mainLogoutBtn: "Выйти",
    signUpFillAllFields: "Пожалуйста, заполните все поля.",
    signUpNameInvalid: "Имя должно содержать только буквы и пробелы.",
    signUpAccountInvalid: "Счет должен быть 4-значным числом.",
    signUpPhoneInvalid: "Телефон должен быть 10-значным числом.",
    signUpEmailInvalid: "Неверный формат электронной почты.",
    signUpPasswordInvalid: "PIN должен быть 4-значным числом.",
    signUpAccountExists: "Номер счета уже существует.",
    signUpPhoneExists: "Номер телефона уже существует.",
    signUpEmailExists: "Электронная почта уже существует.",
    signUpSuccess: "Регистрация успешна! Пожалуйста, войдите.",
    loginFillAllFields: "Пожалуйста, заполните все поля.",
    loginPasswordInvalid: "PIN должен быть 4-значным числом.",
    loginInvalidFormat: "Неверный формат электронной почты.",
    loginInvalidCredentials: "Неверные учетные данные.",
    logoutConfirm: "Вы уверены, что хотите выйти?",
    incorrectPin: "Неверный PIN.",
    invalidAmount: "Введите действительную сумму.",
    depositSuccess: "Внесение успешно!",
    withdrawSuccess: "Снятие успешно!",
    insufficientFunds: "Недостаточно средств."
  }
};

function formatCurrency(amount) {
  return `₹${Math.round(amount).toLocaleString("en-IN")}`;
}

function updateLanguage() {
  const elements = [
    { id: "profileLabel", text: translations[currentLanguage].profile },
    { id: "languageLabel", text: translations[currentLanguage].language },
    { id: "themeLabel", text: translations[currentLanguage].theme },
    { id: "settingsLabel", text: translations[currentLanguage].settings },
    { id: "appTitle", text: translations[currentLanguage].appTitle },
    { id: "loginBtn", text: translations[currentLanguage].loginBtn },
    { id: "signUpBtn", text: translations[currentLanguage].signUpBtn },
    { id: "welcomeMessage", text: translations[currentLanguage].welcomeMessage },
    { id: "checkBalanceBtn", text: translations[currentLanguage].checkBalanceBtn },
    { id: "depositBtn", text: translations[currentLanguage].depositBtn },
    { id: "withdrawBtn", text: translations[currentLanguage].withdrawBtn },
    { id: "signUpTitle", text: translations[currentLanguage].signUpTitle },
    { id: "signUpSubmitBtn", text: translations[currentLanguage].signUpSubmitBtn },
    { id: "signUpCancelBtn", text: translations[currentLanguage].signUpCancelBtn },
    { id: "enterPinTitle", text: translations[currentLanguage].enterPinTitle },
    { id: "passwordSubmitBtn", text: translations[currentLanguage].passwordSubmitBtn },
    { id: "passwordCancelBtn", text: translations[currentLanguage].passwordCancelBtn },
    { id: "enterAmountTitle", text: translations[currentLanguage].enterAmountTitle },
    { id: "amountSubmitBtn", text: translations[currentLanguage].amountSubmitBtn },
    { id: "amountCancelBtn", text: translations[currentLanguage].amountCancelBtn },
    { id: "balanceTitle", text: translations[currentLanguage].balanceTitle },
    { id: "balanceCloseBtn", text: translations[currentLanguage].balanceCloseBtn },
    { id: "profileTitle", text: translations[currentLanguage].profileTitle },
    { id: "profileCloseBtn", text: translations[currentLanguage].profileCloseBtn },
    { id: "selectLanguageTitle", text: translations[currentLanguage].selectLanguageTitle },
    { id: "langEnglishBtn", text: translations[currentLanguage].langEnglishBtn },
    { id: "langHindiBtn", text: translations[currentLanguage].langHindiBtn },
    { id: "langFrenchBtn", text: translations[currentLanguage].langFrenchBtn },
    { id: "langRussianBtn", text: translations[currentLanguage].langRussianBtn },
    { id: "langCancelBtn", text: translations[currentLanguage].langCancelBtn },
    { id: "soundLabel", text: translations[currentLanguage].soundLabel },
    { id: "vibrationLabel", text: translations[currentLanguage].vibrationLabel },
    { id: "darkModeLabel", text: translations[currentLanguage].darkModeLabel },
    { id: "mainLogoutBtn", text: translations[currentLanguage].mainLogoutBtn }
  ];

  elements.forEach(({ id, text }) => {
    const element = document.getElementById(id);
    if (element) element.textContent = text;
  });

  const placeholders = [
    { id: "loginInput", text: translations[currentLanguage].loginInputPlaceholder },
    { id: "passwordInput", text: translations[currentLanguage].passwordInputPlaceholder },
    { id: "signUpName", text: translations[currentLanguage].signUpNamePlaceholder },
    { id: "signUpAccount", text: translations[currentLanguage].signUpAccountPlaceholder },
    { id: "signUpPhone", text: translations[currentLanguage].signUpPhonePlaceholder },
    { id: "signUpEmail", text: translations[currentLanguage].signUpEmailPlaceholder },
    { id: "signUpPassword", text: translations[currentLanguage].signUpPasswordPlaceholder }
  ];

  placeholders.forEach(({ id, text }) => {
    const element = document.getElementById(id);
    if (element) element.placeholder = text;
  });

  const settingsCloseBtn = document.getElementById("settingsPanel")?.querySelector("button");
  if (settingsCloseBtn) settingsCloseBtn.textContent = translations[currentLanguage].settingsCloseBtn;

  updateSidebarGreeting();
  if (currentUser) profile();
}

function updateSidebarGreeting() {
  const greetingElement = document.getElementById("sidebarUserGreeting");
  if (greetingElement) greetingElement.textContent = translations[currentLanguage].userGreeting;
}

function setActiveMenu(element) {
  const menuItems = document.querySelectorAll(".sidebar-list li");
  menuItems.forEach(item => item.classList.remove("active"));
  element.classList.add("active");
}

function loadCustomers() {
  const saved = localStorage.getItem("customers");
  if (saved) {
    customers = JSON.parse(saved);
    customers.forEach(customer => {
      if (!customer.transactions) {
        customer.transactions = [];
      }
    });
  }
}

function saveCustomers() {
  localStorage.setItem("customers", JSON.stringify(customers));
}

function changeLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("language", lang);
  document.body.classList.remove("lang-en", "lang-hi", "lang-fr", "lang-ru");
  document.body.classList.add(`lang-${lang}`);
  updateLanguage();
  closeModal("languageModal");
}

function openSignUpModal() {
  const signUpName = document.getElementById("signUpName");
  const signUpAccount = document.getElementById("signUpAccount");
  const signUpPhone = document.getElementById("signUpPhone");
  const signUpEmail = document.getElementById("signUpEmail");
  const signUpPassword = document.getElementById("signUpPassword");
  const signUpMessage = document.getElementById("signUpMessage");
  if (signUpName) signUpName.value = "";
  if (signUpAccount) signUpAccount.value = "";
  if (signUpPhone) signUpPhone.value = "";
  if (signUpEmail) signUpEmail.value = "";
  if (signUpPassword) signUpPassword.value = "";
  if (signUpMessage) signUpMessage.textContent = "";
  const signUpModal = document.getElementById("signUpModal");
  const modalBackdrop = document.getElementById("modalBackdrop");
  if (signUpModal) signUpModal.classList.add("show");
  if (modalBackdrop) modalBackdrop.classList.add("show");
}

function signUp() {
  const name = document.getElementById("signUpName")?.value.trim();
  const account = document.getElementById("signUpAccount")?.value.trim();
  const phone = document.getElementById("signUpPhone")?.value.trim();
  const email = document.getElementById("signUpEmail")?.value.trim();
  const password = document.getElementById("signUpPassword")?.value.trim();
  const message = document.getElementById("signUpMessage");

  if (!name || !account || !phone || !email || !password) {
    if (message) message.textContent = translations[currentLanguage].signUpFillAllFields;
    return;
  }
  if (!name.match(/^[A-Za-z\s]{2,}$/)) {
    if (message) message.textContent = translations[currentLanguage].signUpNameInvalid;
    return;
  }
  if (!account.match(/^\d{4}$/)) {
    if (message) message.textContent = translations[currentLanguage].signUpAccountInvalid;
    return;
  }
  if (!phone.match(/^\d{10}$/)) {
    if (message) message.textContent = translations[currentLanguage].signUpPhoneInvalid;
    return;
  }
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    if (message) message.textContent = translations[currentLanguage].signUpEmailInvalid;
    return;
  }
  if (!password.match(/^\d{4}$/)) {
    if (message) message.textContent = translations[currentLanguage].signUpPasswordInvalid;
    return;
  }

  // Send to PHP
  fetch("signup.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `name=${encodeURIComponent(name)}&account=${encodeURIComponent(account)}&phone=${encodeURIComponent(phone)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
  })
    .then(res => res.text())
    .then(response => {
      const trimmed = response.trim();
      if (trimmed === "✅ success" || trimmed === "success") {
        closeModal("signUpModal");
        alert(translations[currentLanguage].signUpSuccess);
      } else {
        if (message) message.textContent = trimmed;
      }
    })
    .catch(error => {
      console.error("Sign-up error:", error);
      if (message) message.textContent = "Server error. Try again.";
    });
}

function login() {
  const email = document.getElementById("loginInput")?.value.trim();
  const password = document.getElementById("passwordInput")?.value.trim();
  const message = document.getElementById("loginMessage");

  if (!email || !password) {
    message.textContent = "Please enter all fields.";
    return;
  }

  // Send data to PHP
  fetch("login.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
  })
  .then(response => response.text())
  .then(data => {
    if (data.trim() === "success") {
      document.getElementById("loginSection").style.display = "none";
      document.getElementById("atmSection").style.display = "block";
      document.getElementById("sidebarToggle").style.display = "block";
      document.body.classList.add("logged-in");
    } else {
      message.textContent = data;
    }
  })
  .catch(error => {
    console.error("Login error:", error);
    message.textContent = "Server error. Try again.";
  });
}


function logout() {
  if (!confirm(translations[currentLanguage].logoutConfirm)) return;
  
  currentUser = null;
  const loginSection = document.getElementById("loginSection");
  const atmSection = document.getElementById("atmSection");
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("mainContent");
  const sidebarToggle = document.getElementById("sidebarToggle");
  const loginInput = document.getElementById("loginInput");
  const passwordInput = document.getElementById("passwordInput");
  const loginMessage = document.getElementById("loginMessage");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const settingsPanel = document.getElementById("settingsPanel");

  if (loginSection) loginSection.style.display = "block";
  if (atmSection) atmSection.style.display = "none";
  if (sidebar) sidebar.classList.remove("show");
  if (mainContent) mainContent.classList.remove("dimmed");
  if (sidebarToggle) sidebarToggle.style.display = "none";
  if (loginInput) loginInput.value = "";
  if (passwordInput) passwordInput.value = "";
  if (loginMessage) loginMessage.textContent = "";
  if (modalBackdrop) modalBackdrop.classList.remove("show");
  if (settingsPanel) settingsPanel.style.display = "none";

  const modals = ["signUpModal", "passwordModal", "amountModal", "balanceModal", "profileModal", "languageModal"];
  modals.forEach(modalId => {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove("show");
  });

  document.body.classList.remove("logged-in");
  updateLanguage();
  const menuItems = document.querySelectorAll(".sidebar-list li");
  menuItems.forEach(item => item.classList.remove("active"));
}

function showPasswordModal(type) {
  transactionType = type;
  const passwordEntry = document.getElementById("passwordEntry");
  const passwordModal = document.getElementById("passwordModal");
  const modalBackdrop = document.getElementById("modalBackdrop");
  if (passwordEntry) passwordEntry.value = "";
  if (passwordModal) passwordModal.classList.add("show");
  if (modalBackdrop) modalBackdrop.classList.add("show");
}

function validatePassword() {
  const pass = document.getElementById("passwordEntry")?.value;
  if (pass === currentUser.password) {
    closeModal("passwordModal");
    if (transactionType === "balance") {
      const balanceDisplay = document.getElementById("balanceDisplay");
      const balanceModal = document.getElementById("balanceModal");
      const modalBackdrop = document.getElementById("modalBackdrop");
      if (balanceDisplay) balanceDisplay.textContent = formatCurrency(currentUser.balance);
      if (balanceModal) balanceModal.classList.add("show");
      if (modalBackdrop) modalBackdrop.classList.add("show");
    } else {
      const amountEntry = document.getElementById("amountEntry");
      const amountModal = document.getElementById("amountModal");
      const modalBackdrop = document.getElementById("modalBackdrop");
      if (amountEntry) amountEntry.value = "";
      if (amountModal) amountModal.classList.add("show");
      if (modalBackdrop) modalBackdrop.classList.add("show");
    }
  } else {
    alert(translations[currentLanguage].incorrectPin);
  }
}

function processTransaction() {
  const amount = parseFloat(document.getElementById("amountEntry")?.value);
  if (isNaN(amount) || amount <= 0) {
    alert(translations[currentLanguage].invalidAmount);
    return;
  }
  if (transactionType === "deposit") {
    currentUser.balance += amount;
    if (!currentUser.transactions) currentUser.transactions = [];
    currentUser.transactions.push({
      type: "Deposit",
      amount: amount,
      date: new Date().toLocaleString()
    });
    saveCustomers();
    closeModal("amountModal");
    alert(translations[currentLanguage].depositSuccess);
  } else if (transactionType === "withdraw") {
    if (currentUser.balance >= amount) {
      currentUser.balance -= amount;
      if (!currentUser.transactions) currentUser.transactions = [];
      currentUser.transactions.push({
        type: "Withdrawal",
        amount: -amount,
        date: new Date().toLocaleString()
      });
      saveCustomers();
      closeModal("amountModal");
      alert(translations[currentLanguage].withdrawSuccess);
    } else {
      alert(translations[currentLanguage].insufficientFunds);
    }
  }
}

function profile() {
  const profileDisplay = document.getElementById("profileDisplay");
  const profileModal = document.getElementById("profileModal");
  const modalBackdrop = document.getElementById("modalBackdrop");
  if (profileDisplay) {
    const transactions = Array.isArray(currentUser.transactions) ? currentUser.transactions.slice(-5).reverse() : [];
    const transactionList = transactions.length
      ? transactions.map(tx => `<li>${tx.type}: ${formatCurrency(Math.abs(tx.amount))} on ${tx.date}</li>`).join('')
      : `<li>${translations[currentLanguage].noTransactions}</li>`;
    profileDisplay.innerHTML = `
      <p><span class="icon">🧑</span><strong>Name:</strong><span>${currentUser.name}</span></p>
      <p><span class="icon">🏦</span><strong>${translations[currentLanguage].profileAccount}:</strong><span>${currentUser.account}</span></p>
      <p><span class="icon">📞</span><strong>${translations[currentLanguage].profilePhone}:</strong><span>${currentUser.phone}</span></p>
      <p><span class="icon">✉️</span><strong>${translations[currentLanguage].profileEmail}:</strong><span>${currentUser.email}</span></p>
      <div class="transaction-history">
        <h4>${translations[currentLanguage].transactionHistory}</h4>
        <ul>${transactionList}</ul>
      </div>
    `;
  }
  if (profileModal) profileModal.classList.add("show");
  if (modalBackdrop) modalBackdrop.classList.add("show");
  toggleSidebar();
}

function toggleLanguage() {
  const languageModal = document.getElementById("languageModal");
  const modalBackdrop = document.getElementById("modalBackdrop");
  if (languageModal) languageModal.classList.add("show");
  if (modalBackdrop) modalBackdrop.classList.add("show");
  toggleSidebar();
}

function openSettings() {
  const settingsPanel = document.getElementById("settingsPanel");
  if (settingsPanel) settingsPanel.style.display = "block";
  toggleSidebar();
}

function closeSettings() {
  const settingsPanel = document.getElementById("settingsPanel");
  if (settingsPanel) settingsPanel.style.display = "none";
}

function toggleTheme() {
  toggleDarkMode();
  toggleSidebar();
}

function closeModal(id) {
  const modal = document.getElementById(id);
  const modalBackdrop = document.getElementById("modalBackdrop");
  if (modal) modal.classList.remove("show");
  if (modalBackdrop) modalBackdrop.classList.remove("show");
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("mainContent");
  if (sidebar && mainContent) {
    sidebar.classList.toggle("show");
    mainContent.classList.toggle("dimmed");
    if (!sidebar.classList.contains("show")) {
      const menuItems = document.querySelectorAll(".sidebar-list li");
      menuItems.forEach(item => item.classList.remove("active"));
    }
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("dark", document.body.classList.contains("dark-mode"));
  const darkModeToggle = document.getElementById("darkModeToggle");
  if (darkModeToggle) darkModeToggle.checked = document.body.classList.contains("dark-mode");
}

function saveSetting(type) {
  const toggle = document.getElementById(type + "Toggle");
  if (toggle) {
    const val = toggle.checked;
    localStorage.setItem(type, val);
  }
}

window.onload = function() {
  setTimeout(() => {
    const splashScreen = document.getElementById("splashScreen");
    if (splashScreen) splashScreen.classList.add("hidden");
  }, 2000);

  loadCustomers();
  if (localStorage.getItem("dark") === "true") document.body.classList.add("dark-mode");
  const soundToggle = document.getElementById("soundToggle");
  const vibrationToggle = document.getElementById("vibrationToggle");
  const darkModeToggle = document.getElementById("darkModeToggle");
  if (soundToggle) soundToggle.checked = localStorage.getItem("sound") === "true";
  if (vibrationToggle) vibrationToggle.checked = localStorage.getItem("vibration") === "true";
  if (darkModeToggle) darkModeToggle.checked = localStorage.getItem("dark") === "true";
  document.body.classList.add(`lang-${currentLanguage}`);
  updateLanguage();

  const loginInput = document.getElementById("loginInput");
  const passwordInput = document.getElementById("passwordInput");
  if (loginInput) {
    loginInput.addEventListener("input", () => {
      const loginMessage = document.getElementById("loginMessage");
      if (loginMessage) loginMessage.textContent = "";
    });
  }
  if (passwordInput) {
    passwordInput.addEventListener("input", () => {
      const loginMessage = document.getElementById("loginMessage");
      if (loginMessage) loginMessage.textContent = "";
    });
  }

  const sidebar = document.getElementById("sidebar");
  if (sidebar) {
    sidebar.addEventListener("mouseleave", () => {
      if (window.innerWidth > 768 && sidebar.classList.contains("show")) {
        toggleSidebar();
      }
    });
  }
};