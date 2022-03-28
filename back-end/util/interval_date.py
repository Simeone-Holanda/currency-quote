from datetime import timedelta, date


def interval_date(current_date, interval):
    extraction_date = current_date.split('-')
    day = date(int(extraction_date[0]), int(
        extraction_date[1]), int(extraction_date[2]))
    interval = timedelta(interval)
    return day-interval
