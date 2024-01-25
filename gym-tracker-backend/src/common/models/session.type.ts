import session, { SessionData } from 'express-session';

export type Session = session.Session & Partial<SessionData>;
