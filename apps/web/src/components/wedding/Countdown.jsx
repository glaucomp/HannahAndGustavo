import React, { useEffect, useState } from 'react';

const TARGET = new Date('2027-04-24T15:30:00+10:00').getTime();

const diff = () => {
    const ms = Math.max(0, TARGET - Date.now());

    return {
        days: Math.floor(ms / 86400000),
        hours: Math.floor((ms / 3600000) % 24),
        minutes: Math.floor((ms / 60000) % 60),
        seconds: Math.floor((ms / 1000) % 60),
    };
};

const Countdown = () => {
    const [time, setTime] = useState(diff);

    useEffect(() => {
        const id = setInterval(() => setTime(diff()), 1000);

        return () => clearInterval(id);
    }, []);

    const units = [
        { label: 'Days', value: time.days },
        { label: 'Hours', value: time.hours },
        { label: 'Minutes', value: time.minutes },
        { label: 'Seconds', value: time.seconds },
    ];

    return (
        <div className="flex items-start justify-center gap-6 sm:gap-12">
            {units.map((u) => (
                <div key={u.label} className="text-center">
                    <div className="font-display text-4xl font-light sm:text-6xl">
                        {String(u.value).padStart(2, '0')}
                    </div>
                    <div className="mt-2 text-[10px] uppercase tracking-widest-xl sm:text-xs">{u.label}</div>
                </div>
            ))}
        </div>
    );
};

export default Countdown;
