import { HMSPeerWithMuteStatus } from '@100mslive/hms-video-store';
import { HMSPeer } from '@100mslive/hms-video-store';

export interface ParticipantListClasses {
  root?: string;
  buttonRoot?: string;
  buttonOpen?: string;
  buttonClosed?: string;
  buttonInner?: string;
  buttonText?: string;
  carat?: string;
  menuRoot?: string;
  menuSection?: string;
  menuItem?: string;
  menuText?: string;
  menuIconContainer?: string;
  offIcon?: string;
  onIcon?: string;
  dialogHeader?: string;
  dialogContainer?: string;
  expanded?: string;
  textGray?: string;
  divider?: string;
  formContainer?: string;
  selectContainer?: string;
  select?: string;
  dialogFooter?: string;
}

export interface ParticipantListProps {
  participantList?: HMSPeerWithMuteStatus[];
  classes?: ParticipantListClasses;
  onToggle?: (open: boolean) => void;
}
