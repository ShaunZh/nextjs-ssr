import React, { useState, useEffect } from 'react';

interface TabsItem {
  label: string;
}
interface TabsProps {
  active?: number;
  tabsItem: Array<TabsItem>;
  onChange: (index: number) => void;
}

const Tabs: React.FC<TabsProps> = (props) => {
  const { tabsItem = [], active = 0, onChange } = props;
  const [current, setCurrent] = useState<number>();
  const onClick = (index: number) => {
    console.log('active: ', index);
    setCurrent(index);
    onChange(index);
  };

  useEffect(() => {
    console.log('effect');
    setCurrent(active || 1);
  }, []);
  return (
    <div className="tabs">
      {tabsItem.map((item: TabsItem, index: number) => (
        <p
          className={`tabs-item ${current === index ? 'active' : ''}`}
          key={item.label}
          onClick={() => onClick(index)}
        >
          {item.label}
        </p>
      ))}
      <style jsx>{`
        .tabs {
          display: flex;
          justify-content: space-around;
          border-bottom: 1px solid #ddd;
        }
        .tabs-item.active {
          color: #1f90e6;
        }
      `}</style>
    </div>
  );
};

export default Tabs;
