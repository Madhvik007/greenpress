import {FastifyRequest} from 'fastify/types/request';

export const handlers = {
  refreshToken: [],
  newTenant: [],
  manifest: [],
  storeUser: [],
}
export type StandardPayload = { sub: string, identifier: string };

export type DataWithPayload<T>  = { payload: T & StandardPayload }

export type RefreshTokenHandler<T> = (tokenPayload: T & StandardPayload, request: FastifyRequest) => void | DataWithPayload<T> | Promise<void | DataWithPayload<T>>
export type NewTenantHandler<T> = ({email, password, appUrl}, request: FastifyRequest) => void | DataWithPayload<T> | Promise<void | DataWithPayload<T>>

export function onRefreshToken<T = any>(handler: RefreshTokenHandler<T>) {
  handlers.refreshToken.push(handler);
}

export function onNewTenant<T = any>(handler: NewTenantHandler<T>) {
  handlers.newTenant.push(handler);
}

export function onManifest(handler: (request: FastifyRequest) => any) {
  handlers.manifest.push(handler);
}

export function onStoreUser(handler) {
  handlers.storeUser.push(handler);
}

export default handlers;
