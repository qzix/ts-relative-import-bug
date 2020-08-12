// absolute import works fine, non-relative "utils" is resolved relatively to baseUrl
import { srcUtils } from 'utils';
// relative import of module that has same name as module in baseUrl is broken, WS resolves it from baseUrl
import { logicUtils } from './utils';
// relative import of module that does not exist in baseUrl works fine
import { other } from './other';

srcUtils();
logicUtils();
other();
