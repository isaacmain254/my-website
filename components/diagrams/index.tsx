import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

function Box({
  title,
  subtitle,
  tone = "default",
}: {
  title: string;
  subtitle?: string;
  tone?: "default" | "accent";
}) {
  return (
    <div
      className={cn(
        "rounded-md border px-4 py-3 text-center",
        tone === "accent"
          ? "border-accent/50 bg-accent-tint"
          : "border-line bg-raised",
      )}
    >
      <p
        className={cn(
          "font-mono text-[0.8rem] uppercase tracking-[0.04em]",
          tone === "accent" ? "text-accent" : "text-ink",
        )}
      >
        {title}
      </p>
      {subtitle ? (
        <p className="mt-1.5 font-mono text-[0.75rem] leading-snug text-muted">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function ArrowGlyph({
  horizontal = false,
  className,
}: {
  horizontal?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      {horizontal ? (
        <>
          <path d="M5 12h13" />
          <path d="m12 6 6 6-6 6" />
        </>
      ) : (
        <>
          <path d="M12 5v13" />
          <path d="m6 12 6 6 6-6" />
        </>
      )}
    </svg>
  );
}

function Arrow({
  label,
  horizontal = false,
}: {
  label?: string;
  horizontal?: boolean;
}) {
  return (
    <div className="flex flex-row items-center justify-center gap-1.5 py-1.5">
      <ArrowGlyph horizontal={horizontal} className="size-4 text-ink" />
      {label ? (
        <span className="font-mono text-[0.75rem] uppercase tracking-[0.05em] text-muted">
          {label}
        </span>
      ) : null}
    </div>
  );
}

function Note({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 rounded-md border border-dashed border-line-strong px-3.5 py-2.5 font-mono text-[0.75rem] leading-relaxed text-muted">
      {children}
    </p>
  );
}

function Frame({
  label,
  caption,
  children,
}: {
  label: string;
  caption?: string;
  children: ReactNode;
}) {
  return (
    <figure
      role="img"
      aria-label={label}
      className="rounded-lg border border-line bg-paper p-5 sm:p-6"
    >
      {children}
      {caption ? (
        <figcaption className="mt-4 border-t border-line pt-3 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function WebhookDiagram() {
  return (
    <Frame
      label="Webhook delivery architecture: an ingestion API persists events, deliveries and outbox rows in one PostgreSQL transaction; a dispatcher moves outbox rows to BullMQ on Redis; a delivery worker claims a delivery with a lease and sends an HMAC-signed POST to the customer endpoint."
      caption="Webhook Delivery Service · delivery path"
    >
      <div className="mx-auto max-w-[18rem]">
        <Box title="Ingestion API" subtitle="POST /v1/events" />
        <Arrow label="one transaction" />
        <Box
          title="PostgreSQL · source of truth"
          subtitle="events · deliveries · outbox · delivery_attempts"
          tone="accent"
        />
        <Arrow label="unpublished outbox rows" />
        <Box title="Dispatcher → BullMQ" subtitle="Redis" />
        <Arrow label="atomic lease claim" />
        <Box title="Delivery worker" subtitle="HMAC-signed POST" />
        <Arrow label="receiver processes" />
        <Box title="Customer endpoint" subtitle="HTTPS" />
      </div>
      <Note>
        Reconciler reclaims expired leases from crashed workers. Failed deliveries
        are replayable with full attempt history.
      </Note>
    </Frame>
  );
}

export function NotificationDiagram() {
  return (
    <Frame
      label="Event-driven notification architecture: an event API writes the event and an outbox row to PostgreSQL in one transaction; a worker publishes outbox messages to RabbitMQ and consumes them to perform delivery work."
      caption="Notification System · accept, then deliver"
    >
      <div className="mx-auto max-w-[18rem]">
        <Box title="Event API" subtitle="POST /api/v1/events" />
        <Arrow label="one transaction" />
        <Box
          title="PostgreSQL"
          subtitle="events · outbox"
          tone="accent"
        />
        <Arrow label="worker publishes" />
        <Box title="RabbitMQ" />
        <Arrow label="worker consumes" />
        <Box title="Delivery worker" subtitle="performs delivery work" />
      </div>
      <Note>
        API keys are stored only as SHA-256 hashes. Idempotency keys make repeated
        submissions return the original event instead of creating duplicates.
      </Note>
    </Frame>
  );
}

export function TicketingLifecycle() {
  return (
    <Frame
      label="Reservation lifecycle: availability equals capacity minus reserved minus sold. Creating a reservation increases reserved and writes a HOLD; confirmation converts reserved to sold and writes a SALE; cancellation or expiry releases reserved and writes a RELEASE."
      caption="Ticketing System · inventory lifecycle"
    >
      <div className="mb-4">
        <Box
          title="availability = capacity − reserved − sold"
          tone="accent"
        />
      </div>
      <div className="grid gap-1 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
        <Box title="HOLD" subtitle="reserved +1" />
        <Arrow label="confirm" horizontal />
        <Box title="SALE" subtitle="reserved → sold" />
        <Arrow label="cancel / expire" horizontal />
        <Box title="RELEASE" subtitle="reserved −1" />
      </div>
      <Note>
        Bookings lock the ticket type with SELECT … FOR UPDATE before checking
        availability, so concurrent requests cannot over-reserve. Pending holds
        expire after 10 minutes.
      </Note>
    </Frame>
  );
}

export function ProjectDiagram({
  diagram,
}: {
  diagram: "webhook" | "notification" | "ticketing";
}) {
  if (diagram === "webhook") return <WebhookDiagram />;
  if (diagram === "notification") return <NotificationDiagram />;
  return <TicketingLifecycle />;
}
