import React from 'react';
import styles from './Form.module.sass';
import Input from '../form/input/Input';
import CommentField from '../form/commentField/CommentField';
import MySelect from './select/Select';
import { optionsFloor, optionsTower, rooms } from './select/selectOptions';
import 'react-toastify/dist/ReactToastify.css';
import { TbTower } from 'react-icons/tb';
import { TbStairs } from 'react-icons/tb';
import Button from '../button/Button';
import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher';
import useFormData from './useFormData';
import TimePicker from './timePicker/TimePicker';

const initialState = {
    name: '',
    tower: [],
    floor: [],
    bookedRooms: [],
    date: [],
    startTime: [],
    endTime: [],
    comment: '',
};

export default function Form() {
    const [onReset, handleSubmit, formInfo, handleChange] =
        useFormData(initialState);

    return (
        <div className={styles.innerWrapper}>
            <div className={styles.formHeader}>
                <h1 className={styles.title}>Создать бронирование</h1>
                <ThemeSwitcher />
            </div>
            <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Планерка"
                        label="Введите название"
                        required={false}
                        autofocus={true}
                        value={formInfo.name}
                        onChange={(e) => handleChange(e, 'name')}
                    />
                    <span className={styles.subtitle}>Необязательно</span>
                </div>
                <div className={styles.selectGroup}>
                    <MySelect
                        name="tower"
                        id="tower"
                        options={optionsTower}
                        placeholder="Башня"
                        label="Выберите башню"
                        icon={<TbTower color="var(--colors-text)" />}
                        value={formInfo.tower}
                        onChange={(e) => handleChange(e, 'tower')}
                    />
                    <MySelect
                        name="floor"
                        id="floor"
                        options={optionsFloor}
                        placeholder="Этаж"
                        label="Выберите этаж"
                        icon={<TbStairs color="var(--colors-text)" />}
                        value={formInfo.floor}
                        onChange={(e) => handleChange(e, 'floor')}
                    />
                </div>
                <div>
                    <MySelect
                        name="bookedRooms"
                        id="bookedRooms"
                        options={rooms}
                        placeholder="Доступные комнаты"
                        label="Выберите переговорную"
                        isMulti={true}
                        closeMenuOnSelect={false}
                        value={formInfo.bookedRooms}
                        onChange={(e) => handleChange(e, 'bookedRooms')}
                    />
                    <span className={styles.subtitle}>
                        Возможно забронировать не более 4 переговорных за раз
                    </span>
                </div>

                <Input
                    type="date"
                    id="Date"
                    name="date"
                    placeholder={new Date().toISOString().slice(0, 10)}
                    label="Выберите дату"
                    min={new Date().toISOString().slice(0, 10)}
                    required={true}
                    autofocus={false}
                    value={formInfo.date}
                    onChange={(e) => handleChange(e, 'date')}
                />

                <TimePicker handleChange={handleChange} formInfo={formInfo} />

                <div>
                    <CommentField
                        name="comment"
                        id="comment"
                        placeholder="Прийти за 10 минут до начала..."
                        value={formInfo.comment}
                        onChange={(e) => handleChange(e, 'comment')}
                    />
                    <span className={styles.subtitle}>Необязательно</span>
                </div>

                <div className={styles.btns}>
                    <Button type="reset" text="Очистить" onClick={onReset} />
                    <Button type="submit" text="Отправить" />
                </div>
            </form>
        </div>
    );
}
