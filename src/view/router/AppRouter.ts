import { Component } from "solid-js";
import { RouteAsArrayType } from "./AppRouter.types";

export default class AppRouter {
  private routes: Record<string, Component> = {};

  getRoutesAsArray(): RouteAsArrayType[] {
    return Object.keys(this.routes).map(key => ({ path: key, page: this.routes[key] }));
  }

  addToRoutesList(path: string, page: Component): void {
    if (this.routes[path]) {
      throw new Error('This route already exist');
    }
    this.routes[path] = page;
  }
}