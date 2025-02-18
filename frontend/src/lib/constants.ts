import { ProjectT } from "./types";

export const projects: ProjectT[] = [
    {
        id: crypto.randomUUID(),
        thumbnail: "https://pbs.twimg.com/media/Gj-hF1rbIAAUgZZ?format=jpg&name=small",
        name: "Grafik Studio",
        about: "Build a useful product to help IoT developers to visualize the data comming from different sensors while they are debugging their great iot project. Plot multiple data points with logs using serial port on Grafik dashboard.",
        url: "https://grafik-studio.vercel.app",
        tools: [
            "apache-charts",
            "radix-ui",
            "tailwindcss",
            "react",
            "zustand",
            "typescript",
            "cpp"
        ]
    },
    {
        id: crypto.randomUUID(),
        thumbnail: "scalable-notification-system.jpeg",
        name: "Scalable Notification System (backend-only)",
        about: "A notificatino system developed to handle large of notifications though this. Send notitification to WhatsApp, Facebook, FCM (in-app), Browser.",
        url: "https://github.com/adityasharma-tech/ScalableNotificationSystem.git",
        tools: [
            "docker",
            "express",
            "rabbitmq",
            "kafka",
            "postgres",
            "sinch",
            "firebase",
            "mailgun"
        ],
        openSource: true
    }, 
    {
        id: crypto.randomUUID(),
        thumbnail: "bright-analytics.png",
        name: "Bright Analytics (in-development)",
        about: "Building an open-source scalable analytics system.",
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
            "tailwindcss",
            "socketio",
            "apache-charts"
        ],
        openSource: true
    }
]