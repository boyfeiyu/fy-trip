import dayjs from "dayjs";

export const formatMMDD = date => {
    return dayjs(date).format('MM月DD日')
}