function addToCalendar() {
    const eventDetails = {
        title: 'Madras Rock and Gem Show',
        location: 'Fairgrounds in Madras, Oregon',
        startDate: '20250626',
        endDate: '20250630', // End date is exclusive, so this includes June 29
        description: 'Explore the amazing world of Rocks and Gems in Oregon\'s beautiful Madras fairgrounds. Vendors, displays, and activities for all ages!',
    };

    const calendarUrl = `data:text/calendar;charset=utf-8,BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${eventDetails.title}
LOCATION:${eventDetails.location}
DESCRIPTION:${eventDetails.description}
DTSTART;VALUE=DATE:${eventDetails.startDate}
DTEND;VALUE=DATE:${eventDetails.endDate}
END:VEVENT
END:VCALENDAR`;

    const encodedUrl = encodeURI(calendarUrl);
    const link = document.createElement('a');
    link.href = encodedUrl;
    link.download = 'madras_rock_gem_show.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}