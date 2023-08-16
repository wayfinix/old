const lang = document.getElementById("lang");
const contact = document.getElementById("contact");
const btn = document.querySelector(".button-mobile-menu");
const menu = document.querySelector(".mobile-menu");
const box = document.getElementById("box");
const phone = document.getElementById("טלפון");
const fullName = document.getElementById("שם");

function changeLanguage() {
  if (lang.src.match("imgs/russia.png")) {
    lang.src = "imgs/israel.png";
    contact.textContent = data.Russian.contact;
    call.textContent = data.Russian.call;
    get.textContent = data.Russian.get;
    (firstLabel.textContent = data.Russian.firstLabel),
      (firstLabel.style.textAlign = "left");
    (secondLabel.textContent = data.Russian.secondLabel),
      (secondLabel.style.textAlign = "left");
    phone.style.textAlign = "left";
    fullName.style.textAlign = "left";
    about.textContent = data.Russian.about;
    homepage.textContent = data.Russian.homepage;
    (title.textContent = data.Russian.title),
      (title.style.fontSize = "1.5rem"),
      (title.style.maxWidth = "460px"),
      (paragraph.textContent = data.Russian.paragraph),
      (paragraph.style.maxWidth = "28rem");
    heading.textContent = data.Russian.heading;
    secondp.textContent = data.Russian.secondp;
    secondh.textContent = data.Russian.secondh;
    (thirdp.textContent = data.Russian.thirdp),
      (thirdp.style.maxWidth = "160px");
    thirdh.textContent = data.Russian.thirdh;
    fourthp.textContent = data.Russian.fourthp;
    fourthh.textContent = data.Russian.fourthh;
    fifthp.textContent = data.Russian.fifthp;
    fifthh.textContent = data.Russian.fifthh;
    sixthh.textContent = data.Russian.sixthh;
    seventhh.textContent = data.Russian.seventhh;
    eigthh.textContent = data.Russian.eigthh;
    ninthh.textContent = data.Russian.ninthh;
    tenthh.textContent = data.Russian.tenthh;
    eleventhh.textContent = data.Russian.eleventhh;
    twelvethh.textContent = data.Russian.twelvethh;
    thirdteenthh.textContent = data.Russian.thirdteenthh;
    fourteenthh.textContent = data.Russian.fourteenthh;
    fifteenthh.textContent = data.Russian.fifteenthh;
    send.textContent = data.Russian.send;
    sixthp.textContent = data.Russian.sixthp;
    (seventhp.textContent = data.Russian.seventhp),
      (seventhp.style.maxWidth = "190px");
    eigthp.textContent = data.Russian.eigthp;
  } else {
    lang.src = "imgs/russia.png";
    contact.textContent = data.hebrew.contact;
    call.textContent = data.hebrew.call;
    get.textContent = data.hebrew.get;
    (firstLabel.textContent = data.hebrew.firstLabel),
      (firstLabel.style.textAlign = "right");
    (secondLabel.textContent = data.hebrew.secondLabel),
      (secondLabel.style.textAlign = "right");
    phone.style.textAlign = "right";
    fullName.style.textAlign = "right";
    about.textContent = data.hebrew.about;
    homepage.textContent = data.hebrew.homepage;
    (title.textContent = data.hebrew.title),
      (title.style.fontSize = "1.875rem"),
      (title.style.maxWidth = "500px"),
      (paragraph.textContent = data.hebrew.paragraph),
      (paragraph.style.maxWidth = "24rem");
    heading.textContent = data.hebrew.heading;
    secondp.textContent = data.hebrew.secondp;
    secondh.textContent = data.hebrew.secondh;
    (thirdp.textContent = data.hebrew.thirdp), (thirdp.style.maxWidth = "60px");
    thirdh.textContent = data.hebrew.thirdh;
    fourthp.textContent = data.hebrew.fourthp;
    fourthh.textContent = data.hebrew.fourthh;
    fifthp.textContent = data.hebrew.fifthp;
    fifthh.textContent = data.hebrew.fifthh;
    sixthh.textContent = data.hebrew.sixthh;
    seventhh.textContent = data.hebrew.seventhh;
    eigthh.textContent = data.hebrew.eigthh;
    ninthh.textContent = data.hebrew.ninthh;
    tenthh.textContent = data.hebrew.tenthh;
    eleventhh.textContent = data.hebrew.eleventhh;
    twelvethh.textContent = data.hebrew.twelvethh;
    thirdteenthh.textContent = data.hebrew.thirdteenthh;
    fourteenthh.textContent = data.hebrew.fourteenthh;
    fifteenthh.textContent = data.hebrew.fifteenthh;
    send.textContent = data.hebrew.send;
    sixthp.textContent = data.hebrew.sixthp;
    (seventhp.textContent = data.hebrew.seventhp),
      (seventhp.style.maxWidth = "250px");
    eigthp.textContent = data.hebrew.eigthp;
  }
}

const data = {
  hebrew: {
    contact: "צור קשר",
    call: "צור קשר",
    about: "מי אנחנו",
    homepage: "דף הבית",
    title: "פרישה נכונה לעתיד שקט",
    paragraph:
      "בסט סיגמא כאן כדי לסייע לכם בתהליך המורכב והחשוב של הפרישה ולספק לכם את המידע והכלים הנדרשים כדי לקבל החלטות חשובות וכדי להתמודד בצורה מקצועית ומפורטת עם כל הנושאים",
    heading: "מקצוענות",
    secondp: "בכל הנושאים תחת קורת גג אחת",
    secondh: "ביחד",
    thirdp: "יחס אישי ולווי צמוד",
    thirdh: "15K",
    fourthp: "לקוחות מרוצים ממתן השירות שלנו",
    fourthh: "מקום 1",
    fifthp: "בשירות לקוחות מחברת מנורה מבטחים",
    fifthh: "השירותים שלנו",
    sixthh: "טיפול במענקי פרישה",
    seventhh: "איחוד קופות וקבלת קצבה",
    eigthh: "קיבוע זכויות",
    ninthh: "החזר מס",
    tenthh: "פריסת פיצויים",
    eleventhh: "טיפול בטפסי 161",
    twelvethh: "פדיון כספים",
    thirdteenthh: "איחוד קופות וקבלת קצבה",
    fourteenthh: "ליווי בסיוע שכר דירה",
    fifteenthh: "הנבחרת שלנו",
    send: "שליחה",
    sixthp: "052-4455544",
    seventhp: "רחוב ההגנה 13, ראשון לציון, מגדל ירון מילר",
    eigthp: "א'-ה' 17:00-9:00",
    get: "צור קשר",
    firstLabel: ":שם",
    secondLabel: ":טלפון",
  },
  Russian: {
    contact: "Связаться с нами",
    call: "Связаться с нами",
    about: "Кто мы",
    homepage: "Главная страница",
    title: "Правильный выход на пенсию для мирного будущего",
    paragraph:
      "Best Sigma здесь, чтобы помочь вам в сложном и важном процессе выхода на пенсию и предоставить вам информацию и инструменты, необходимые для принятия важных решений и решения всех вопросов профессионально и детально.",
    heading: "профессионализм",
    secondp: "Широкий спектр предоставляемых нами услуг",
    secondh: "вместе",
    thirdp: "Индивидуальный подход к каждому клиенту",
    thirdh: "15K",
    fourthp: "Довольных клиентов",
    fourthh: "1-е место",
    fifthp: "В сервисе от компании Менора Мивтахим",
    fifthh: "Наши услуги",
    sixthh: "Сопровождение в получении пособий от работодателя",
    seventhh: "Объединение пенсионных касс и получение пенсионной выплаты",
    eigthh: "Освобождение пенсионной выплаты от налога",
    ninthh: "Возврат налогов",
    tenthh: "Распределение компенсации",
    eleventhh: "Лечение форм 161",
    twelvethh: "Снятие пенсионных накоплений",
    thirdteenthh: "Помощь в получении пособий от национального страхования",
    fourteenthh: "Сопровождение в получении пособия на жилье",
    fifteenthh: "Наша команда",
    send: "отправка",
    sixthp: "052-4455544",
    seventhp: "Хагана 13, Ришон Ле-Цион, Ярон Миллер Тауэр",
    eigthp: "א'-ה' 17:00-9:00",
    get: "Связаться с нами",
    firstLabel: "Имя:",
    secondLabel: "телефон:",
  },
};
