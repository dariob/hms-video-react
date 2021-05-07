import { HMSSdk } from '@100mslive/100ms-web-sdk';
import HMSConfig from '@100mslive/100ms-web-sdk/dist/interfaces/config';
import HMSPeer from '@100mslive/100ms-web-sdk/dist/interfaces/hms-peer';
import HMSUpdateListener from '@100mslive/100ms-web-sdk/dist/interfaces/update-listener';
import { Message } from '../../components/ChatBox/ChatBox';

export default interface HMSRoomProps {
  sdk: HMSSdk;
  peers: HMSPeer[];
  localPeer: HMSPeer;
  messages: Message[];
  audioMuted: boolean;
  videoMuted: boolean;
  dominantSpeaker: HMSPeer | null;
  speakers: any;
  join: (config: HMSConfig, listener: HMSUpdateListener) => void;
  leave: () => void;
  toggleMute: (type: 'audio' | 'video') => void;
  toggleScreenShare: () => void;
  sendMessage: (message: string) => void;
}
