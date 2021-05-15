import {LOGIN_ROUTE, CHAT_ROUTE} from './utils/const';
import Login from "./componets/login";
import Chat from "./componets/chat";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
];

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Chat
    }
];