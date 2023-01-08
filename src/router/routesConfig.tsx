import { lazy } from 'solid-js';
import AppRouter from './AppRouter';

// LAZYLOADING COMPONENTS
const MainPage = lazy(() => import('../pages/main'));
const ComponentsPage = lazy(() => import('../pages/components'));
const Page404 = lazy(() => import('../pages/404'));
const AboutPage = lazy(() => import('../pages/about'));
const BlogPage = lazy(() => import('../pages/blog'));
const ContactsPage = lazy(() => import('../pages/contacts'));

export const appRouter = new AppRouter();

// ADDING ROUTE
appRouter.addToRoutesList('/', MainPage);
appRouter.addToRoutesList('/about', AboutPage);
appRouter.addToRoutesList('/contacts', ContactsPage);
appRouter.addToRoutesList('/blog', BlogPage);
appRouter.addToRoutesList('/*', Page404);
appRouter.addToRoutesList('/components', ComponentsPage);
