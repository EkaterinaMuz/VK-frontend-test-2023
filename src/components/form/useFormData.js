import { useState } from 'react';
import { toast } from 'react-toastify';

export default function useFormData(initialState) {
    const [formInfo, setFormInfo] = useState(initialState);

    // Функция обновления полей

    const handleChange = (e, name) => {
        // проверяем какое поле изменилось, получаем его value из event'a и обновляем его
        let value;
        if (name === 'name' || name === 'comment' || name === 'date') {
            value = e.target.value;
        } else if (name === 'bookedRooms') {
            if (formInfo.bookedRooms.length < 4) value = [...e];
        } else {
            value = e;
        }
        value &&
            setFormInfo({
                ...formInfo,
                [name]: value,
            });
    };

    // Функция сброса полей

    const onReset = () => {
        setFormInfo(initialState);
    };

    // Функция отправки данных формы

    function handleSubmit(e) {
        e.preventDefault();
        // приводим значения полей формы к формату "key": "value"
        const data = Object.fromEntries(
            Object.entries(formInfo).map((formField) => {
                // если значением поля является массив объектов ("key": [{label: "value", value: "value"},...])
                if (Array.isArray(formField[1])) {
                    const rooms = formField[1].map((room) => room.label);
                    return [formField[0], rooms];
                }
                // если значением поля является объект ("key": {label: "value", value: "value"})
                if (formField[1] instanceof Object) {
                    return [formField[0], formField[1].label];
                }
                // если значением поля является строка
                return [formField[0], formField[1]];
            })
        );
        console.log(JSON.stringify(data, null, 2));
        toast.success(
            'Переговорная забронирована! Детали брони вы увидите в консоли!'
        );
        onReset();
    }

    return [onReset, handleSubmit, formInfo, handleChange];
}
