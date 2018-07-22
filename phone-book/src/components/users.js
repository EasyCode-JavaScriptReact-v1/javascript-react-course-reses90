import {Url} from '../url/url';

const serverSide = new Url();
const users = serverSide.getUsersFromServer();

export {users};