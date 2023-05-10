export default function useFindTimeDiff(formInfo) {
    const findTimeDiff = () => {
        const start = formInfo.startTime?.value.split(':');
        const end = formInfo.endTime?.value.split(':');
        let hours = end[0] - start[0];
        let minutes = end[1] - start[1];
        if (minutes < 0 && hours <= 1) {
            hours = 0;
            minutes = '30';
        }
        if (minutes < 0 && hours > 1) {
            hours -= 1;
            minutes = '30';
        }
        console.log(hours, minutes);
        return { hours, minutes };
    };
    return findTimeDiff;
}
