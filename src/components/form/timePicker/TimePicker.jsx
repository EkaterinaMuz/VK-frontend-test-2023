import React from 'react';
import MySelect from '../select/Select';
import styles from '../Form.module.sass';
import { endTime, startTime } from '../select/selectOptions';
import { BiTimeFive } from 'react-icons/bi';
import useFindTimeDiff from './useFindTimeDiff';

export default function TimePicker({ handleChange, formInfo }) {
    const findTimeDiff = useFindTimeDiff(formInfo);
    const endTimeOptions = formInfo.startTime?.value
        ? endTime.filter((time) => time.value > formInfo.startTime.value)
        : [];

    const startTimeOptions = formInfo.endTime?.value
        ? startTime.filter((time) => time.value < formInfo.endTime.value)
        : startTime;

    return (
        <div>
            <div className={styles.selectGroup}>
                <MySelect
                    name="startTime"
                    options={startTimeOptions}
                    placeholder="Время начала"
                    label="Выберите время начала"
                    value={formInfo.startTime}
                    icon={<BiTimeFive color="var(--colors-text)" />}
                    onChange={(e) => handleChange(e, 'startTime')}
                />
                <MySelect
                    name="endTime"
                    options={endTimeOptions}
                    placeholder="Время окончания"
                    label="Выберите время окончания"
                    noOptionsMessage={() => 'Сперва выберите время начала'}
                    value={formInfo.endTime}
                    icon={<BiTimeFive color="var(--colors-text)" />}
                    onChange={(e) => handleChange(e, 'endTime')}
                />
            </div>
            {formInfo.endTime?.value && formInfo.endTime?.value && (
                <span className={styles.subtitle}>
                    Продолжительность:{' '}
                    {findTimeDiff().hours > 0 && (
                        <span>{findTimeDiff().hours} ч</span>
                    )}{' '}
                    {findTimeDiff().minutes > 0 && (
                        <span>{findTimeDiff().minutes} мин</span>
                    )}
                </span>
            )}
        </div>
    );
}
