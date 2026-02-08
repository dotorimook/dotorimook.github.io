import { DateTime } from "luxon";

export const formatDateTime = (dateTimeFrom:string):string => {
  // return dateTimeFrom;
  const dt = DateTime.fromFormat(dateTimeFrom, 'yyyy-MM-dd hh:mm:ss').isValid ? DateTime.fromFormat(dateTimeFrom, 'yyyy-MM-dd hh:mm:ss') : DateTime.fromISO(dateTimeFrom);
  if(!dt || !dt.isValid)
    return dateTimeFrom;
  if (dt.diffNow('days').days > -1)
    return `${dt.diffNow().hours}시간 전`;
  if(dt.diffNow('days').days > -7)
    return `${Math.floor(Math.abs(dt.diffNow('days').days))}일 전`;
  return dt.toFormat('yyyy.MM.dd hh:mm:ss');
}