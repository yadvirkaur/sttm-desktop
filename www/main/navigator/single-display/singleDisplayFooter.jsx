import React from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { classNames } from '../../common/utils';

export const singleDisplayFooter = () => {
  const { singleDisplayActiveTab } = useStoreState((state) => state.navigator);
  const { setSingleDisplayActiveTab } = useStoreActions((state) => state.navigator);
  const openSearchPane = () => {
    if (singleDisplayActiveTab !== 'search') {
      setSingleDisplayActiveTab('search');
    }
  };
  const getTurbanIcon = () =>
    singleDisplayActiveTab === 'dhan-guru'
      ? 'assets/img/icons/turban-filled-blue.png'
      : 'assets/img/icons/turban-filled.png';

  const openShabadPane = () => {
    if (singleDisplayActiveTab !== 'shabad') {
      setSingleDisplayActiveTab('shabad');
    }
  };
  const openAnnouncementPane = () => {
    if (singleDisplayActiveTab !== 'announcement') {
      setSingleDisplayActiveTab('announcement');
    }
  };
  const openOtherPane = () => {
    if (singleDisplayActiveTab !== 'other') {
      setSingleDisplayActiveTab('other');
    }
  };
  const openHistoryPane = () => {
    if (singleDisplayActiveTab !== 'history') {
      setSingleDisplayActiveTab('history');
    }
  };
  const openDhanGuruPane = () => {
    if (singleDisplayActiveTab !== 'dhan-guru') {
      setSingleDisplayActiveTab('dhan-guru');
    }
  };

  return (
    <div className="single-display-switches">
      <button
        className={classNames('tab-switch', singleDisplayActiveTab === 'search' && 'active')}
        onClick={openSearchPane}
      >
        <i className="fa fa-search" />
      </button>
      <button
        className={classNames('tab-switch', singleDisplayActiveTab === 'history' && 'active')}
        onClick={openHistoryPane}
      >
        <i className="fa fa-history" />
      </button>
      <button
        className={classNames('tab-switch', singleDisplayActiveTab === 'shabad' && 'active')}
        onClick={openShabadPane}
      >
        <i className="fa fa-dot-circle-o" />
      </button>
      <button
        className={classNames('tab-switch', singleDisplayActiveTab === 'announcement' && 'active')}
        onClick={openAnnouncementPane}
      >
        <i className="fa fa-desktop" />
      </button>
      <button
        className={classNames('tab-switch', singleDisplayActiveTab === 'dhan-guru' && 'active')}
        onClick={openDhanGuruPane}
      >
        <img className="turban-icon" src={getTurbanIcon()} alt="Dhan Guru" />
      </button>
      <button
        className={classNames('tab-switch', singleDisplayActiveTab === 'other' && 'active')}
        onClick={openOtherPane}
      >
        <i className="fa fa-ellipsis-h" />
      </button>
    </div>
  );
};
