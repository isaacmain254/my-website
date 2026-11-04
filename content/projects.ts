import type { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    slug: "chatbreez",
    index: "01",
    title: "ChatBreez",
    category: "Product Engineering · SaaS",
    shortDescription: "A WhatsApp messaging API product for developers and businesses.",
    summary:
      "ChatBreez is a developer-focused WhatsApp messaging platform. It gives teams an API for sending and receiving messages and a dashboard for managing connected numbers, without building and maintaining the messaging infrastructure themselves.",
    problem:
      "Integrating WhatsApp messaging into an application usually means working through template approvals, per-message pricing and connection management before a single message is sent. Teams that only want to notify a user or reply to one end up maintaining messaging infrastructure instead of their own product.",
    motivation:
      "I wanted to make that integration accessible. ChatBreez was built to expose WhatsApp messaging as a straightforward API, paired with a platform where connections, keys and usage are managed in one place.",
    approach: [
      "I founded ChatBreez and took it from an idea to a live product on my own, covering product direction, system design, development and operations.",
      "I designed the API surface first, with a consistent set of endpoints, key-based authentication and delivery of inbound messages to developer-controlled webhooks, so the integration would feel familiar.",
      "I built the dashboard that sits in front of it: account management, connecting numbers, API keys, and a playground for testing requests before writing application code.",
      "I wrote the developer documentation and handled deployment, monitoring and ongoing product improvements.",
    ],
    engineeringDecisions: [
      {
        title: "The API is the product",
        detail:
          "The API was designed before the dashboard. Predictable endpoints, clear errors and key-based auth keep the work of integrating small.",
      },
      {
        title: "Connections are first-class resources",
        detail:
          "Numbers are treated as resources a customer can connect, inspect and disconnect, rather than one-off settings. That keeps multi-number usage manageable as an account grows.",
      },
      {
        title: "A testable path from the start",
        detail:
          "An in-dashboard playground lets someone validate authentication and payloads before touching production code, shortening the path to a first successful request.",
      },
    ],
    challenges: [
      "Making a messaging integration approachable to developers who had never worked with WhatsApp APIs before, without hiding the details they need to trust it in production.",
    ],
    outcome:
      "ChatBreez is live at chatbreez.com with public documentation and self-serve plans, and is actively maintained.",
    technologies: [
      "Node.js",
      "Express",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Nginx",
    ],
    links: [{ label: "chatbreez.com", href: "https://chatbreez.com", kind: "live" }],
    visual: {
      type: "image",
      src: "/projects/chatbreez.png",
      alt: "The ChatBreez marketing site, describing a WhatsApp API for developers",
    },
    featured: true,
    visibility: "public",
  },
  {
    slug: "open-sacco",
    index: "02",
    title: "Open SACCO",
    category: "Full-stack · Open Source",
    shortDescription: "An open-source management platform for cooperative societies.",
    summary:
      "Open SACCO is an open-source management system for savings and credit cooperative societies. It pairs a Django REST API with a React application for member, savings, transaction and loan workflows.",
    problem:
      "Cooperative societies often run on fragmented spreadsheets and manual records. Tracking members, savings balances, transactions and loan applications across separate tools is slow, hard to audit and easy to get wrong.",
    motivation:
      "I wanted a single application where the everyday work of a SACCO lives in one place: onboarding members, recording contributions, tracking balances and moving loan applications forward.",
    approach: [
      "I built the backend as a Django REST API covering members and their KYC details, savings products and accounts, deposits and withdrawals, transaction history, and loan products with a full application workflow.",
      "I built the React front-end around that API, using role-based navigation so administrators, managers, operations, finance, loan officers and accountants each see the modules relevant to them.",
      "Loan applications move through a defined lifecycle: draft, guarantors, documents, review, approval or rejection, then disbursement. Each state change is recorded.",
      "The project ships as a Docker Compose stack with a seeded demo, so it can be tried without a local setup.",
    ],
    engineeringDecisions: [
      {
        title: "Permissions enforced on the server",
        detail:
          "Role rules are checked in the API, not just by hiding front-end menus. A hidden menu is not an authorization boundary.",
      },
      {
        title: "JWT with refresh",
        detail:
          "Authentication uses short-lived access tokens with refresh, so sessions stay usable without long-lived credentials.",
      },
      {
        title: "Keep contracts aligned",
        detail:
          "API contracts, front-end types and permission rules are updated together, which keeps the two halves of the system honest about each other.",
      },
    ],
    outcome:
      "Open SACCO is public on GitHub with a hosted demo seeded with disposable data, and has been forked by other developers.",
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Docker",
    ],
    links: [
      { label: "Live demo", href: "https://open-sacco.vercel.app", kind: "live" },
      { label: "GitHub", href: "https://github.com/isaacmain254/open-sacco", kind: "repo" },
    ],
    visual: {
      type: "image",
      src: "/projects/open-sacco.png",
      alt: "The Open SACCO sign-in screen",
    },
    featured: true,
    visibility: "public",
  },
  {
    slug: "upscale-erp",
    index: "03",
    title: "Upscale ERP",
    category: "Professional Experience · Client Work",
    shortDescription: "Frontend development on an enterprise ERP platform.",
    summary:
      "Upscale ERP brings essential business operations, including invoicing, inventory and accounting, into one platform.",
    context:
      "During my time at Upscale Technologies, I contributed to the frontend development of the ERP application. I worked with Vue.js, TypeScript and GraphQL to build and integrate application interfaces with backend services, helping deliver the workflows businesses use to manage their operations.",
    contribution: [
      "My contribution focused on frontend development within an existing product, working alongside the team to implement features and improve the application experience.",
    ],
    engineeringDecisions: [
      {
        title: "GraphQL for data fetching",
        detail:
          "The application uses Vue.js with GraphQL, which let components request the fields they needed from the API.",
      },
      {
        title: "Team contribution",
        detail:
          "Upscale ERP is a team product. My contribution was frontend development, working alongside other developers within an existing codebase.",
      },
    ],
    outcome:
      "The features I worked on are part of Upscale ERP. The codebase and internal systems are private, so this entry describes my frontend contribution rather than the product as a whole.",
    technologies: [
      "Vue.js",
      "TypeScript",
      "GraphQL",
      "Tailwind CSS",
      "Progressive Web App",
    ],
    links: [{ label: "upscaleerp.com", href: "https://upscaleerp.com/", kind: "live" }],
    visual: { type: "typographic" },
    featured: false,
    visibility: "public",
  },
  {
    slug: "webhook-delivery-service",
    index: "04",
    title: "Webhook Delivery Service",
    category: "Backend Engineering",
    shortDescription: "Durable, signed, retry-safe webhook delivery.",
    summary:
      "A service that accepts events over an HTTP API and delivers them reliably to registered endpoints. Deliveries are signed, retried with backoff, and inspectable with full attempt history.",
    problem:
      "Delivering a webhook is not simply making an HTTP request. Receiving systems go down, requests fail, workers restart, and events have to be retried without losing track of where each delivery stands.",
    motivation:
      "I wanted to build the part of an event-driven system that is easy to get wrong in production: guaranteeing that every accepted event either reaches its destination or is recorded as failed, with a clear delivery history.",
    approach: [
      "Events arrive through an HTTP API and are persisted transactionally: the event, its deliveries and an outbox record commit together, with PostgreSQL as the source of truth.",
      "A dispatcher moves unpublished outbox rows onto a BullMQ queue, and a delivery worker claims a delivery atomically before sending an HMAC-signed POST to the destination.",
      "A reconciler reclaims leases from workers that died mid-flight, so no delivery is silently lost.",
      "Every attempt is recorded with its status, duration and a sanitised response summary, and failed deliveries can be replayed manually.",
    ],
    engineeringDecisions: [
      {
        title: "Transactional outbox",
        detail:
          "Persisting the event and its pending work in one database transaction means Redis is never the only record of something that must happen. If the queue is lost, the work is still in Postgres.",
      },
      {
        title: "Lease-based recovery",
        detail:
          "A worker claims a delivery with a status-and-lease check in a single SQL update. If it dies, the lease expires and the reconciler reclaims the work instead of leaving it stuck.",
      },
      {
        title: "At-least-once with idempotency",
        detail:
          "Delivery is at-least-once by design. Idempotency keys and database constraints on event/endpoint uniqueness let receivers deduplicate safely, rather than pretending delivery is exactly-once.",
      },
      {
        title: "Sign and bound every request",
        detail:
          "Payloads are signed with HMAC-SHA256 over the timestamp and body using a per-endpoint secret, so receivers can verify authenticity and reject stale or replayed requests.",
      },
      {
        title: "SSRF-safe destinations",
        detail:
          "Destinations are validated against private, loopback and metadata ranges, DNS is pinned per request, and redirects are refused, so the service cannot be pointed at internal infrastructure.",
      },
    ],
    challenges: [
      "Classifying failures correctly: telling a temporary outage that should be retried from a permanent rejection that should not, without duplicating work when a worker restarts.",
    ],
    outcome:
      "Complete and tested, with unit and integration suites running against a disposable PostgreSQL database, and runnable end to end with Docker Compose. The README states its limits honestly: at-least-once rather than exactly-once, and single-region deployment.",
    technologies: [
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
      "Zod",
      "Pino",
      "Vitest",
      "Docker",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/isaacmain254/webhook-delivery-service",
        kind: "repo",
      },
    ],
    visual: { type: "diagram", key: "webhook" },
    featured: true,
    visibility: "public",
  },
  {
    slug: "notification-system",
    index: "05",
    title: "Event-Driven Notification System",
    category: "Backend Engineering · Go",
    shortDescription: "Decoupling notification delivery from the application that raises an event.",
    summary:
      "A Go service that accepts events over an API and processes delivery in the background, so the application producing an event is not coupled to how the notification is sent, or to how reliably it is delivered.",
    problem:
      "Applications often need to notify users through more than one channel. Handling every delivery inline, as part of the request that triggered it, couples the two together and makes any delivery failure the application's problem.",
    motivation:
      "I wanted to explore an event-driven approach in Go: accept an event quickly and durably, then let background workers take responsibility for what happens next.",
    approach: [
      "An HTTP API accepts events and writes them transactionally, together with an outbox record, to PostgreSQL.",
      "A separate worker process publishes unpublished outbox messages to RabbitMQ and consumes them to perform delivery work.",
      "Integrating applications authenticate with an API key that the service stores only as a SHA-256 hash.",
      "Migrations, typed queries and the service entrypoints are split into their own commands (api, worker, migrate and register-app), so each process has a single job.",
    ],
    engineeringDecisions: [
      {
        title: "Transactional outbox, in Go",
        detail:
          "Accepting an event and recording the intent to publish it happen in one transaction, so a crash between the two cannot drop a notification.",
      },
      {
        title: "Idempotent event submission",
        detail:
          "A repeated request with the same idempotency key returns the original event ID, while reusing that key with different content is rejected, so client retries do not create duplicate work.",
      },
      {
        title: "Hashed API keys",
        detail:
          "The service never stores a usable API key. Keys are generated once, shown once, and kept only as a SHA-256 hash.",
      },
      {
        title: "Test against the real broker",
        detail:
          "RabbitMQ integration tests run against an actual broker and check confirmed publishing, unroutable-message detection, and redelivery after a negative acknowledgement.",
      },
    ],
    outcome:
      "A working Go service with local infrastructure via Docker Compose, PostgreSQL migrations, and integration tests that exercise the messaging path against a real broker. It is a learning-focused project rather than a deployed product.",
    technologies: ["Go", "PostgreSQL", "RabbitMQ", "sqlc", "Docker"],
    links: [
      { label: "GitHub", href: "https://github.com/isaacmain254/notification-system", kind: "repo" },
    ],
    visual: { type: "diagram", key: "notification" },
    featured: true,
    visibility: "public",
  },
  {
    slug: "ticketing-system",
    index: "06",
    title: "Ticketing System",
    category: "Backend Engineering · API Design",
    shortDescription: "Concurrency-safe ticket inventory and reservations.",
    summary:
      "A Django REST API for event ticket reservations, built around protecting a finite inventory while supporting temporary holds and their full lifecycle.",
    problem:
      "When several people try to reserve the last few tickets at once, a naive implementation can allocate more tickets than an event actually has. Selling inventory you do not have is far worse than making a user wait.",
    motivation:
      "I wanted to work through inventory and concurrency properly. This is the part of ticketing that is a correctness problem before it is a feature problem.",
    approach: [
      "Availability is derived, not stored loosely: available = capacity − reserved − sold.",
      "A reservation first creates a hold, which is then either confirmed into a sale or released. Every change writes a movement record (hold, sale or release).",
      "Pending reservations expire after a short deadline, and confirmation re-checks that deadline before converting a hold into a sale.",
      "A management command releases expired holds in bounded batches, driven by an external scheduler.",
    ],
    engineeringDecisions: [
      {
        title: "Row-level locking on booking",
        detail:
          "A booking locks its ticket type with SELECT … FOR UPDATE before checking availability and increasing the reserved count. Concurrent requests for the same ticket type queue up, so each sees the updated count and the last tickets cannot be over-reserved.",
      },
      {
        title: "One transaction per state change",
        detail:
          "The reservation update, the inventory counters and the movement record commit together, so a failure cannot leave inventory and records disagreeing.",
      },
      {
        title: "Derive, then verify",
        detail:
          "Availability is computed from capacity, reserved and sold quantities rather than trusted as a mutable counter, which removes a class of drift bugs.",
      },
      {
        title: "Prove it, do not assert it",
        detail:
          "The test suite includes a 100-request concurrency test, so the oversell protection is demonstrated rather than described.",
      },
    ],
    outcome:
      "A documented REST API with interactive Swagger and ReDoc references and staff-level permissions. It is a local-development project with clearly stated limits: no payments, email or ticket delivery.",
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Simple JWT",
      "docker-compose",
      "OpenAPI",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/isaacmain254/ticketing-system", kind: "repo" },
    ],
    visual: { type: "diagram", key: "ticketing" },
    featured: true,
    visibility: "public",
  },
  {
    slug: "workpay",
    index: "07",
    title: "Workpay",
    category: "Full-stack Development",
    shortDescription: "A job marketplace with real-time chat for clients and freelancers.",
    summary:
      "A job-posting platform that connects clients with freelancers. Clients publish opportunities, freelancers apply, and both sides can talk in real time.",
    problem:
      "Matching clients and freelancers needs more than a listings page. Both sides have to be able to act on an opportunity, whether that is applying, responding or communicating, inside the same product.",
    motivation:
      "I built Workpay to work through a two-sided marketplace with distinct roles and live communication, rather than another single-user application.",
    approach: [
      "Clients post jobs and freelancers apply, with separate experiences for each role.",
      "Users sign in with Google OAuth, and accounts are grouped into client and freelancer roles.",
      "Real-time chat between the two sides is handled with Django Channels and WebSockets.",
    ],
    engineeringDecisions: [
      {
        title: "WebSockets for chat",
        detail:
          "Chat is built on Django Channels rather than polling, so messages arrive as they are sent instead of on a refresh.",
      },
      {
        title: "Roles as first-class",
        detail:
          "Client and freelancer are distinct roles with their own views and permissions, which keeps the two-sided model honest.",
      },
      {
        title: "OAuth sign-in",
        detail: "Google OAuth keeps registration friction low for job seekers.",
      },
    ],
    outcome:
      "Deployed to a hosted environment on free-tier hosting, so it may be slow to wake. The source is on GitHub.",
    technologies: [
      "Django",
      "Django Channels",
      "WebSockets",
      "Python",
      "JavaScript",
      "Bootstrap",
      "Google OAuth",
    ],
    links: [
      { label: "Live app", href: "https://mysite-wm0g.onrender.com", kind: "live" },
      { label: "GitHub", href: "https://github.com/isaacmain254/Workpay", kind: "repo" },
    ],
    visual: {
      type: "image",
      src: "/projects/workpay.png",
      alt: "The Workpay freelance job portal",
    },
    featured: false,
    visibility: "public",
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
