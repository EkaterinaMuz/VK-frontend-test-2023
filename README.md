# ВКонтакте. Frontend-разработка. Тестовое задание 2023

## Задание

Создать форму бронирования переговорной

### Форма должна содержать следующие элементы:

-   [x] **Выпадающий список с выбором башни (А или Б)**\
         ![Выбор башни](./preview/tower.png)

---

-   [x] **Выпадающий список с выбором этажа (с 3 по 27)**\
         ![Выбор этажа](./preview/floor.png)

---

-   [x] **Выпадающий список с выбором переговорки. На каждом этаже 10 переговорок**\
         ![Выбор переговорки](./preview/rooms.png)

---

-   [x] **Выбор даты**
        ![Выбор даты](./preview/date.png)

---

-   [x] **Выбор интервала времени**\

    Выбор времени окончания возможен, только после выбора времени начала
    ![Выбор времени окончания](./preview/endTime.png)\
     ![Выбор времени начала](./preview/startTime.png)

    Время начала и конца зависят друг от друга и синхронизирются. Поэтому выбрать время начала больше, чем время окончания невозможно\
     ![Синхронизация времени](./preview/time.png)\

    При выборе времени бронирования рассчитывается продолжительность брони\
     ![Синхронизация времени](./preview/timeDiff.png)

---

-   [x] **Поле ввода комментария (textarea) и кнопки "Очистить" и "Отправить"**
        ![Комментарий и кнопки](./preview/btns.png)

---

-   [x] **Кнопка "Отправить" (по нажатию - выводит в консоль данные формы в виде json) и уведомляет пользователя**
        ![Уведомление](./preview/results.png)

---

-   [x] **Адаптивен под мобильные и планшетные устройства**
        ![Адаптация под планшет](./preview/tablet.png)
        ![Адаптация под мобильные устройства](./preview/phone.png)

---

-   [x] **Есть светлая и темная темы**
        ![Темная тема (планшет)](./preview/darkTablet.png)
        ![Темная тема (десктоп)](./preview/darkDesktop.png)
