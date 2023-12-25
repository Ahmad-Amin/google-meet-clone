import { useEffect, useState, useRef } from 'react';
// import Peer from 'peerjs'

const usePeer = () => {
  const [peer, setPeer] = useState(null);
  const [myId, setMyId] = useState('');

  const isPeerSet = useRef(false);

  useEffect(() => {
    if (isPeerSet.current) return;
    isPeerSet.current = true;
    (async function initPeer() {
      const myPeer = new (await import('peerjs')).default();
      // const myPeer = new Peer();
      setPeer(myPeer);
      myPeer.on('open', (id) => {
        console.log(`your peer id is ${id}`);
        setMyId(id);
      });
    })();
  }, []);

  return {
    peer,
    myId,
  };
};

export default usePeer;
