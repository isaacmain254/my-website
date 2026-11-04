"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import { ProjectModal } from "@/components/work/project-modal";
import { getProject } from "@/content";
import { useBodyScrollLock } from "@/lib/hooks/use-body-scroll-lock";

type ProjectModalContextValue = {
  openProject: (slug: string, trigger?: HTMLElement | null) => void;
  closeProject: () => void;
  activeSlug: string | null;
};

const ProjectModalContext = createContext<ProjectModalContextValue | null>(null);

export function useProjectModal() {
  const context = useContext(ProjectModalContext);
  if (!context) {
    throw new Error("useProjectModal must be used within a ProjectModalProvider");
  }
  return context;
}

const HASH_PREFIX = "#project-";
const LOCATION_EVENT = "projectmodal:locationchange";

function slugFromHash(hash: string): string | null {
  if (!hash.startsWith(HASH_PREFIX)) return null;
  const slug = hash.slice(HASH_PREFIX.length);
  return getProject(slug) ? slug : null;
}

function subscribeToLocation(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener("hashchange", callback);
  window.addEventListener(LOCATION_EVENT, callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener("hashchange", callback);
    window.removeEventListener(LOCATION_EVENT, callback);
  };
}

function getLocationHash() {
  return window.location.hash;
}

function getServerHash() {
  return "";
}

export function ProjectModalProvider({ children }: { children: ReactNode }) {
  const hash = useSyncExternalStore(
    subscribeToLocation,
    getLocationHash,
    getServerHash,
  );
  const activeSlug = slugFromHash(hash);

  const openProject = useCallback(
    (slug: string) => {
      const target = `${HASH_PREFIX}${slug}`;
      if (window.location.hash !== target) {
        if (window.location.hash.startsWith(HASH_PREFIX)) {
          window.history.replaceState({ projectModal: slug }, "", target);
        } else {
          window.history.pushState({ projectModal: slug }, "", target);
        }
        window.dispatchEvent(new Event(LOCATION_EVENT));
      }
    },
    [],
  );

  const closeProject = useCallback(() => {
    if (window.history.state?.projectModal) {
      window.history.back();
    } else {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
      window.dispatchEvent(new Event(LOCATION_EVENT));
    }
  }, []);

  useBodyScrollLock(activeSlug !== null);

  const project = activeSlug ? getProject(activeSlug) ?? null : null;

  const value = useMemo(
    () => ({ openProject, closeProject, activeSlug }),
    [openProject, closeProject, activeSlug],
  );

  return (
    <ProjectModalContext.Provider value={value}>
      {children}
      {project ? (
        <ProjectModal project={project} onClose={closeProject} />
      ) : null}
    </ProjectModalContext.Provider>
  );
}
