import { lazy } from 'solid-js';
import AppRouter from './AppRouter';

// LAZYLOADING COMPONENTS
const MainPage = lazy(() => import('../pages/main'));
const ComponentsPage = lazy(() => import('../pages/ComponentsPage'));
const Page404 = lazy(() => import('../pages/404-page'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const BlogPage = lazy(() => import('../pages/BlogPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const appRouter = new AppRouter();

// ADDING ROUTE
appRouter.addToRoutesList('/', MainPage);
appRouter.addToRoutesList('/about', AboutPage);
appRouter.addToRoutesList('/contacts', ContactsPage);
appRouter.addToRoutesList('/blog', BlogPage);
appRouter.addToRoutesList('/*', Page404);
appRouter.addToRoutesList('/components', ComponentsPage);
