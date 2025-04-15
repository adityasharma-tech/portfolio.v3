import { LearnerT, ProjectT } from "./types";

export const projects: ProjectT[] = [
  {
    id: crypto.randomUUID(),
    thumbnail:
      "https://pbs.twimg.com/media/Gj-hF1rbIAAUgZZ?format=jpg&name=small",
    name: "Synapse",
    embed: `<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr"><a href="https://twitter.com/piyushgarg_dev?ref_src=twsrc%5Etfw">@piyushgarg_dev</a> <a href="https://twitter.com/Hiteshdotcom?ref_src=twsrc%5Etfw">@Hiteshdotcom</a> Sir, I tried to build the live streaming chat application with superchat and payment/payout gateway.<br>github: <a href="https://t.co/8YtLOJTUVN">https://t.co/8YtLOJTUVN</a><br>live at: <a href="https://t.co/HTCWv5kXY5">https://t.co/HTCWv5kXY5</a><br>Payout is not working due to razorpay activation delay.<br>Payment is working btw.demo <a href="https://t.co/RL36HULJyD">pic.twitter.com/RL36HULJyD</a></p>&mdash; Aditya Sharma (@AdityaSharmaLve) <a href="https://twitter.com/AdityaSharmaLve/status/1908537419659420120?ref_src=twsrc%5Etfw">April 5, 2025</a></blockquote>`,
    about:
      "Live superchat streaming platform with payment/payout gateway.",
    url: "https://synapse.adityasharma.live",
    tools: [
      "react",
      "redux",
      "express",
      "redis",
      "tailwindcss",
      "socketio",
      "razorpay"
    ],
    github: "https://github.com/adityasharma-tech/synapse.git",
    openSource: true
  },
  {
    id: crypto.randomUUID(),
    thumbnail:
      "https://pbs.twimg.com/media/Gj-hF1rbIAAUgZZ?format=jpg&name=small",
    name: "Grafik Studio",
    about:
      "Build a useful product to help IoT developers to visualize the data coming from different sensors while they are debugging their great iot project. Plot multiple data points with logs using serial port on Grafik dashboard.",
    url: "https://grafik-studio.vercel.app",
    tools: [
      "echarts",
      "radix-ui",
      "react",
      "zustand",
      "typescript",
      "cpp",
    ],
  },
  {
    id: crypto.randomUUID(),
    thumbnail: "scalable-notification-system.jpeg",
    name: "Scalable Notification System (backend-only)",
    about:
      "A notificatino system developed to handle large of notifications though this. Send notitification to WhatsApp, Facebook, FCM (in-app), Browser.",
    url: "https://github.com/adityasharma-tech/ScalableNotificationSystem.git",
    tools: [
      "docker",
      "express",
      "rabbitmq",
      "kafka",
      "postgres",
      "sinch",
      "firebase",
      "mailgun",
    ],
    openSource: true,
  },
  {
    id: crypto.randomUUID(),
    thumbnail: "bright-analytics.png",
    name: "Bright Analytics (in-development)",
    about: "Building an open-source analytics system. Help me to learn these tools more deeply & also build a successful product which link the core of any framework to their analytic system.",
    url: "https://github.com/Bright-Analytic",
    tools: [
      "react",
      "docker",
      "postgres",
      "typescript",
      "kafka",
      "redis",
      "rabbitmq",
      "drizzle",
      "clerk",
      "express",
      "svix",
      "nextjs",
      "socketio",
      "echarts",
    ],
    openSource: true,
  },
];

export const learners: LearnerT[] = [
  {
    id: crypto.randomUUID(),
    name: 'Code with Harry',
    best: 'everything',
    profilePicture: 'https://yt3.googleusercontent.com/ytc/AIdro_kX3sdbuu3KFmRPsmlu0R5Rx_BhpxwupjtvJmkEdNfla7w=s160-c-k-c0x00ffffff-no-rj',
    url: 'https://youtube.com/@codewithharry'
  },
  {
    id: crypto.randomUUID(),
    name: "Hitesh Sir",
    best: "Backend (everything)",
    profilePicture: 'https://pbs.twimg.com/profile_images/1724344976715468800/MasktpKz_400x400.jpg',
    url: 'https://x.com/Hiteshdotcom'
  },
  {
    id: crypto.randomUUID(),
    name: "Piyush Sir",
    best: "Backend & Xperience",
    profilePicture: 'https://www.piyushgarg.dev/_next/image?url=%2Fimages%2Favatar.png&w=640&q=75',
    url: 'https://www.youtube.com/@piyushgargdev'
  },
  {
    id: crypto.randomUUID(),
    name: 'Mannu Sir',
    best: 'Learning frontend',
    profilePicture: 'https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg',
    url: 'https://x.com/mannupaaji'
  },
]

/**
 * react
 * redux
 * express
 * redis
 * tailwindcss
 * socketio
 * razorpay
 */


/* 
"echarts",
"radix-ui",
"zustand",
"cpp",
"sinch",
"firebase",
"mailgun",
"react",
"docker",
"postgres",
"typescript",
"kafka",
"redis",
"rabbitmq",
"drizzle",
"clerk",
"express",
"svix",
"nextjs",
"tailwindcss",
"socketio",
*/
