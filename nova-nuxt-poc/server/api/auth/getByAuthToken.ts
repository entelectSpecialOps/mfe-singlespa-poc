import { IUser } from '@/types/IUser';
import { defineEventHandler, H3Event, parseCookies, setCookie } from 'h3'
import { getUserBySessionToken } from '@/server/services/sessionService';

export default defineEventHandler<IUser>(async (event) => {
  //const authToken = useCookie(event.node.req, 'auth_token');
  const authToken = parseCookies(event);

  const user = await getUserBySessionToken(authToken['auth_token'])

  return user
})