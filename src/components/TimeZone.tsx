import React, { useState } from 'react';
import Clock from './Clock';
import { ClockData } from './types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TimeZone.css'

const TimeZone: React.FC = () => {
  const [clocks, setClocks] = useState<ClockData[]>([]);
  const [name, setName] = useState<string>('');
  const [timezone, setTimezone] = useState<string>('');

  const addClock = () => {
    const newClock: ClockData = {
      id: Date.now().toString(),
      name,
      timezone,
    };

    setClocks((prevClocks) => [...prevClocks, newClock]);
    setName('');
    setTimezone('');
  };

  const removeClock = (id: string) => {
    setClocks((prevClocks) => prevClocks.filter((clock) => clock.id !== id));
  };

  return (
    <>
      <div className='control-wrap'>
        <label>
          Название
          <input
            type="text"
            placeholder="City"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Временная зона
          <input
            type="text"
            placeholder="Timezone"
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
          />
        </label>
        <button className="btn btn-warning" onClick={addClock}>Добавить</button>
      </div>
      <div className='clocks-wrap'>
        {clocks.map((clock) => (
          <Clock key={clock.id} {...clock} onDelete={removeClock} />
        ))}
      </div>
    </>
  );
};

export default TimeZone;