type RouteParams = Record<string, any>;

export type RoutingParamsType = 'HOME' | 'LOGIN';

export type RoutingType = {
  to: (router: string, params?: RouteParams) => void;
  resetRouteToTop: (router: string, params?: RouteParams) => void;
  replace: (router: string, params?: RouteParams) => void;
  logout: () => void;
  goBack: () => void;
  goReset: (router: string, params?: RouteParams) => void;
  inPrivate: (router: string, params?: RouteParams) => void;
  inPublic: (router: string, params?: RouteParams) => void;
};
