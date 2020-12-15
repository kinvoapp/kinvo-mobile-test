/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavigationContainerRef } from '@react-navigation/core';
import {
  CommonActions,
  NavigationAction,
  StackActions,
} from '@react-navigation/native';
import { RoutesPublic, StacksRoutes } from './routing';

type RouteParams = Record<string, any>;

let navigator: NavigationContainerRef;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function setTopLevelNavigator(navigatorRef: any): void {
  navigator = navigatorRef;
}

export function dispatch(fn: NavigationAction): void {
  navigator.dispatch(fn);
}

export function resetRouteToTop(
  routeName: string,
  params?: Record<string, any>,
): void {
  navigator.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: routeName,
          params,
        },
      ],
    }),
  );
}

export function to(routeName: string, params?: RouteParams): void {
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  );
}

export function goBack(): void {
  navigator.dispatch(CommonActions.goBack());
}

export function logout(): void {
  // Storage.clearWholeStorage();
  resetRouteToTop(StacksRoutes.PUBLIC, {
    name: RoutesPublic.Login,
  });
}

export function inPublic(route: string, params?: RouteParams): void {
  resetRouteToTop(StacksRoutes.PUBLIC, {
    name: route,
    params,
  });
}

export function inPrivate(route: string, params?: RouteParams): void {
  resetRouteToTop(StacksRoutes.PRIVATE, {
    name: route,
    params,
  });
}

export function goReset(route: string, params?: RouteParams): void {
  resetRouteToTop(route, {
    name: route,
    params,
  });
}

export function replace(name: string, params?: RouteParams): void {
  navigator.dispatch(StackActions.replace(name, params));
}

export default {
  to,
  replace,
  logout,
  goBack,
  setTopLevelNavigator,
  resetRouteToTop,
  goReset,
  inPublic,
  inPrivate,
};
