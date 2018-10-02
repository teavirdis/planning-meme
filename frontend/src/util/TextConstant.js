const DEFAULT_COOKIE_REGEX = `/([.$?*|()\[\]\\\/+^])/g`;

const DEFAULT_COOKIE_VALUE = '=; path=/; domain=.hanatrial.ondemand.com; expires=Session';

const BOARD_URL_REGEX = /boards\/([\d]+)\/stories/g;

const USER_COOKIE_NAME = 'user';

export {DEFAULT_COOKIE_REGEX, BOARD_URL_REGEX, USER_COOKIE_NAME, DEFAULT_COOKIE_VALUE};