export type Tutorial = {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
};

export const tutorials: Tutorial[] = [
  {
    id: "graphql-api-typescript",
    title: "Building a GraphQL API with Node.js and TypeScript",
    description:
      "Learn how to create a type-safe GraphQL API using Node.js, TypeScript, and Apollo Server with proper schema design and resolvers",
    date: "2024-02-02",
    category: "nodejs",
    difficulty: "intermediate",
  },
  {
    id: "realtime-chat-websocket-react",
    title: "Building a Real-time Chat App with WebSocket and React",
    description:
      "Learn how to create a real-time chat application using WebSocket, React, and TypeScript with proper state management and error handling",
    date: "2024-02-01",
    category: "react",
    difficulty: "intermediate",
  },
  {
    id: "express-typescript-rest-api",
    title: "Building a REST API with Express and TypeScript",
    description:
      "Learn how to create a type-safe REST API using Express.js and TypeScript with proper error handling and validation",
    date: "2024-01-31",
    category: "nodejs",
    difficulty: "intermediate",
  },
  {
    id: "building-custom-react-hook",
    title: "Building Your First Custom React Hook",
    description:
      "Learn how to create, test, and share your own custom React hooks with practical examples and best practices",
    date: "2024-01-30",
    category: "react",
    difficulty: "intermediate",
  },
  {
    id: "nestjs-redis-caching",
    title: "Redis Caching in NestJS: A Practical Guide",
    description: "Learn how to implement efficient caching with Redis in your NestJS applications",
    date: "2024-01-29",
    category: "nestjs",
    difficulty: "intermediate",
  },
  {
    id: "publishing-npm-package",
    title: "How to Publish Your First NPM Package",
    description: "Learn how to create, test, and publish your own NPM package with TypeScript and best practices",
    date: "2024-01-28",
    category: "javascript",
    difficulty: "beginner",
  },
  {
    id: "nextjs-sitemap",
    title: "Adding a Sitemap to Your Next.js Site",
    description: "Learn how to create and configure a dynamic sitemap for your Next.js website to improve SEO",
    date: "2024-01-27",
    category: "nextjs",
    difficulty: "beginner",
  },
  {
    id: "parsing-csv-typescript",
    title: "Easy CSV Parsing in TypeScript",
    description: "Learn how to parse CSV files efficiently in TypeScript with type safety and error handling",
    date: "2024-01-26",
    category: "typescript",
    difficulty: "beginner",
  },
  {
    id: "implementing-infinite-scroll-react",
    title: "Simple Infinite Scroll in React - A Beginner's Guide",
    description:
      "Learn how to implement basic infinite scrolling in React with a simple demo and step-by-step explanation",
    date: "2024-01-20",
    category: "react",
    difficulty: "beginner",
  },
];
