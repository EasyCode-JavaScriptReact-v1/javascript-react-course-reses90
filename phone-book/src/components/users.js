import {Url} from '../url/url';

const serverSide = new Url();
const users = JSON.parse(serverSide.obtainUsers());

export {users};