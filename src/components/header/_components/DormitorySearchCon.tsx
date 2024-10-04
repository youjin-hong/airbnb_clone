import { useState } from 'react';
import style from '../_styles/searchCon.module.css';
import DestinationSearchMenu from './DestinationSearchMenu';

export default function DormitorySearchCon() {
  const [selectedMenu, setSelectedMenu] = useState('');

  const handleMenuClick = (menuName: string) => {
    setSelectedMenu(menuName);
  };

  return (
    <>
      <div className={style.searchCon}>
        <div
          className={style.searchSection1}
          onClick={() => handleMenuClick('destination')}
          style={{
            backgroundColor:
              selectedMenu === 'destination' ? 'var(--border-gray)' : '',
            borderRadius: selectedMenu === 'destination' ? '2rem' : '',
          }}
        >
          <p className={style.searchNavTitle}>여행지</p>
          <input
            type="text"
            placeholder="여행지 검색"
            id="searchDestination"
            name="searchDestination"
          />
        </div>
        <div
          className={style.searchSection2}
          onClick={() => handleMenuClick('checkin')}
          style={{
            backgroundColor:
              selectedMenu === 'checkin' ? 'var(--border-gray)' : '',
            borderRadius: selectedMenu === 'checkin' ? '2rem' : '',
          }}
        >
          <p className={style.searchNavTitle}>체크인</p>
          <p>날짜 추가</p>
        </div>
        <div
          className={style.searchSection3}
          onClick={() => handleMenuClick('checkout')}
          style={{
            backgroundColor:
              selectedMenu === 'checkout' ? 'var(--border-gray)' : '',
            borderRadius: selectedMenu === 'checkout' ? '2rem' : '',
          }}
        >
          <p className={style.searchNavTitle}>체크아웃</p>
          <p>날짜 추가</p>
        </div>
        <div
          className={style.searchSection4}
          onClick={() => handleMenuClick('guest')}
          style={{
            backgroundColor:
              selectedMenu === 'guest' ? 'var(--border-gray)' : '',
            borderRadius: selectedMenu === 'guest' ? '2rem' : '',
          }}
        >
          <p className={style.searchNavTitle}>여행자</p>
          <p>게스트 추가</p>
        </div>
        <button className={style.searchBtn}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      {selectedMenu === 'destination' && <DestinationSearchMenu />}
    </>
  );
}
