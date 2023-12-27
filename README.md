This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
This is a cool project which is the clone of the Google Meet (or any online video streaming platform). It follows the pattern of mesh topology, where each peer connects to other peers, send and receive the data via socket. It is a [Next.js](https://nextjs.org/). There is no major work framework used, so it is simple in Next.js. 

I have used mutiple packages in this project to help and make this project industry standard. Some of the packages are 
1. peerjs (For easy manage and communication of the peers)
2. react-player (A very ligh-weight player to easily play videos in React Application)
3. socket (Library use to create the socket connection between peers and also used to emit/broadcast the actions to other peers)
4. lodash (Used to create the DeepCopy)
5. classnames (For efficient dynamic handling of the classes)
6. lucide-react (For icons and all)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
