import { Component, For } from 'solid-js';
import { Routes, Route } from '@solidjs/router';
import { appRouter } from './routesConfig';

export const RouterComponent: Component = () => {
  const paths = appRouter.getRoutesAsArray();

  return (
    <Routes>
      <For each={paths}>
        {({ path, page }) => <Route path={path} component={page}></Route>}
      </For>
    </Routes>
  );
};
