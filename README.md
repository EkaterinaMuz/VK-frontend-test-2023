## Форма должна содержать следующие элементы:

-   [x] Выпадающий список с выбором башни (А или Б)
        ![Выбор башни](%PUBLIC_URL%/preview/tower.png)

---

-   [x] Выпадающий список с выбором этажа (с 3 по 27)
        ![Выбор этажа](%PUBLIC_URL%/preview/towefloor.png)

---

-   [x] Выпадающий список с выбором переговорки. На каждом этаже 10 переговорок
        ![Выбор переговорки](%PUBLIC_URL%/preview/rooms.png)

---

-   [x] Выбор даты
        ![Выбор даты](%PUBLIC_URL%/preview/date.png)

---

-   [x] Выбор интервала времени
        Выбор времени окончания возможен, только после выбора времени начала
        ![Выбор времени окончания](./preview/endTime.png)
        ![Выбор времени начала](%PUBLIC_URL%/preview/startTime.png)
        Время начала и конца зависят друг от друга и синхронизирются. Поэтому выбрать время начала больше, чем время окончания невозможно
        ![Синхронизация времени](%PUBLIC_URL%/preview/time.png)
        При выборе времени бронирования рассчитывается продолжительность брони
        ![Синхронизация времени](%PUBLIC_URL%/preview/timeDiff.png)

---

-   [x] Поле ввода комментария (textarea) и кнопки "Очистить" и "Отправить"
        ![Комментарий и кнопки](%PUBLIC_URL%/preview/btns.png)

---

-   [x] Кнопка "Отправить" (по нажатию - выводит в консоль данные формы в виде json) и уведомляет пользователя
        ![Уведомление](%PUBLIC_URL%/preview/results.png)